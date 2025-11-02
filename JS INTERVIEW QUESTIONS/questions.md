# 1) Different types of data types in JS

In JavaScript, data types are categorized into two main groups: **Primitive** and **Non-Primitive** (Reference) types.

### Primitive Data Types
These are immutable and passed by value:
- **Number**: Represents numeric values, e.g., `42` or `3.14`.
- **String**: Represents text, e.g., `"Hello"`.
- **Boolean**: Represents true or false values, e.g., `true`.
- **Undefined**: Represents a variable that has been declared but not assigned a value.
- **Null**: Represents intentional absence of any object value.
- **Symbol**: Represents unique identifiers (introduced in ES6), e.g., `Symbol('id')`.
- **BigInt**: Represents large integers beyond the safe integer limit, e.g., `123n`.

### Non-Primitive Data Types
These are mutable and passed by reference:
- **Object**: Includes plain objects `{ key: value }`, arrays `[1, 2, 3]`, functions, dates, etc.

JavaScript is dynamically typed, so variables can hold any type without explicit declaration.

# 2) Explain Hoisting in JS

Hoisting is a JavaScript behavior where variable and function declarations are moved (or "hoisted") to the top of their containing scope during the compilation phase, before code execution. This allows you to use variables and functions before they are declared in the code.

### Key Points:
- **Variable Hoisting**:
  - `var` declarations are hoisted and initialized with `undefined`.
  - `let` and `const` are hoisted but not initialized, leading to a Temporal Dead Zone (TDZ) where accessing them before declaration throws a ReferenceError.
- **Function Hoisting**:
  - Function declarations are fully hoisted (including the body), so you can call them before declaration.
  - Function expressions (e.g., assigned to variables) are not hoisted in the same way; only the variable is hoisted if using `var`.

### Example:
```javascript
console.log(x); // undefined (hoisted)
var x = 5;

foo(); // Works (hoisted)
function foo() {
  console.log("Hello");
}
```

Avoid relying on hoisting for better code readability; declare variables at the top of their scope.

# 3) Difference between let, var, and const

`var`, `let`, and `const` are used for variable declarations in JavaScript, but they differ in scope, hoisting, and mutability.

| Feature          | `var`                          | `let`                          | `const`                        |
|------------------|--------------------------------|--------------------------------|--------------------------------|
| **Scope**       | Function-scoped (or global if not in a function). | Block-scoped (e.g., within `{}` like if/for). | Block-scoped.                 |
| **Hoisting**    | Hoisted and initialized with `undefined`. | Hoisted but in Temporal Dead Zone (TDZ) – can't access before declaration. | Same as `let` (TDZ).         |
| **Reassignment**| Can be reassigned.            | Can be reassigned.            | Cannot be reassigned (constant value). |
| **Redeclaration**| Can be redeclared in the same scope. | Cannot be redeclared in the same scope. | Cannot be redeclared.        |
| **Global Object**| Adds to global object (e.g., `window` in browsers). | Does not add to global object. | Does not add to global object. |

### Recommendations:
- Use `const` by default for constants.
- Use `let` for variables that need reassignment.
- Avoid `var` in modern code due to its quirks.

# 4) Is JavaScript statically or dynamically typed language? Why?

JavaScript is a **dynamically typed** language.

### Why?
- In dynamically typed languages, type checking happens at runtime (during execution) rather than at compile time.
- Variables in JavaScript do not have fixed types; they can hold any value, and the type can change dynamically.
- No need to declare types explicitly (e.g., no `int x = 5;` like in statically typed languages such as Java or C++).
- This allows flexibility but can lead to runtime errors if types mismatch (e.g., adding a string and number coerces types automatically).

### Example:
```javascript
let x = 5; // Number
x = "Hello"; // Now String – no error
```

In contrast, statically typed languages catch type errors during compilation for better performance and fewer runtime issues.

# 5) Explain pass by value and pass by reference

In JavaScript, arguments are passed to functions using **pass by value** for primitives and **pass by reference** (technically, pass by sharing) for objects.

