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

// function throttling(sendMessage,timeDelay){
//     let lastCall = 0;
//     return function(message){
//         const now = Date.now();
//         if(now - lastCall < timeDelay){
//             return;
//         }
//         lastCall = now;
//         sendMessage(message);
//     }
// }

// function sendMessage(message){
//     console.log("sending message", message);
// }

// let SendMessageWithThrottle = throttling(sendMessage, 2000);
// SendMessageWithThrottle();
// sendMessage("Hello");
// sendMessage("How are you?");
// sendMessage("Goodbye");


// function BankAccount(amount){
//     let balance = amount;
//     function ValidateAmount(amountToValidate){
//         return amountToValidate > 0 && typeof amountToValidate === 'number';
//     };
//     return {
//         checkBalance: function(){
//             return balance;
//         },
//         deposit: function(DepositAmount){
//             if(ValidateAmount(DepositAmount)){
//                 balance += DepositAmount;
//             console.log(`your amount has been deposited ${DepositAmount}`);
//             }
//             else{
//                 console.log("Please enter the valid amount to deposit");
//             }
//         },
//         withdraw: function(WithdrawAmount){
//             if(ValidateAmount(WithdrawAmount)&& WithdrawAmount <= balance){
//                 balance -= WithdrawAmount;
//             }
//             else{
//                 console.log("Please enter the valid amount to withdraw");
//             }
//         }
//     }
// }
// const user1 = BankAccount(2000);
// user1.withdraw(3000);
// user1.checkBalance();

// class UserProfile {
//     #email;
//     #password;
//     #loginAttempts;
//     username;

//     constructor(username, email, password) {
//         this.username = username;
//         this.#email = email;
//         this.#password = this.#hashedPassword(password);
//         this.#loginAttempts = 0;
//     }

//     #hashedPassword(password) {
//         return `hashed_${password}`; 
//     }

//     getEmail() {
//         return this.#email;
//     }

//     updatePassword(oldPassword, newPassword) {
//         if (this.#password === this.#hashedPassword(oldPassword)) {
//             this.#password = this.#hashedPassword(newPassword);
//             console.log("Password updated successfully.");
//         } else {
//             console.log("Old password is incorrect.");
//         }
//     }

//     login(user, passworduser) {
//         if(this.#loginAttempts >= 5) {
//             console.log( `Account locked due to too many failed login attempts.`);
//         }
//         if (user === this.username || user === this.#email) {
//             if (this.#password === this.#hashedPassword(passworduser)) {
//                 console.log("Login successful.");
//             } else {
//                 this.#loginAttempts++;
//                 return `Incorrect password.`;
//             }
//         } else {
//             return `User does not exist.`;
//         } 
//     }

//     logout() {
//         this.#loginAttempts = 0;
//         return `Logged out successfully.`;
//     }
// }

// const user = new UserProfile("Jagjeet", "xyz@gmail.com", "1234");

// // console.log(user.getEmail());      
// user.login("Jagjeet", "123455");
// user.login("Jagjeet", "123455");
// user.login("Jagjeet", "123455");
// user.login("Jagjeet", "123455");
// user.login("Jagjeet", "123455");
// user.login("Jagjeet", "123455");
// user.login("Jagjeet", "123455");

// class Animal{
//     #isAlive;
//     constructor(name, species){
//         this.name = name;
//         this.species = species;
//         this.#isAlive = true;
//     };
//     eat(food){
//         return `${this.name} is eating ${food}.`;
//     }
//     sleep(hours){
//         return `${this.name} is sleeping for ${hours} hours.`;
//     }
//     makeSound(){
//         return `${this.name} makes a sound.`;
//     }
//     getInfo(){
//         return `Name: ${this.name}, Species: ${this.species}, Alive: ${this.alive}`;
//     };
// };

// class Dog extends Animal{
//     constructor(name, breed){
//         super(name, 'German Shepherd');
//         this.breed = breed;
//         this.#loyalityLevel = 10;
//     }
//     #loyalityLevel;

//     makeSound(){
//         return `${this.name} barks. Woof Woof!`;
//     }
//     WagTail(){
//         return `${this.name} is wagging its tail happily.`;
//     }
//     getInfo(){ 
//         return `${super.getInfo()}, Breed: ${this.breed}`;
//     };
// }

// const dog = new Dog('Buddy', 'German Shepherd');
// console.log(dog.eat('banana'));
// console.log(dog.getInfo());

// class Person {
//     name;
//     age;
//     email;
//     constructor(name, age, email) {
//         this.name = name;
//         this.age = age;
//         this.email = email;
//     }
//     getPersonInfo() {
//         return `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`;
//     }
//     Introduce() {
//         return `Hello, my name is ${this.name}, I am ${this.age} years old. You can contact me at ${this.email}.`;
//     }
// };

// class Employee extends Person {
//     constructor(name, age, email, EmployeeID, department) {
//         super(name, age, email);
//         this.EmployeeID = EmployeeID;
//         this.department = department;
//         this.#salary = 0;
//     }
//     #salary;
//     setSalary(salaryAmount) {
//         return this.#salary = salaryAmount;
//     }
//     getSalary() {
//         return this.#salary;
//     }
//     work() {
//         return `${this.name} is working in the ${this.department} department.`;
//     }
//     getEmployeeInfo() {
//         return `${super.getPersonInfo()}, EmployeeID: ${this.EmployeeID}, Department: ${this.department}`;
//     }
//     Introduce() {
//         return `${super.Introduce()} I work in the ${this.department} department.`;
//     }
// };

