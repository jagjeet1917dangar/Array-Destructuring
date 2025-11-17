# JavaScript Interview Questions & Answers

## 8. Explain call, bind, and apply methods

**call()**: Invokes a function with a specified `this` value and individual arguments passed one by one.

```javascript
function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}
const person = { name: 'John' };
greet.call(person, 'Hello', '!'); // Hello, John!
```

**apply()**: Similar to `call()`, but arguments are passed as an array.

```javascript
greet.apply(person, ['Hi', '?']); // Hi, John?
```

**bind()**: Returns a new function with a specified `this` value and optional preset arguments. It doesn't invoke the function immediately.

```javascript
const boundGreet = greet.bind(person, 'Hey');
boundGreet('...'); // Hey, John...
```

## 9. Difference between Arrow function and traditional (normal) function

| Feature | Arrow Function | Traditional Function |
|---------|---------------|---------------------|
| **Syntax** | `const func = () => {}` | `function func() {}` |
| **`this` binding** | Lexical (inherits from parent scope) | Dynamic (depends on how it's called) |
| **`arguments` object** | Not available | Available |
| **Constructor** | Cannot be used as constructor (no `new`) | Can be used with `new` |
| **Implicit return** | Yes (for single expressions) | No, requires explicit `return` |
| **Hoisting** | Not hoisted (if assigned to variable) | Hoisted |

```javascript
// Arrow function - 'this' is lexical
const obj = {
  value: 10,
  arrow: () => console.log(this.value), // 'this' from outer scope
  normal: function() { console.log(this.value); } // 'this' is obj
};
```

## 10. Difference between function declaration and function expression

**Function Declaration**: Defined with the `function` keyword and hoisted to the top of the scope.

```javascript
sayHello(); // Works due to hoisting
function sayHello() {
  console.log('Hello!');
}
```

**Function Expression**: Function assigned to a variable, not hoisted.

```javascript
sayHi(); // Error: Cannot access before initialization
const sayHi = function() {
  console.log('Hi!');
};
```

Key differences:
- Function declarations are hoisted completely
- Function expressions are not hoisted (only variable declaration is hoisted if using `var`)
- Function expressions can be anonymous; declarations must have a name

## 11. What is event loop in JavaScript

The event loop is a mechanism that handles asynchronous operations in JavaScript's single-threaded environment. It continuously checks the call stack and callback queue to execute pending tasks.

**How it works**:
1. Executes synchronous code in the call stack
2. When async operations complete (setTimeout, Promise, etc.), their callbacks go to the task queue
3. Event loop checks if the call stack is empty
4. If empty, it moves the first callback from the queue to the call stack
5. Process repeats

```javascript
console.log('1');
setTimeout(() => console.log('2'), 0);
console.log('3');
// Output: 1, 3, 2
```

## 12. What are Promises in JavaScript

A Promise is an object representing the eventual completion or failure of an asynchronous operation. It allows you to handle async code more cleanly than callbacks.

```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success!');
    // or reject('Error!');
  }, 1000);
});

promise.then(result => console.log(result))
       .catch(error => console.log(error));
```

## 13. How many states are there in Promise? Explain each

Promises have **three states**:

1. **Pending**: Initial state, neither fulfilled nor rejected. The async operation is still in progress.

2. **Fulfilled**: The operation completed successfully, and the promise has a resulting value.

3. **Rejected**: The operation failed, and the promise has a reason for failure (error).

```javascript
// Pending
const promise = new Promise((resolve, reject) => {
  // Operation in progress
});

// Fulfilled
const fulfilled = Promise.resolve('Success');

// Rejected
const rejected = Promise.reject('Error');
```

Once a promise is settled (fulfilled or rejected), it cannot change state.

## 14. Methods of Promises

**Static Methods**:
- `Promise.resolve(value)`: Returns a resolved promise
- `Promise.reject(reason)`: Returns a rejected promise
- `Promise.all(iterable)`: Waits for all promises to resolve, rejects if any fails
- `Promise.allSettled(iterable)`: Waits for all promises to settle (resolve or reject)
- `Promise.race(iterable)`: Returns when first promise settles
- `Promise.any(iterable)`: Returns when first promise fulfills

**Instance Methods**:
- `.then(onFulfilled, onRejected)`: Handles fulfillment/rejection
- `.catch(onRejected)`: Handles rejection
- `.finally(onFinally)`: Executes regardless of outcome

```javascript
Promise.all([promise1, promise2])
  .then(results => console.log(results))
  .catch(error => console.log(error))
  .finally(() => console.log('Done'));
```

## 15. What is async/await in JavaScript

`async/await` is syntactic sugar over Promises, making asynchronous code look and behave more like synchronous code.

**async**: Declares an asynchronous function that always returns a Promise.

**await**: Pauses execution until the Promise resolves, only works inside async functions.

```javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
```

Benefits:
- More readable than `.then()` chains
- Error handling with try/catch
- Easier to debug

## 16. What are Closures

A closure is a function that has access to variables from its outer (enclosing) scope, even after the outer function has finished executing. Closures are created every time a function is created.

```javascript
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log('Outer:', outerVariable);
    console.log('Inner:', innerVariable);
  };
}

const closure = outerFunction('outside');
closure('inside');
// Outer: outside
// Inner: inside
```

**Use cases**:
- Data privacy
- Function factories
- Callbacks and event handlers
- Memoization

## 17. What is Promise chaining?

Promise chaining is the practice of executing multiple asynchronous operations in sequence, where each operation starts when the previous one completes. This is done by returning promises from `.then()` handlers.

```javascript
fetch('https://api.example.com/user')
  .then(response => response.json())
  .then(user => fetch(`https://api.example.com/posts/${user.id}`))
  .then(response => response.json())
  .then(posts => console.log(posts))
  .catch(error => console.error(error));
```

Each `.then()` returns a new promise, allowing chaining. Errors propagate down the chain to the nearest `.catch()`.

## 18. What happens if you return a promise inside .then()?

When you return a promise inside a `.then()` handler, the next `.then()` in the chain will wait for that promise to resolve before executing. The resolved value becomes the argument for the next `.then()`.

```javascript
fetch('/api/user')
  .then(response => {
    return response.json(); // Returns a promise
  })
  .then(data => {
    // Waits for response.json() to resolve
    console.log(data); // Gets the resolved value
  });
```

This flattens nested promises and prevents "promise hell," making chains more readable.

## 19. What is Memoization

Memoization is an optimization technique that stores the results of expensive function calls and returns the cached result when the same inputs occur again.

```javascript
function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

const fibonacci = memoize(function(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
});

console.log(fibonacci(40)); // Much faster with memoization
```

## 20. What is Event Delegation

Event delegation is a technique where you attach a single event listener to a parent element to handle events for multiple child elements, using event bubbling. This is efficient and works for dynamically added elements.

```javascript
// Instead of attaching listeners to each button
document.getElementById('parent').addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    console.log('Button clicked:', e.target.textContent);
  }
});
```

**Benefits**:
- Better performance (fewer event listeners)
- Works with dynamically added elements
- Less memory usage

## 21. What is Type Conversion

Type conversion (also called type coercion) is the process of converting a value from one data type to another.

**Implicit Conversion** (Coercion): JavaScript automatically converts types.

```javascript
'5' + 3;      // '53' (number to string)
'5' - 3;      // 2 (string to number)
true + 1;     // 2 (boolean to number)
```

**Explicit Conversion**: Manually converting types.

```javascript
Number('123');    // 123
String(123);      // '123'
Boolean(0);       // false
parseInt('10px'); // 10
```

## 22. What is an Event

An event is an action or occurrence that happens in the browser, such as a user clicking a button, pressing a key, or the page loading. Events trigger JavaScript code to execute.

```javascript
// Mouse events: click, dblclick, mouseenter, mouseleave
// Keyboard events: keydown, keyup, keypress
// Form events: submit, change, focus, blur
// Window events: load, resize, scroll