### Pass by Value (Primitives):
- A copy of the value is passed to the function.
- Changes inside the function do not affect the original variable.
- Applies to: Number, String, Boolean, Undefined, Null, Symbol, BigInt.

### Example:
```javascript
let num = 10;
function changeValue(val) {
  val = 20; // Changes copy, not original
}
changeValue(num);
console.log(num); // 10
```

### Pass by Reference (Objects):
- A reference (memory address) to the object is passed.
- Changes to the object's properties inside the function affect the original object.
- The reference itself is passed by value, so reassigning the parameter doesn't change the original reference.

### Example:
```javascript
let obj = { key: "value" };
function changeObj(ref) {
  ref.key = "newValue"; // Affects original
}
changeObj(obj);
console.log(obj.key); // "newValue"
```

This behavior is why primitives are immutable, while objects are mutable.

# 6) Explain Higher order Function in JS

A **Higher-Order Function (HOF)** in JavaScript is a function that does at least one of the following:
- Takes one or more functions as arguments.
- Returns a function as its result.

HOFs enable functional programming patterns like map, filter, reduce, and callbacks, making code more modular and reusable.

### Key Characteristics:
- Treat functions as first-class citizens (can be assigned to variables, passed as args, returned).
- Common in array methods (e.g., `map()`, `filter()`).

### Example:
```javascript
// HOF that takes a function as argument
function greet(callback) {
  console.log("Hello");
  callback();
}

// HOF that returns a function
function multiplier(factor) {
  return function(num) {
    return num * factor;
  };
}

greet(() => console.log("World")); // Hello World

const double = multiplier(2);
console.log(double(5)); // 10
```

HOFs are powerful for abstractions, like in event handlers or async operations.

# 7) Explain "this" keyword

The **`this`** keyword in JavaScript refers to the object that is executing the current function or method. Its value is determined by how the function is called (the execution context), not where it's defined.

### Rules for `this`:
- **Global Context**: In non-strict mode, `this` is the global object (`window` in browsers). In strict mode, it's `undefined`.
- **Object Method**: `this` refers to the object calling the method.
- **Constructor (with `new`)**: `this` refers to the newly created instance.
- **Arrow Functions**: `this` is lexically bound (inherits from outer scope), no own `this`.
- **Event Handlers**: Often refers to the element that triggered the event.
- **Explicit Binding**: Use `call()`, `apply()`, or `bind()` to set `this` manually.

### Example:
```javascript
const obj = {
  name: "Alice",
  greet: function() {
    console.log(this.name);
  }
};
obj.greet(); // "Alice"

function globalGreet() {
  console.log(this); // window (non-strict)
}
globalGreet();
```

`this` can be tricky; arrow functions simplify it in callbacks.

# 8) Explain call, bind, and apply method

`call()`, `apply()`, and `bind()` are methods on Function.prototype used to explicitly set the `this` value and invoke functions with arguments.

### Common Purpose:
- Control the context (`this`) of a function.
- Useful for borrowing methods or currying.

### Differences:
- **call(thisArg, arg1, arg2, ...)**:
  - Invokes the function immediately.
  - Passes arguments individually.

- **apply(thisArg, [argsArray])**:
  - Invokes the function immediately.
  - Passes arguments as an array.

- **bind(thisArg, arg1, arg2, ...)**:
  - Returns a new function with bound `this` and partial arguments (currying).
  - Does not invoke immediately; useful for later calls (e.g., event handlers).

### Example:
```javascript
function greet(greeting, punctuation) {
  console.log(greeting + ", " + this.name + punctuation);
}

const person = { name: "Bob" };

greet.call(person, "Hello", "!"); // "Hello, Bob!"
greet.apply(person, ["Hi", "?"]); // "Hi, Bob?"
const boundGreet = greet.bind(person, "Hey");
boundGreet("."); // "Hey, Bob."
```

These methods do not work with arrow functions, as arrows have fixed `this`.

# 9) Diff between Arrow function and traditional (normal) function

Arrow functions (introduced in ES6) and traditional functions differ in syntax, behavior, and use cases.

