//loops
for(let i=0;i<5;i++){
    console.log("Hello world")
}
for(let i=10;i>0;i--){
    console.log(i)
}
//infinite loop 
// for(let j=5;j<10;){
//     console.log(j)
// }

//for(;;){
//console.log("hello")
//}

//Q1 sum of n natural numbers and factorial of number

var number=Number(prompt("enter your number: "))
var sum=0
for(let i=1;i<=number;i++){
    sum=sum+i;
}
var fact=1
for(var i=1;i<=number;i++){
    fact=fact*i;
}
console.log("The sum of n natural number is: ",sum)
console.log("The factorial is: ",fact)


// Q2 Factors of number
//first method
for(var i=1;i<=number;i++){
    if(number%i===0){
        console.log(i)
    }
}
//second method
// for(var i=1;i<=Math.floor(number/2);i++){
//     if(number%i===0){
//         console.log(i)
//     }
// }

//Q3 Prime number
var primeIs=true
 for(var i=2;i<=Math.floor(number/2);i++){
    if(number%i===0){
       primeIs=false;
       break;
    }
  
}
console.log(primeIs)

//Break and Continune
for(let i=10;i>0;i--){
    if(i===8){
        continue;
    }
   else {
    console.log(i)
   }
}

// While loop

var input=prompt("type anything and press n for exist")
while(input!=='n'){
   input=prompt("type anything and press n for exist")
}

// Q4 sum of digits 123
var digit = 123;
let num = 0;  // Initialize num to 0 instead of 1

while (digit !== 0) {
    var newNum = digit % 10;  // Get the last digit
    num += newNum;            // Add the last digit to num
    digit = Math.floor(digit / 10);  // Remove the last digit from digit
}

console.log("the sum of digits",num);  // Output the sum of digits

// Q5 reverse of number
var reverseNumber = 123;
let reNum = 0;  // Initialize reNum to 0 to store the reversed number

while (reverseNumber !== 0) {
    var newNumber = reverseNumber % 10;  // Get the last digit
    reNum = reNum * 10 + newNumber;      // Add the last digit to reNum, shifting previous digits
    reverseNumber = Math.floor(reverseNumber / 10);  // Remove the last digit from reverseNumber
}

console.log("The reverse of the number is: ", reNum);  // Output the reversed number

// Q6 strong number

let strongNum = 145;
let originalNum = strongNum; // Store the original number for comparison
let sumfact = 0; // Initialize sumfact to accumulate the sum of factorials

// Loop through each digit of the number
while (strongNum !== 0) {
    var newStrong = strongNum % 10;  // Get the last digit
    var factorial = 1;

    // Calculate the factorial of the current digit
    for (let i = 1; i <= newStrong; i++) {
        factorial *= i;
    }

    sumfact += factorial;  // Add the factorial to the sum of factorials
    strongNum = Math.floor(strongNum / 10);  // Remove the last digit
}

// After the loop, compare the sum of factorials with the original number
if (sumfact === originalNum) {
    console.log("It is a strong number");
} else {
    console.log("It is not a strong number");
}

// Q6 Do while repeat hello
var str_word;
do {
    str_word = prompt("If you want to stop, enter 0: ");
    console.log("Hello...");
} while (str_word !== "0");


// Q7 guess the number
let random = Math.floor(Math.random() * 10) + 1;  // Generate random number between 1 and 10

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