document.getElementById('btn').addEventListener('click', (e) => {
  console.log('Button clicked!');
  console.log('Event object:', e);
});
```

## 23. Shallow Copy and Deep Copy

**Shallow Copy**: Copies the first level of properties. Nested objects/arrays are still referenced, not copied.

```javascript
// Shallow copy methods
const original = { a: 1, b: { c: 2 } };

const copy1 = { ...original };
const copy2 = Object.assign({}, original);

copy1.b.c = 99; // Affects original.b.c too!
```

**Deep Copy**: Copies all levels recursively. Nested objects are fully independent.

```javascript
// Deep copy methods
const deepCopy1 = JSON.parse(JSON.stringify(original)); // Simple but has limitations
const deepCopy2 = structuredClone(original); // Modern approach

deepCopy1.b.c = 99; // Doesn't affect original
```

## 24. What is Prototypal Inheritance

Prototypal inheritance is a feature where objects can inherit properties and methods from other objects. Every object has a prototype (accessed via `__proto__` or `Object.getPrototypeOf()`), which is another object from which it inherits.

```javascript
const animal = {
  eat() {
    console.log('Eating');
  }
};

const dog = Object.create(animal);
dog.bark = function() {
  console.log('Barking');
};

dog.eat();  // Inherited from animal
dog.bark(); // Own method