| Feature              | Traditional Function                  | Arrow Function                       |
|----------------------|---------------------------------------|--------------------------------------|
| **Syntax**          | `function name() { ... }`            | `() => { ... }` (concise: `() => expr`) |
| **this Binding**    | Dynamic (based on call context).     | Lexical (inherits from outer scope). |
| **arguments Object**| Available (accesses all args).       | Not available (use rest params: `...args`). |
| **Constructor**     | Can be used with `new` (has prototype). | Cannot be used as constructor (no prototype). |
| **Hoisting**        | Fully hoisted if declaration.        | Not hoisted (like expressions).     |
| **Return**          | Explicit `return` needed for blocks. | Implicit return for single expressions. |
| **Use Cases**       | Methods needing own `this`, constructors. | Short callbacks, where lexical `this` is needed (e.g., in classes). |

### Example:
```javascript
// Traditional
function add(a, b) {
  return a + b;
}

// Arrow
const addArrow = (a, b) => a + b;
```

Arrow functions are shorter and avoid `this` pitfalls in callbacks, but traditional ones are better for methods.

# 10) What is diff between function declaration and function expression

Function declarations and expressions are two ways to define functions in JavaScript, differing mainly in hoisting and syntax.

| Feature              | Function Declaration                  | Function Expression                  |
|----------------------|---------------------------------------|--------------------------------------|
| **Syntax**          | `function name() { ... }`            | `const name = function() { ... };` or `const name = () => { ... };` |
| **Hoisting**        | Fully hoisted (can call before definition). | Variable hoisted (if `var`), but not initialized; TDZ for `let/const`. |
| **Named**           | Always named.                        | Can be anonymous or named.          |
| **Use in IIFE**     | Not typically used.                  | Often used for Immediately Invoked Function Expressions (IIFE). |
| **Scope**           | Block-scoped in strict mode (ES6+).  | Depends on variable declaration.    |

### Example:
```javascript
// Declaration (hoisted)
foo(); // Works
function foo() { console.log("Declaration"); }

// Expression (not hoisted)
bar(); // Error: bar is not a function
var bar = function() { console.log("Expression"); };
```

Declarations are hoisted for top-level use; expressions are better for conditional definitions or as values.

# 11) What is event loop in JS

The **Event Loop** is a core mechanism in JavaScript's runtime that handles asynchronous operations, ensuring non-blocking execution in its single-threaded environment.

### How It Works:
- JavaScript uses a **Call Stack** for synchronous code execution (LIFO).
- Asynchronous tasks (e.g., timers, HTTP requests) are offloaded to Web APIs (browser) or C++ APIs (Node.js).
- When async tasks complete, their callbacks are pushed to the **Task Queue** (FIFO) or **Microtask Queue** (for promises).
- The Event Loop continuously checks:
  - If the Call Stack is empty, it processes Microtasks first (e.g., Promise callbacks).
  - Then, it moves Tasks (e.g., setTimeout callbacks) to the Call Stack.

### Key Components:
- **Call Stack**: Executes code.
- **Web APIs**: Handle async (e.g., `setTimeout`).
- **Task Queue**: For macrotasks (setTimeout, events).
- **Microtask Queue**: For microtasks (Promise.then, process.nextTick in Node).

### Example:
```javascript
console.log("Start"); // Sync
setTimeout(() => console.log("Timeout"), 0); // Async macro
Promise.resolve().then(() => console.log("Promise")); // Async micro
console.log("End"); // Sync

// Output: Start, End, Promise, Timeout
```

The Event Loop enables async programming without multithreading, preventing UI blocking in browsers.

# 12) What are promises in JS

**Promises** in JavaScript are objects representing the eventual completion (or failure) of an asynchronous operation and its resulting value. They provide a cleaner alternative to callbacks for handling async code, avoiding "callback hell."

### Key Features:
- Created with `new Promise((resolve, reject) => { ... })`.
- `resolve(value)`: Fulfills the promise with a value.
- `reject(error)`: Rejects with an error.
- Immutable once settled (fulfilled or rejected).
- Chainable with methods like `.then()`, `.catch()`.

