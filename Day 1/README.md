# DSA with JavaScript - Day 1 🚀

## Introduction 🌱
This document covers the **foundational concepts of JavaScript**, focusing on basic operations, data types, and common JavaScript functions. These concepts are essential for learning **Data Structures and Algorithms (DSA)** in JavaScript.

---

## 1. Basics of JavaScript 📚

### Variables and Data Types 📝
In JavaScript, variables store data values. The types of data you can store include:

- **Number**: Represents numeric values.  
  Example: `let age = 30;`
- **String**: Represents a sequence of characters.  
  Example: `let name = "John";`
- **Boolean**: Represents `true` or `false`.  
  Example: `let isStudent = true;`
- **Object**: Represents collections of key-value pairs.  
  Example: `let person = { name: "John", age: 30 };`
- **Array**: An ordered collection of values.  
  Example: `let fruits = ["apple", "banana", "cherry"];`

---

## 2. Operators in JavaScript ⚙️

### Arithmetic Operators ➕➖✖️➗
These operators are used to perform basic arithmetic operations.

| Operator | Description   | Example |
|----------|---------------|---------|
| `+`      | Addition      | `let a = 10; let b = 20; console.log(a + b); // 30` |
| `-`      | Subtraction   |         |
| `*`      | Multiplication|         |
| `/`      | Division      |         |
| `%`      | Modulus       |         |

Example:

```javascript
let a = 10;
let b = 20;
console.log(a + b);  // 30
console.log(a * b);  // 200
console.log(b % a);  // 0 (remainder)
```

### Relational Operators 🔍
These operators are used to compare two values.

| Operator | Description          | Example |
|----------|----------------------|---------|
| `>`      | Greater than         | `let x = 10; let y = 20; console.log(x > y); // false` |
| `<`      | Less than            |         |
| `>=`     | Greater than or equal|         |
| `<=`     | Less than or equal   |         |
| `==`     | Equal to (value)     |         |
| `===`    | Strict equal (value and type) | |
| `!=`     | Not equal to         |         |

Example:

```javascript
let x = 10;
let y = 20;
console.log(x > y);    // false
console.log(x < y);    // true
console.log(x == 10);  // true
```

### Logical Operators 🔗
These operators combine boolean values and return a result based on the condition.

| Operator | Description          | Example |
|----------|----------------------|---------|
| `&&`     | AND operator         | `console.log(isAdult && hasPermission);  // false` |
| `||`     | OR operator          |         |
| `!`      | NOT operator         |         |

Example:

```javascript
let isAdult = true;
let hasPermission = false;
console.log(isAdult && hasPermission);  // false
console.log(isAdult || hasPermission);  // true
```

### Unary Operators ↕️
Unary operators are used with a single operand.

| Operator | Description           | Example |
|----------|-----------------------|---------|
| `++`     | Increment the value by 1 | `console.log(++a); // 6 (Pre-increment)` |
| `--`     | Decrement the value by 1 | `console.log(a--); // 6 (Post-decrement)` |

Example:

```javascript
let a = 5;
console.log(++a); // 6 (Pre-increment)
console.log(a--); // 6 (Post-decrement)
```

---

## 3. Type Coercion in JavaScript 🔄
Type coercion is JavaScript's ability to automatically convert values from one data type to another.

Example:

- Adding a number and a string results in string concatenation:

```javascript
let num = 5;
let str = "Hello";
console.log(num + str);  // "5Hello"
```

- Subtracting or using other arithmetic operators converts strings to numbers:

```javascript
console.log("5" - 1);  // 4 (string "5" converted to number)
```

### Type Casting 🔀
Type casting is manually converting one type to another using functions like `Number()`, `String()`, etc.

```javascript
let num = "10";
let convertedNum = Number(num);
console.log(convertedNum);  // 10 (number)
```

---

## 4. Practice Problems 🧠

### Q1: Sum of Two Integers
```javascript
let a = 10;
let b = 20;
console.log(a + b);  // Output: 30
```

### Q2: Accept and Print the Answer
To accept user input (using `prompt()` in the browser):

