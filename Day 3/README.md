
# DSA with JavaScript - Day 3 🚀

## Introduction 🌱
This document covers essential concepts of **loops** in JavaScript, including `for`, `while`, and `do-while` loops. It also includes practical examples like calculating the sum of digits, reversing a number, checking for strong numbers, and more. These concepts are crucial for mastering **Data Structures and Algorithms (DSA)** in JavaScript.

---

## 1. Loops in JavaScript 🔄

### **For Loop**
The `for` loop is used to execute a block of code repeatedly for a specific number of iterations.

#### **Q1: Print "Hello World" N Times**
```javascript
for (let i = 0; i < 5; i++) {
    console.log("Hello World");
}
```
#### Q2: Sum of N Natural Numbers and Factorial of a Number
```javascript
var number = Number(prompt("Enter your number: "));
var sum = 0;
for (let i = 1; i <= number; i++) {
    sum = sum + i;
}
var fact = 1;
for (var i = 1; i <= number; i++) {
    fact = fact * i;
}
console.log("The sum of n natural numbers is: ", sum);
console.log("The factorial is: ", fact);
```
#### Q3: Factors of a Number
```javascript
for (var i = 1; i <= number; i++) {
    if (number % i === 0) {
        console.log(i);
    }
}
```
#### Q4: Prime Number
```javascript
var primeIs = true;
for (var i = 2; i <= Math.floor(number / 2); i++) {
    if (number % i === 0) {
        primeIs = false;
        break;
    }
}
console.log(primeIs);
```
## Break and Continue
```javascript
for (let i = 10; i > 0; i--) {
    if (i === 8) {
        continue;
    } else {
        console.log(i);
    }
}
```
## While Loop
The while loop is used to execute a block of code as long as a condition is true.

#### Q5: Sum of Digits (123)
```javascript
var digit = 123;
let num = 0;
while (digit !== 0) {
    var newNum = digit % 10;
    num += newNum;
    digit = Math.floor(digit / 10);
}
console.log("The sum of digits", num);
```
#### Q6: Reverse of a Number
```javascript
var reverseNumber = 123;
let reNum = 0;
while (reverseNumber !== 0) {
    var newNumber = reverseNumber % 10;
    reNum = reNum * 10 + newNumber;
    reverseNumber = Math.floor(reverseNumber / 10);
}
console.log("The reverse of the number is: ", reNum);
```
#### Q7: Strong Number
```javascript
let strongNum = 145;
let originalNum = strongNum;
let sumfact = 0;
while (strongNum !== 0) {
    var newStrong = strongNum % 10;
    var factorial = 1;
    for (let i = 1; i <= newStrong; i++) {
        factorial *= i;
    }
    sumfact += factorial;
    strongNum = Math.floor(strongNum / 10);
}
if (sumfact === originalNum) {
    console.log("It is a strong number");
} else {
    console.log("It is not a strong number");
}
```
## Do-While Loop
The do-while loop is used to execute a block of code at least once, and then repeat the loop as long as a condition is true.

#### Q8: Repeat "Hello" Until User Stops
```javascript
var str_word;
do {
    str_word = prompt("If you want to stop, enter 0: ");
    console.log("Hello...");
} while (str_word !== "0");
```
2. Guess the Number Game 🎮
#### Q9: Guess the Number
```javascript
let random = Math.floor(Math.random() * 10) + 1;
var guessNum;
while (guessNum !== random) {
    guessNum = Number(prompt("Enter your guess number:"));
    if (guessNum > random) {
        console.log("Guess number is greater");
    } else if (guessNum < random) {
        console.log("Guess number is less");
    } else {
        console.log("Congrats! 🎉🎉🎉🎉🎊🎊🎉🎉");
    }
}
```
## 3. Practice Problems 🧠

#### Q5: Sasta Calculator
A simple calculator that performs basic arithmetic operations (addition, subtraction, multiplication, division).

```javascript
let num1 = Number(prompt("Enter the first number: "));
let num2 = Number(prompt("Enter the second number: "));
let operation = prompt("Enter the operation (+, -, *, /): ");

let result;
switch (operation) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        result = num1 / num2;
        break;
    default:
        result = "Invalid operation";
}
console.log("Result: ", result);
```
## 4. Conclusion 🌟
Understanding loops and their applications is essential for solving repetitive problems efficiently. These concepts are foundational for mastering Data Structures and Algorithms (DSA) in JavaScript. Keep practicing to enhance your problem-solving skills!