console.log(Object.getPrototypeOf(dog) === animal); // true
```

## 25. Method Chaining with map, filter, reduce

Method chaining allows calling multiple array methods sequentially because each method returns an array (except `reduce`).

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

const result = numbers
  .filter(num => num % 2 === 0)    // [2, 4, 6]
  .map(num => num * 2)              // [4, 8, 12]
  .reduce((sum, num) => sum + num, 0); // 24

console.log(result); // 24
```

- **filter()**: Creates a new array with elements that pass a test
- **map()**: Creates a new array by transforming each element
- **reduce()**: Reduces array to a single value

## 26. Use Strict in JavaScript

`'use strict'` is a directive that enables strict mode, which enforces stricter parsing and error handling in JavaScript.

```javascript
'use strict';

// Prevents undeclared variables
x = 10; // Error: x is not defined

// Prevents deleting variables/functions
var y = 20;
delete y; // Error

// Makes 'this' undefined in functions
function test() {
  console.log(this); // undefined (not global object)
}
```

**Benefits**:
- Catches common coding errors
- Prevents unsafe actions
- Disables confusing features
- Better performance in some engines

## 27. What is Call Stack

The call stack is a data structure that tracks function calls in your program. When a function is called, it's added (pushed) to the stack. When it returns, it's removed (popped).

```javascript
function first() {
  console.log('First');
  second();
  console.log('First again');
}

function second() {
  console.log('Second');
}

first();

// Call stack progression:
// 1. [first]
// 2. [first, second]
// 3. [first] (second popped)
// 4. [] (first popped)
```

JavaScript has a single call stack (single-threaded). Stack overflow occurs when the stack size limit is exceeded (often from infinite recursion).

## 28. What is Destructuring

Destructuring is a syntax for extracting values from arrays or properties from objects into distinct variables.

**Array Destructuring**:
```javascript
const [a, b, c] = [1, 2, 3];
const [first, , third] = [1, 2, 3]; // Skip elements
const [x, ...rest] = [1, 2, 3, 4]; // Rest operator
```

**Object Destructuring**:
```javascript
const { name, age } = { name: 'John', age: 30 };
const { name: userName, age = 25 } = obj; // Rename and default value
const { a, ...others } = { a: 1, b: 2, c: 3 }; // Rest
```

**Function Parameters**:
```javascript
function greet({ name, age }) {
  console.log(`${name} is ${age}`);
}
```

## 29. Difference between Closure and Scope

**Scope**: Defines the accessibility/visibility of variables. It's the context in which variables are declared.

- Global scope: Accessible everywhere
- Function scope: Accessible within function
- Block scope: Accessible within block (`let`, `const`)

**Closure**: A function that retains access to its outer scope's variables even after the outer function has returned.

```javascript
// Scope example
function outer() {
  let outerVar = 'I am outer';
  // outerVar has function scope
}

// Closure example
function outer() {
  let outerVar = 'I am outer';
  return function inner() {
    console.log(outerVar); // Closure: accesses outerVar
  };
}
const closure = outer();
closure(); // Still has access to outerVar
```

Scope is about where variables are accessible; closures are about functions remembering their scope.

## 30. What are Async Functions

Async functions are functions declared with the `async` keyword. They always return a Promise and allow the use of `await` inside them.

```javascript
async function fetchUser() {
  const response = await fetch('/api/user');
  const data = await response.json();
  return data; // Automatically wrapped in Promise
}

// Arrow function syntax
const getData = async () => {
  try {
    const result = await someAsyncOperation();
    return result;
  } catch (error) {
    console.error(error);
  }
};
```

Key points:
- Always returns a Promise
- Can use `await` to pause execution
- Non-blocking (doesn't freeze the UI)
- Better error handling with try/catch

## 31. Internal Working of new Keyword

When you use the `new` keyword with a constructor function, JavaScript performs these steps:

1. Creates a new empty object
2. Sets the prototype of this object to the constructor's prototype
3. Binds `this` to the new object
4. Executes the constructor function
5. Returns the new object (unless constructor explicitly returns an object)

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`Hi, I'm ${this.name}`);
};

const john = new Person('John', 30);