// class Manager extends Employee {
//     constructor(name, age, email, EmployeeID, department, teamSize) {
//         super(name, age, email, EmployeeID, department);
//         this.teamSize = teamSize;
//         this.#managedEmployees = [];
//     }
//     #managedEmployees;

//     addEmployee(employee) {
//         if (employee instanceof Employee) {
//             this.#managedEmployees.push(employee);
//             return `${employee.name} has been added to ${this.name}'s team.`;
//         }
//     }
//     getEmployee() {
//         return this.#managedEmployees.map(emp => emp.name)
//     }
//     work() {
//         return `${this.name} is managing a team of ${this.teamSize} employees in the ${this.department} department.`;
//     }
//     Introduce(){
//         return `${super.Introduce()} I manage a team of ${this.teamSize} employees.`;
//     }
// };

// class Developer extends Manager{
//     constructor(name, age, email, EmployeeID, department, teamSize, programmingLanguages){
//         super(name, age, email, EmployeeID, department, teamSize);
//         this.programmingLanguages = programmingLanguages;
//         this.#projectCompleted = 0;
//     }
//     #projectCompleted;
//     WriteCode(language){
//         return `${this.name} is writing code in ${language}.`;
//     }
//     completeProject(){
//         this.#projectCompleted += 1;
//         return `${this.name} completed project ${this.#projectCompleted}.`;
//     }
//     getProjectCount(){
//         return this.#projectCompleted;
//     }
//     work(){
//         return `${super.work()} and coding in ${this.programmingLanguages.join(", ")}.`;
//     }
//     Introduce(){
//         return `${super.Introduce()} I specialize in ${this.programmingLanguages.join(", ")}.`;
//     }
// };

// const man = new Manager('Bob', 40, 'xyz@outlook.com', 'M456', 'Engineering', 10);
// const dev = new Developer('Alice', 30, 'xyz@gmail.com', 'E123', 'Software Development', 5, ['JavaScript', 'Python']);
// console.log(dev.setSalary(120000));
// console.log(man)

//polymorphism in javascript

// class Calculator {
//     add(...number) {
//         if(number.length === 0){
//             return "Please provide at least one number to add.";
//         }
//         if(number.length === 1 && typeof number[0] === 'number'){
//             return number[0];
//         }
//         if(number.length === 2){
//             return number[0] + number[1];
//         }
//         if(number.length > 2){
//             return number.reduce((sum, num) => sum + num, 0);
//         }
//     }
// };

// const calc = new Calculator();
// console.log(calc.add());
// console.log(calc.add(5));
// console.log(calc.add(5, 10));
// console.log(calc.add(1, 2, 3, 4, 5));

// class DebitCard{
//     pay(){
//         console.log("Payment done using Debit Card");
//     }
// };

// class CreditCard{
//     pay(){
//         console.log("Payment done using Credit Card");
//     }
// };

// class UPI{
//     pay(){
//         console.log("Payment done using UPI");
//     }
// };

// function PayNow(paymentMethod){
//     paymentMethod.pay();
// }

// const debit = new DebitCard();
// const credit = new CreditCard();
// const upi = new UPI();
// PayNow(debit);
// PayNow(credit);
// PayNow(upi);

// class Animal{
//     makesSound(){
//         console.log("Abstract method must be implemented.");
//     }
// };

// move all the negative integers at the end of the array using two pointers
// let arr = [ -1,2,-3,-6,5,4,7];
// let i = 0;
// let j = 0;
// while(i<=j){
//     if(arr[i]<0 && arr[j] >0){
//         [arr[i],arr[j]] = [arr[j],arr[i]];
//         i++;
//         j--;
//     }
//     else if(arr[i]>=0){
//         i++;
//     }
//     else{
//         j--;
//     }
// }
// for(i;i<arr.length;i++){
//     if(arr[i]>=0){
//         [arr[i],arr[j]] = [arr[j],arr[i]]
//         j++;
//     }
// }
// console.log(arr)

// sort 0's, 1's and 2's in an array using two pointers
// let arr = [2,0,1,2,1,0,1,2,0];
// let i = 0;
// let j = 0;
// let k = arr.length - 1;
// while(j <= k){
//     if(arr[j] === 0){
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//         i++;
//         j++;
//     }
//     else if(arr[j] === 1){
//         j++;
//     }
//     else{
//         [arr[j], arr[k]] = [arr[k], arr[j]];
//         k--;
//     }
// }
// console.log(arr)

// maximum sum of subarray
// let arr = [2,3,-8,7,-1,2,3];
// let maxSum = 0;
// let currentSum = 0;

// for(let i = 0; i < arr.length; i++) {
//     currentSum = Math.max(arr[i], currentSum + arr[i]);
//     maxSum = Math.max(maxSum, currentSum);
// }
// console.log(maxSum); 

// Find the non repeating character in an array and print it
let arr = [-1,2,-1,3,2];
let charCount = new Map();
for(let i =0;i<arr.length;i++){
    if(charCount.has(arr[i])){
        charCount.set(arr[i], charCount.get(arr[i])+1);
    }
    else{
        charCount.set(arr[i],1);
    }
}
for(let i =0;i<arr.length;i++){
    if(charCount.get(arr[i])===1){
        console.log(arr[i]);
        break;
    }
}

