// 1.find maximum and minimum in array.
// #include <iostream>
// #include <vector>
// #include <climits>
// using namespace std;

// int main() {
//     vector<int> arr = {100, 3, 2, 1000, 300, 50};

//     int largest = INT_MIN;

//     for(int x : arr) {
//         if(x > largest) {
//             third_largest = sec_largest;
//             sec_largest = largest;
//             largest = x;
//         }
//     }

//     cout << largest << endl;
// }

// 2.find the second and third largest element.
// #include <iostream>
// #include <vector>
// #include <climits>
// using namespace std;

// int main() {
//     vector<int> arr = {100, 3, 2, 1000, 300, 50};

//     int largest = INT_MIN;
//     int sec_largest = INT_MIN;
//     int third_largest = INT_MIN;

//     for(int x : arr) {
//         if(x > largest) {
//             third_largest = sec_largest;
//             sec_largest = largest;
//             largest = x;
//         }
//         else if(x > sec_largest && x != largest) {
//             third_largest = sec_largest;
//             sec_largest = x;
//         }
//         else if(x > third_largest && x != sec_largest && x != largest) {
//             third_largest = x;
//         }
//     }

//     cout << largest << endl;
//     cout << sec_largest << endl;
//     cout << third_largest << endl;
// }

// 3.Reverse the Array
// #include <iostream> 
// #include <vector> 
// using namespace std; 
// int main(){ 
//     vector<int> arr = {100,3,2,1000,300,50}; 
//     int n = arr.size(); 
//     for(int i=0;i<n/2;i++){ 
//         int temp = arr[i]; 
//         arr[i] = arr[n-1-i]; 
//         arr[n-1-i] = temp; 
//     } 
//     for(int i=0;i<n;i++){ 
//         cout<<arr[i]<<endl; 
//     } 
//     return 0;
// }

// 4.Rotate an Array by k position
// #include <iostream>
// #include <vector>
// using namespace std;

// void reversePart(vector<int>& arr, int start, int end) {
//     while(start < end) {
//         int temp = arr[start];
//         arr[start] = arr[end];
//         arr[end] = temp;
//         start++;
//         end--;
//     }
// }

// int main() {
//     vector<int> arr = {1,2,3,4,5,6,7};
//     int k = 3;
//     int n = arr.size();

//     k %= n;  // handle big k

//     // Step 1: reverse whole array
//     reversePart(arr, 0, n - 1);

//     // Step 2: reverse first k elements
//     reversePart(arr, 0, k - 1);

//     // Step 3: reverse remaining elements
//     reversePart(arr, k, n - 1);

//     for(int x : arr) cout << x << " ";
// }


// 5.move all zeros to the end
// #include <iostream>
// #include <vector>
// using namespace std;

// int main() {
//     vector<int> arr = {0, 0, 5, 0, 2, 7, 0, 9};
//     int n = arr.size();
//     int j=0;
//     for(int i=0; i <n; i++){
//         if(arr[i]!=0){
//             swap(arr[i],arr[j]);
//             j++;
//         }
//     }
//     for(int x : arr) cout << x << " ";
// }

// 6.Remove duplicate from sorted/unsorted array;
// #include <iostream>
// #include <vector>
// using namespace std;

// int main() {
//     vector<int> arr = {1,1,2,2,2,3,4,4};
//     int n = arr.size();

//     int j = 0; // index for unique elements

//     for(int i = 1; i < n; i++) {
//         if(arr[i] != arr[j]) {
//             j++;
//             arr[j] = arr[i];
//         }
//     }

//     for(int i = 0; i <= j; i++)
//         cout << arr[i] << " ";
// }

// 7.merge two sorted array without extra space


//10.
#include <iostream>
#include <unordered_set>
using namespace std;

int main() {
   
   int arr[] = {1,8,-7,5,4,3,-12};
   int size = sizeof(arr)/sizeof(arr[0]);
   int sum = 0;
   unordered_set<int> ab;
   
   for(int a : arr ){
       sum+=a;
       
       if(sum == 0 || ab.count(sum)) {
           cout << "True";
           return 0;
       }
       
       ab.insert(sum);
       
   }

    return  0;
}

//11.
// Online C++ compiler to run C++ program online
#include <iostream>
#include <climits>
using namespace std;

int main() {
   
   int arr[] = {1,8,-7,5,4,3,-12};
   int size = sizeof(arr)/sizeof(arr[0]);
   
   int currentsum = 0;
   int maxsum = INT_MIN;
   
   for(int a : arr){
       currentsum += a;
       maxsum = max(currentsum, maxsum);
       
    if(currentsum < 0){
       currentsum = 0;
        }
   }
   
   cout << maxsum;
    return  0;
}

//12.
// Online C++ compiler to run C++ program online
#include <iostream>
#include <climits>
#include <unordered_set>
using namespace std;

int main() {
   
   int arr[] = {1,8,-7,5,4,3,-12};
   int size = sizeof(arr)/sizeof(arr[0]);
   
   int givensum = 15;
   unordered_set<int> ab;
   int sum = 0;
   
   for(int a : arr){
       sum += a;
      
      if(sum == givensum){
         cout << "True";
           return 0;
      }
       
       if(ab.count(sum-givensum)) {
           cout << "True";
           return 0;
       }
       
       ab.insert(sum);
   }
  cout << "Not Found";
    return  0;
}

//13.
#include <iostream>
#include <climits>
#include <algorithm>
using namespace std;