// Behind the scenes:
// 1. const obj = {}
// 2. Object.setPrototypeOf(obj, Person.prototype)
// 3. Person.call(obj, 'John', 30)
// 4. return obj
```

## 32. Why do Arrow Functions not have this keyword

Arrow functions don't have their own `this` binding. They lexically bind `this` from the surrounding scope where they are defined.

```javascript
const obj = {
  value: 42,
  regularFunc: function() {
    console.log(this.value); // 42 (this is obj)
  },
  arrowFunc: () => {
    console.log(this.value); // undefined (this from outer scope)
  },
  nestedExample: function() {
    setTimeout(() => {
      console.log(this.value); // 42 (inherits this from nestedExample)
    }, 100);
  }
};
```

**Why this is useful**:
- Solves the common callback problem where `this` gets lost
- No need for `.bind()`, `self = this`, or `that = this` workarounds
- More predictable behavior in callbacks and event handlers

## 33. Factory Function

A factory function is a function that returns a new object. Unlike constructor functions, factory functions don't use `new` and `this`.

```javascript
function createPerson(name, age) {
  return {
    name: name,
    age: age,
    greet() {
      console.log(`Hi, I'm ${this.name}`);
    }
  };
}

const john = createPerson('John', 30);
const jane = createPerson('Jane', 25);

john.greet(); // Hi, I'm John
```

**Advantages**:
- No need for `new` keyword
- More flexible than constructor functions
- Easy to implement private variables using closures
- Can return any type of object

```javascript
// With private variables
function createCounter() {
  let count = 0; // Private
  return {
    increment() { count++; },
    decrement() { count--; },
    getCount() { return count; }
  };
}
```

## 34. What are Private Properties of Classes

Private properties are class fields that are only accessible within the class itself. In JavaScript, they are prefixed with `#`.

```javascript
class BankAccount {
  #balance = 0; // Private field

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }

  #calculateInterest() { // Private method
    return this.#balance * 0.05;
  }
}

const account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // 1500
console.log(account.#balance); // Error: Private field
```

**Benefits**:
- True encapsulation
- Prevents external modification
- Clear API boundaries
- Better data integrity

## 35. What is Web API

Web APIs are interfaces provided by the browser (not part of JavaScript language) that allow JavaScript to interact with browser features and perform asynchronous operations.

**Common Web APIs**:
- **DOM API**: Manipulate HTML/CSS (`document`, `querySelector`)
- **Fetch API**: Make HTTP requests
- **Timer APIs**: `setTimeout`, `setInterval`
- **Storage APIs**: `localStorage`, `sessionStorage`
- **Geolocation API**: Access user location
- **Canvas API**: Draw graphics
- **Web Workers API**: Run scripts in background threads

```javascript
// Examples of Web APIs
setTimeout(() => console.log('Timer'), 1000);
fetch('https://api.example.com/data');
localStorage.setItem('key', 'value');
navigator.geolocation.getCurrentPosition();
```

Web APIs handle async operations and interact with the event loop.

## 36. Difference between Class and Function Constructor

Both create objects, but with different syntax and features.

**Function Constructor** (ES5):
```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`Hi, I'm ${this.name}`);
};

const john = new Person('John', 30);
```

**Class** (ES6):
```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

const jane = new Person('Jane', 25);
```

**Key Differences**:
- Classes are syntactic sugar over function constructors
- Classes must be called with `new` (throws error otherwise)
- Class methods are non-enumerable by default
- Classes have better support for inheritance (`extends`, `super`)
- Classes support static methods easily
- Classes have a cleaner, more intuitive syntax

## 37. Why setTimeout is not guaranteed to run exactly after the specified time

`setTimeout` specifies the **minimum** time before execution, not the exact time. The actual delay depends on the call stack and event loop.

```javascript
console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

for (let i = 0; i < 1000000000; i++) {
  // Long-running synchronous task
}

console.log('End');

// Output: Start, End, Timeout
// Timeout doesn't run immediately even with 0ms delay
```

**Reasons for delay**:
- Call stack must be empty before callback executes
- Other queued tasks may execute first
- Browser/system limitations
- Heavy synchronous operations block execution

`setTimeout` adds the callback to the task queue after the specified delay, but the event loop only picks it up when the call stack is clear.

## 38. How and when is Lexical Environment created (Lexical Scope)

A lexical environment is created every time a function is invoked or a block is executed. It consists of:
1. **Environment Record**: Stores variables and function declarations
2. **Reference to outer environment**: Link to parent scope

**Lexical scope** means that a function's scope is determined by where it's written in the code, not where it's called.

```javascript
const global = 'Global';

function outer() {
  const outerVar = 'Outer';
  
  function inner() {
    const innerVar = 'Inner';
    console.log(innerVar);  // Own scope
    console.log(outerVar);  // Outer scope
    console.log(global);    // Global scope
  }
  
  inner();
}

outer();
```

**When created**:
- **Global lexical environment**: Created when script starts
- **Function lexical environment**: Created when function is called
- **Block lexical environment**: Created for `let`/`const` blocks

The lexical environment chain enables closures and scope resolution.