### Example:
```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve("Success!");
    } else {
      reject("Error!");
    }
  }, 1000);
});

myPromise
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

Promises are foundational for modern async patterns like async/await and fetch API.

# 13) How many states are there in promise. Explain each

A Promise in JavaScript has **three states**. Once settled (fulfilled or rejected), it cannot change.

### States:
1. **Pending**:
   - Initial state when the promise is created.
   - Neither fulfilled nor rejected.
   - Async operation is ongoing (e.g., waiting for a timer or API response).

2. **Fulfilled** (or Resolved):
   - The async operation completed successfully.
   - Promise has a value (from `resolve(value)`).
   - Triggers `.then()` handlers.

3. **Rejected**:
   - The async operation failed.
   - Promise has a reason/error (from `reject(error)` or uncaught exception).
   - Triggers `.catch()` handlers.

### Example:
```javascript
const promise = new Promise((resolve, reject) => {
  // Pending here
  setTimeout(() => resolve("Done"), 1000); // Becomes Fulfilled
  // Or reject("Failed"); // Becomes Rejected
});
```

You can check state with `Promise.prototype.state` in some environments, but generally, handle via methods.

# 14) Methods of promises

Promises provide several methods for handling asynchronous results, chaining, and error management. These are static methods on the `Promise` constructor or instance methods.

### Instance Methods:
- **.then(onFulfilled, onRejected)**: Handles fulfillment (returns value) or rejection (optional). Returns a new promise for chaining.
- **.catch(onRejected)**: Handles rejection (like `.then(null, onRejected)`). Returns a new promise.
- **.finally(onFinally)**: Executes code regardless of fulfillment or rejection (cleanup). Returns a new promise.

### Static Methods:
- **Promise.resolve(value)**: Returns a fulfilled promise with the given value.
- **Promise.reject(reason)**: Returns a rejected promise with the given reason.
- **Promise.all(iterable)**: Waits for all promises to fulfill; rejects if any rejects. Returns array of values.
- **Promise.allSettled(iterable)**: Waits for all to settle; returns array of outcomes ({status, value/reason}).
- **Promise.race(iterable)**: Resolves/rejects with the first settled promise's result.
- **Promise.any(iterable)**: Resolves with the first fulfilled; rejects if all reject (with AggregateError).

### Example:
```javascript
Promise.all([Promise.resolve(1), Promise.resolve(2)])
  .then(results => console.log(results)) // [1, 2]
  .catch(error => console.error(error));
```

These methods enable robust async flow control.

# 15) What is async/await in JS

**Async/await** is a syntactic sugar in JavaScript (ES8+) for working with promises, making asynchronous code look and behave like synchronous code. It improves readability and error handling.

### Key Concepts:
- **async**: Prefixes a function to make it asynchronous. Async functions always return a promise.
- **await**: Pauses execution inside an async function until a promise settles (resolves or rejects).
  - Can only be used inside async functions.
  - Handles promise resolution as a value; throws on rejection (use try/catch).

### Benefits:
- Avoids promise chaining (no "then hell").
- Better for sequential async operations.
- Integrates with try/catch for errors.

### Example:
```javascript
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData(); // Returns a promise
```

Under the hood, it's still promises. Use with Promise.all for parallel ops.

# 16) What are closures

A **closure** in JavaScript is a function that retains access to variables from its outer (lexical) scope even after the outer function has finished executing. Closures "close over" their environment.

### Key Points:
- Created when a function is defined inside another function.
- Allows private variables and data encapsulation (like modules).
- Useful for callbacks, event handlers, and currying.
- Memory: Closures keep referenced variables alive, which can cause memory leaks if not managed.

### Example:
```javascript
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const increment = outer();
increment(); // 1
increment(); // 2
```

Here, `inner` closes over `count`, preserving it across calls. Closures power patterns like IIFE modules and React hooks.

# 17) What is Promise chaining?

**Promise chaining** is a technique in JavaScript where multiple asynchronous operations are sequenced by attaching `.then()` (or `.catch()`) methods in a chain. Each `.then()` returns a new promise, allowing sequential execution.

### How It Works:
- The result of one `.then()` is passed to the next.
- If a promise rejects, it skips to the nearest `.catch()`.
- Ends with `.catch()` for error handling and optionally `.finally()` for cleanup.

### Benefits:
- Avoids nested callbacks ("callback hell").
- Makes async code linear and readable.

### Example:
```javascript
fetch("https://api.example.com/user")
  .then(response => response.json())
  .then(user => fetch(`https://api.example.com/posts/${user.id}`))
  .then(response => response.json())
  .then(posts => console.log(posts))
  .catch(error => console.error("Error:", error))
  .finally(() => console.log("Done"));