```javascript
let age = Number(prompt("Enter your age"));
console.log("Your age is:", age);
```

### Q3: Swap Two Variables Using 3 Methods

#### Method 1: Using a Temporary Variable
```javascript
let num1 = 10;
let num2 = 20;
let temp = num1;
num1 = num2;
num2 = temp;
console.log(num1);  // 20
console.log(num2);  // 10
```

#### Method 2: Using Arithmetic Operations
```javascript
let a = 10;
let b = 20;
a = a + b; // 30
b = a - b; // 10
a = a - b; // 20
console.log(a);  // 20
console.log(b);  // 10
```

#### Method 3: Using Destructuring Assignment
```javascript
let x = 10;
let y = 20;
[x, y] = [y, x];
console.log(x);  // 20
console.log(y);  // 10
```

---

## 5. Math Functions in JavaScript 🔢

JavaScript provides several built-in functions to perform mathematical operations.

| Function     | Description                           | Example |
|--------------|---------------------------------------|---------|
| `Math.round()`| Rounds a number to the nearest integer | `Math.round(4.7);  // 5` |
| `Math.ceil()` | Rounds a number up to the nearest integer | `Math.ceil(4.3);  // 5` |
| `Math.floor()`| Rounds a number down to the nearest integer | `Math.floor(4.9); // 4` |
| `Math.trunc()`| Removes the decimal part of a number  | `Math.trunc(4.5); // 4` |
| `Math.pow()`  | Returns the value of a number raised to a power | `Math.pow(2, 3); // 8` |
| `Math.sqrt()` | Returns the square root of a number | `Math.sqrt(25); // 5` |
| `Math.abs()`  | Returns the absolute value of a number | `Math.abs(-10); // 10` |
| `Math.max()`  | Returns the largest of zero or more numbers | `Math.max(1, 2, 3); // 3` |
| `Math.min()`  | Returns the smallest of zero or more numbers | `Math.min(1, 2, 3); // 1` |
| `Math.random()`| Returns a random floating-point number between 0 (inclusive) and 1 (exclusive) | `Math.random();` |
| `toFixed()`   | Formats a number using fixed-point notation | `3.14159.toFixed(2); // 3.14` |

Example:

```javascript
console.log(Math.round(4.7));    // 5
console.log(Math.ceil(4.3));     // 5
console.log(Math.floor(4.9));    // 4
console.log(Math.trunc(4.5));    // 4
console.log(Math.pow(2, 3));     // 8
console.log(Math.sqrt(25));      // 5
console.log(Math.abs(-10));      // 10
console.log(Math.max(1, 2, 3));  // 3
console.log(Math.min(1, 2, 3));  // 1
console.log(Math.random());      // Random number between 0 and 1
console.log(3.14159.toFixed(2)); // 3.14
```

---

## 6. Additional Practice 🏋️‍♂️

### Q1: Calculate the Area and Perimeter of a Rectangle
```
let width = 10;
let height = 20;
let area = width * height;  // Area of rectangle
let perimeter = 2 * (width + height);  // Perimeter of rectangle

console.log("Area: " + area);         // Output: 200
console.log("Perimeter: " + perimeter);  // Output: 60
```

### Q2: Generate a 4-Digit OTP
```
javascript
let otp = Math.trunc(Math.random() * 10000) + 1000;
console.log("OTP:", otp);  // Random 4-digit OTP
```
### Q3: Calculate Area of a Triangle Using Heron's Formula
```
let sideA = 10;
let sideB = 20;
let sideC = 10;
let s = (sideA + sideB + sideC) / 2;  // Semi-perimeter
let area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));
console.log("Area of Triangle: ", area);
```
### Q4: Circumference of a Circle
```
let radius = 30;
let circumference = 2 * Math.PI * radius;
console.log("Circumference: ", circumference);  // Output: 188.49555921538757
```
## 7. Conclusion
These foundational concepts and JavaScript functions form the building blocks for tackling more complex topics in Data Structures and Algorithms (DSA). Mastering these topics will ensure you're well-equipped to dive deeper into DSA with JavaScript!