int main() {
    int arr[] = {2, -5, -2, -4, 3};
    int n = sizeof(arr)/sizeof(arr[0]);

    int maxProd = arr[0];
    int minProd = arr[0];
    int result = arr[0];

    for(int i = 1; i < n; i++) {
        int x = arr[i];

        // store previous max
        int prevMax = maxProd;

        maxProd = max({x, x * maxProd, x * minProd});
        minProd = min({x, x * prevMax, x * minProd});

        result = max(result, maxProd);
    }

    cout << "Maximum product subarray = " << result;
    return 0;
}

//14.
#include <iostream>
#include <unordered_map> 
using namespace std;

int main() {
    int arr[] = {2, -5, -2, -4, 3};
    int n = sizeof(arr)/sizeof(arr[0]);
    int k =3;

    int sum =0; 
    int count = 0;
    
    unordered_map <int,int> mp;
    mp[0] = 1;
    
    for(int x : arr){
        sum+=x;
        
        if(mp.count(sum-k)){
            count+=mp[sum-k];
        }
        
        mp[sum]++;
    }
    
    cout << "Count = " << count;
    return 0;
}

//15.
#include <iostream>
#include <unordered_map>
using namespace std;

int main() {
    int arr[] = {2, 7, 11, 15};
    int n = sizeof(arr)/sizeof(arr[0]);
    int k = 9;

    unordered_map<int, int> mp;  

    for (int i = 0; i < n; i++) {
        int x = arr[i];
        int need = k - x;

        if (mp.count(need)) {
            cout << "Pair found: " << arr[mp[need]] << " + " << x;
            return 0;
        }

        mp[x] = i;
    }

    cout << "No pair found";
    return 0;
}

//17.
#include <bits/stdc++.h>
using namespace std;

int lengthOfLongestSubstringKDistinct(string s, int k) {
    if (k == 0) return 0;

    unordered_map<char, int> freq; 
    int left = 0, maxLen = 0;

    for (int right = 0; right < s.length(); right++) {
        freq[s[right]]++;

        // shrink window if too many distinct chars
        while (freq.size() > k) {
            freq[s[left]]--;
            if (freq[s[left]] == 0) {
                freq.erase(s[left]);
            }
            left++;
        }

        maxLen = max(maxLen, right - left + 1);
    }

    return maxLen;
}

int main() {
    string s = "eceba";
    int k = 2;
    cout << lengthOfLongestSubstringKDistinct(s, k);
}


//18.
// Online C++ compiler to run C++ program online
#include <iostream>
using namespace std;

int binarysearch(int arr[], int n, int target){
    int left =0;
    int right = n-1;
    
    int mid =  left + (right-left)/2;
    
   while(left <= right){
    if(arr[mid] = target) return target;
    
    else if(arr[mid] < target) left = mid+1;
    
    else right = mid-1;
   }
   return -1;
}

int main() {
     int arr[] = {1, 3, 5, 7, 9, 11, 13};
    int n = sizeof(arr) / sizeof(arr[0]);
    int target = 7;

    int index = binarysearch(arr, n, target);

    if (index != -1)
        cout << "Found at index " << index;
    else
        cout << "Not found";

    return 0;
}

//19.
// Online C++ compiler to run C++ program online
#include <iostream>
using namespace std;

int main() {
     int arr[] = {1, 2, 4, 5};
    int n = sizeof(arr) / sizeof(arr[0]);
   
   int total = (n+1) * (n+2) /2;
   
   int arraysum = 0;
   
   for(int a : arr) arraysum+=a;
   
   cout << "Missing Number : " << total-arraysum;

    return 0;
}

//21.
#include <bits/stdc++.h>
using namespace std;

int main() {
     vector<int> arr = {3, 2, 1, 5, 6, 4};
    int k = 1;
    
    priority_queue<int, vector<int> , greater<int> > mh;
    
    for(int a : arr) {
        mh.push(a);
        
        if(mh.size() > k) mh.pop();
    }
    
    cout << mh.top();
}

//22.
#include <bits/stdc++.h>
using namespace std;

int main() {
    vector<int> arr = {7, 10, 4, 3, 20, 15};
    int k = 3;

    priority_queue<int> maxHeap; // max heap

    for (int x : arr) {
        maxHeap.push(x);
        if (maxHeap.size() > k)
            maxHeap.pop();      
    }

    cout << maxHeap.top();       // Kth smallest
}


//25.
#include <iostream>
#include <cmath>
using namespace std;

bool isPrime(int n) {

    if (n <= 1)
        return false;

    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0)
            return false;     // found a factor
    }

    return true;
}

int main() {
    int n = 29;

    if (isPrime(n))
        cout << "Prime";
    else
        cout << "Not Prime";

    return 0;
}

//26.
#include <iostream>
using namespace std;

bool isPalindrome(int n) {
    int original = n;
    int reversed = 0;

    while (n > 0) {
        int digit = n % 10;         
        reversed = reversed * 10 + digit;  
        n /= 10;                    
    }

    return original == reversed;
}

int main() {
    int n = 121;

    if (isPalindrome(n))
        cout << "Palindrome";
    else
        cout << "Not Palindrome";

    return 0;
}

//27.
#include <iostream>
using namespace std;

bool isSorted(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;   
        }
    }
    return true;  
}

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int n = sizeof(arr)/sizeof(arr[0]);

    if (isSorted(arr, n))
        cout << "Sorted";
    else
        cout << "Not Sorted";
}




