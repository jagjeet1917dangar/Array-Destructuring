// let promise = new Promise((resolve, reject) => {
//     let success = true;
//     if (success) {
//         resolve("The operation was successful.");
//     } else {
//         reject("The operation failed.");
//     }
// });
// console.log(promise)

// promise.then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log("Error: ");
//     console.log(error);
//     console.error(error);
// }).finally(() => {
//     console.log("Promise has been settled (either resolved or rejected).");
// });


// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => {
//         return response.json().then(data => {
//             console.log(data);
//         })
//     })
//     .catch(error => {
//         console.error('Error');
//         console.error('Error fetching data:', error);
//     })
//     .finally(() => {
//         console.log('Fetch operation completed.');
//     });

// new Promise((resolve) => {
//     resolve(2);
// }).then((num) => {
//     console.log(num); 
//     return num * 2;
// }).then((num) => {
//     console.log(num);
//     return num * 2;
// }).then((num) => {
//     console.log(num);
// });

// Promise.any([
//     fetch('https://jsonplaceholder.typicode.com/posts/1'),
//     fetch('https://jsonplaceholder.typicode.com/posts/2'),
//     fetch('https://sonplaceholder.typicode.com/posts/3')
// ])
// .then(response => {
//     console.log("all done",response)
// })
// .catch(error => {
//     console.error('Error fetching data:', error);
// });

// async function getData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     } finally {
//         console.log('Fetch operation completed.');
//     }
// }

// getData();

// reverse the string by using two pointers

// let str = 'salelha elelha';
// let charArray = str.split('');
// let i = 0;
// let j = charArray.length - 1;   
// while (i < j) {
//     let temp = charArray[i];
//     charArray[i] = charArray[j];
//     charArray[j] = temp;
//     i++;
//     j--;
// }
// console.log(charArray.join(''));


//palindrome check using two pointers
// let str = 'raecar';
// let charArray = str.split('');
// let i = 0;
// let j = charArray.length - 1;   
// while (i < j) {
//     let temp = charArray[i];
//     charArray[i] = charArray[j];
//     charArray[j] = temp;
//     i++;
//     j--;
// }
// console.log(str ==charArray.join(''));

// Find the frequency of each character in a string
// let str = 'aabbc';
// let map = new Map();
// for (let char of str) {
//   if (char !== " ") {  
//     map.set(char, (map.get(char) || 0) + 1);
//   }
// }
// for (let [key, value] of map) {
//   console.log(`${key}: ${value}`);
// }


// const search = (query)=>{
//     console.log(`Searching for `, query);
// }

// const debounce = (func, delay) => {
//     let timeoutId;
//     return (...args) => {
//         if (timeoutId) {    
//             clearTimeout(timeoutId);
//         }
//         timeoutId = setTimeout(() => {
//             func(...args);
//         }
//         , delay);
//     }
// }
// const debouncedSearch = debounce(search, 100);
// document.getElementById("search-input").addEventListener("input", (e) => {
//     debouncedSearch(e.target.value);
// });

function throttling(sendMessage,timeDelay){
    let lastCall = 0;
    return function(message){
        const now = Date.now();
        if(now - lastCall < timeDelay){
            return;
        }
        lastCall = now;
        sendMessage(message);
    }
}

function sendMessage(message){
    console.log("sending message", message);
}

let SendMessageWithThrottle = throttling(sendMessage, 2000);
SendMessageWithThrottle();
sendMessage("Hello");
sendMessage("How are you?");
sendMessage("Goodbye");