```

For modern code, async/await can replace chaining for even better readability.

# 18) What happens if you return a promise inside .then()?

If you return a promise inside a `.then()` handler, the chain waits for that inner promise to settle before proceeding to the next `.then()`. This enables nested asynchronous operations within the chain.

### Behavior:
- The returned promise's resolution value becomes the input for the next `.then()`.
- If the inner promise rejects, it propagates to the chain's `.catch()`.
- If you return a non-promise value, it's wrapped in `Promise.resolve(value)`.

### Example:
```javascript
Promise.resolve(1)
  .then(value => {
    return new Promise(resolve => setTimeout(() => resolve(value + 1), 1000));
  })
  .then(result => console.log(result)) // 2 (after 1 second)
  .catch(error => console.error(error));
```

This flattens promise nesting, making chains more powerful for sequential async tasks without deep indentation.

# 19) Difference between Promise.all() and Promise.allSettled()?

`Promise.all()` and `Promise.allSettled()` are static methods for handling multiple promises concurrently, but they differ in behavior on rejection and output.

| Feature                  | `Promise.all(iterable)`              | `Promise.allSettled(iterable)`       |
|--------------------------|--------------------------------------|--------------------------------------|
| **Resolution**          | Fulfills only if ALL promises fulfill. Rejects if ANY rejects. | Fulfills when ALL promises settle (fulfill or reject). |
| **Return Value**        | Array of fulfilled values (in order). | Array of objects: `{status: "fulfilled", value}` or `{status: "rejected", reason}`. |
| **Short-Circuit**       | Yes – rejects immediately on first rejection. | No – waits for all to settle.       |
| **Use Case**            | When all ops must succeed (e.g., batch API calls). | When you need results from all, even if some fail (e.g., logging). |
| **Error Handling**      | Catches the first rejection reason. | No rejection; inspect statuses.    |

### Example:
```javascript
const promises = [Promise.resolve(1), Promise.reject("Error"), Promise.resolve(3)];

Promise.all(promises) // Rejects with "Error"
  .then(console.log)
  .catch(console.error);

Promise.allSettled(promises)
  .then(results => console.log(results));
  // [{status: "fulfilled", value: 1}, {status: "rejected", reason: "Error"}, {status: "fulfilled", value: 3}]
```

Use `allSettled` for robustness when partial failures are okay.

# 20) How to handle Promises?

Handling promises in JavaScript involves managing their resolution or rejection to control async flow. There are two main approaches: chainable methods or async/await.

### Using .then(), .catch(), .finally():
- **.then(onFulfilled, onRejected)**: Handle success and optional failure.
- **.catch(onRejected)**: Catch errors from the chain.
- **.finally(onFinally)**: Run cleanup code regardless.
- Chain for sequences; use `Promise.all` for parallels.

#### Example:
```javascript
fetch("url")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err))
  .finally(() => console.log("Done"));
```

### Using async/await:
- Wrap in `async function`.
- Use `await` to pause for resolution.
- Handle errors with try/catch.

#### Example:
```javascript
async function handle() {
  try {
    const res = await fetch("url");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  } finally {
    console.log("Done");
  }
}
handle();
```

Best practices: Always handle rejections to avoid unhandled promise errors; use for parallel ops when possible.