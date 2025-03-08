# DSA with JavaScript - Day 2 🚀

## Introduction 🌱
This document covers important **conditional statements** and various **practical examples** in JavaScript. These are fundamental for decision-making in programming, which is crucial for learning **Data Structures and Algorithms (DSA)**.

---

## 1. Conditional Statements in JavaScript 📝

### if-else Statement
The `if-else` statement is used to execute a block of code based on a condition.

Example:

```javascript
let age = 18;
if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}
```
### switch Statement
The switch statement evaluates an expression and executes the block of code corresponding to the matching case.

Example:
```javascript
let fruit = "banana";
switch (fruit) {
  case "apple":
    console.log("You selected an apple.");
    break;
  case "banana":
    console.log("You selected a banana.");
    break;
  default:
    console.log("Unknown fruit.");
}
```
## 2. Practical Examples 🎯
Valid Voter Check
Write a program that checks if a person is eligible to vote based on their age.
```javascript
let age = 20;
if (age >= 18) {
  console.log("You can vote.");
} else {
  console.log("You cannot vote.");
}
```
Shop Discount Calculation
Write a program to calculate the discount based on the total amount spent at a shop.
```javascript
let totalAmount = 500;
let discount = 0;

if (totalAmount > 1000) {
  discount = 10;
} else if (totalAmount > 500) {
  discount = 5;
} else {
  discount = 0;
}

console.log(`Your discount is: ${discount}%`);
```
Electric Bill Calculation
Calculate the electric bill based on the units consumed.
```javascript
let units = 200;
let bill = 0;

if (units <= 100) {
  bill = units * 5;
} else if (units <= 200) {
  bill = 100 * 5 + (units - 100) * 7;
} else {
  bill = 100 * 5 + 100 * 7 + (units - 200) * 10;
}

console.log(`Your electric bill is: Rs. ${bill}`);
```
PKR Domination (Currency Breakdown)
Write a program to break down a given amount in Pakistani Rupees (PKR) into denominations.
```javascript
let amount = 1750;

let notes1000 = Math.floor(amount / 1000);
amount %= 1000;

let notes500 = Math.floor(amount / 500);
amount %= 500;

let notes100 = Math.floor(amount / 100);
amount %= 100;

let notes50 = Math.floor(amount / 50);
amount %= 50;

let notes20 = Math.floor(amount / 20);
amount %= 20;

let notes10 = Math.floor(amount / 10);
amount %= 10;

console.log(`1000 notes: ${notes1000}, 500 notes: ${notes500}, 100 notes: ${notes100}, 50 notes: ${notes50}, 20 notes: ${notes20}, 10 notes: ${notes10}`);
```
## 3. Ternary Operator (?:) 🔄
The ternary operator is a shorthand for if-else statements. It works as follows:

condition ? exprIfTrue : exprIfFalse

Example:

```javascript
let age = 16;
let eligibility = age >= 18 ? "Eligible to vote" : "Not eligible to vote";
console.log(eligibility);
```
## 4. Nested Ternary Operator 🔄
You can also nest ternary operators to handle multiple conditions.

Example:
```javascript
let score = 85;
let grade = score >= 90 ? "A+" : score >= 80 ? "A" : score >= 70 ? "B" : "C";
console.log(grade);
```
## 5. Switch-Case with Multiple Values 🔀
You can use a switch-case to handle multiple values for a single condition.

Example:
```javascript
let day = 3;
switch (day) {
  case 1:
  case 2:
    console.log("It’s a weekday.");
    break;
  case 3:
  case 4:
  case 5:
    console.log("It’s a working day.");
    break;
  case 6:
  case 7:
    console.log("It’s the weekend!");
    break;
  default:
    console.log("Invalid day.");
}
```
Why switch-case Can't Handle Float Values 🚫
switch-case can't handle float values properly due to precision issues, as floating-point numbers can have small rounding errors.

Example:

```javascript
let value = 0.1 + 0.2;  // 0.30000000000000004
switch (value) {
  case 0.3:
    console.log("Value is 0.3");
    break;
  default:
    console.log("Value is not 0.3");  // This will execute
}
```
## 6. Practice Problems 🧠
Q1: Check if a number is even or odd
```javascript
let num = 17;
console.log(num % 2 === 0 ? "Even" : "Odd");
```
Q2: Calculate Discount Based on Total Price
Write a program that applies a discount based on the total purchase.

```javascript
let price = 1200;
let discount = price >= 1000 ? 15 : 10;
console.log(`Discount applied: ${discount}%`);
```
Q3: Determine the Grade Based on Marks
Write a program that assigns a grade based on marks using nested ternary operators.

```javascript
let marks = 85;
let grade = marks >= 90 ? "A+" : marks >= 80 ? "A" : marks >= 70 ? "B" : "C";
console.log(`Your grade is: ${grade}`);
```
## 7. Conclusion 🌟
Understanding conditional statements and operators like the ternary operator will allow you to write more concise and readable code. These concepts will help you solve problems efficiently and are foundational for Data Structures and Algorithms (DSA) in JavaScript.

Keep practicing to master these concepts and enhance your problem-solving skills in DSA!