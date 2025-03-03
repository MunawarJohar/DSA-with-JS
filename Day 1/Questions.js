// Q1. sum of two interger
let a=13;
let b=35;
console.log(a+b)

//sum
console.log("The sum of 10 and 20 = ",(a+b))
//concat
console.log("The sum of 10 and 20"+a+b)

// js engine understand and automatically convert this is type conversion
console.log("1"-1)

// Q2. Accept and print the answer
// let age=Number(prompt("Enter your age"));
// console.log(age)

// Q3 swap two variables via 3 methods
//1st method

let num1=20;
let num2=30;
let temp;
temp=num1;
num1=num2;
num2=temp;

console.log(num1);
console.log(num2)

//2nd method
let number1=20;
let number2=40
number1=number1+number2;//20+40=60
number2=number1-number2;//60-40=20
number1=number1-number2//60-20=40

console.log(number1) //40
console.log(number2) //20
//3rd method  destructuring assignment 
let n1=20;
let n2=50;
[n1,n2]=[n2,n1]
console.log(n1)
console.log(n2)

//Arthmetic operators
let Art=n1+n2*n1/2
console.log(Art)

let module=4212
console.log(module%10)
let divide=4213
console.log(Math.floor((divide/10)));

//Relational operators
console.log((10 > 5), (10 < 5), (10 != 5),(10==10),(10==="10"));

//logical operator
console.log(10 > 5 && 5 < 10);
console.log("Munawar" =="Munawar" || 10==="10");

//unary operator ++ ,--
let increament=10;
let assign=increament++;
console.log(increament)
console.log(assign)

let decreament=10;
let assignvalue=--decreament;
console.log(decreament)
console.log(assignvalue)

//Practice Question and concepts

let i=10;
i=i++ + ++i
console.log(i)

let first=10 
let second=20
let third=first+second +first++ + second++ + ++first + ++second;
console.log("first = "+first)
console.log("second = "+second)
console.log("third = "+third)

let variable=true;
variable++
console.log(variable)

// let constValue=10++;
// let constValueB=++(constValue++);
// console.log(constValue)
// console.log(constValueB)

// Math functions
console.log(Math.round(18.2))	
console.log(Math.ceil(18.2)	)
console.log(Math.floor(18.2))	
console.log(Math.trunc(18.2))
console.log(Math.pow(2,5))
console.log(Math.sqrt(25))
console.log(Math.abs(-18))
console.log(Math.max(18,2,22))
console.log(Math.min(18,2,10))
console.log(Math.random())
console.log(Art.toFixed())

