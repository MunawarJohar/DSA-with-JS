if(5>12){
console.log("5 bara hai 12 say")
}

// Q1 Valid voter
let voterAge=20;
if(voterAge>=18){
    console.log("You are eligible for voting")
}
else{
    console.log("You are not eligible for voting")
}

// Q2 Shop discount 
let amount=12000;
let discount=0
let payableAmount=0
if(amount>0 && amount<=5000){
    payableAmount=amount-discount;
    console.log("Your payable amount is "+ payableAmount)
}
else if(amount>5000 && amount<=7000){
    discount=5*amount/100;
    payableAmount=amount-discount;
    console.log("Your payable amount is "+ payableAmount)
}
else if(amount>7000 && amount<=9000){
    discount=10*amount/100;
    payableAmount=amount-discount;
    console.log("Your payable amount is "+ payableAmount)
}
else if(amount>9000){
    discount=20*amount/100;
    payableAmount=amount-discount;
    console.log("Your payable amount is "+ payableAmount)
}

// Q3 Electric Bill
let myUnits = 320;
let electricAmount = 0;

if (myUnits <= 100) {
    electricAmount = myUnits * 4;
} 
else if (myUnits > 100 && myUnits <= 200) {
    electricAmount += (myUnits - 100) * 6;
    electricAmount += 100 * 4;
} 
else if (myUnits > 200 && myUnits <= 400) {
    electricAmount += (myUnits - 200) * 8;
    electricAmount += 100 * 6;
    electricAmount += 100 * 4;
} 
else if (myUnits > 400) {
    electricAmount += (myUnits - 400) * 13;
    electricAmount += 200 * 8;
    electricAmount += 100 * 6;
    electricAmount += 100 * 4;
}

console.log("Your bill is", electricAmount);


// Q4 Pkr domination
let cashAmount = 5700;
let remainingNotes = cashAmount;

if (remainingNotes >= 5000) {
    console.log("5000 notes ", Math.floor(remainingNotes / 5000));
    remainingNotes = remainingNotes % 5000;
}

if (remainingNotes >= 1000) {
    console.log("1000 notes ", Math.floor(remainingNotes / 1000));
    remainingNotes = remainingNotes % 1000;
}

if (remainingNotes >= 500) {
    console.log("500 notes ", Math.floor(remainingNotes / 500));
    remainingNotes = remainingNotes % 500;
}

if (remainingNotes >= 100) {
    console.log("100 notes ", Math.floor(remainingNotes / 100));
    remainingNotes = remainingNotes % 100;
}

if (remainingNotes >= 50) {
    console.log("50 notes ", Math.floor(remainingNotes / 50));
    remainingNotes = remainingNotes % 50;
}

if (remainingNotes >= 20) {
    console.log("20 notes ", Math.floor(remainingNotes / 20));
    remainingNotes = remainingNotes % 20;
}

if (remainingNotes >= 10) {
    console.log("10 notes ", Math.floor(remainingNotes / 10));
    remainingNotes = remainingNotes % 10;
}

if (remainingNotes > 0) {
    console.log("Remaining amount is ", remainingNotes); // Print the remaining amount if it's less than 10.
}


//ternary operator
5>10?console.log(true):console.log(false);

//Nested ternary opertor

10 > 5 ? (15 > 12 ? console.log(true) : console.log(false)) : console.log("Condition false");

// Switch and One Case handling multiple values
// switch case can't handle float value because its precision issues.

let Name=5

switch(Name){
    case 1:console.log("kamal");
    break
    case 2:console.log("ahmed");
    break
    case 3:console.log("Ali");
    break
    case 4:console.log("Munawar");
    break
    case 5:console.log("Hussain");
    break
}

switch(true){
    case 1<5:console.log("Hello");
    break
    case 2>10 :console.log("Hi");
    break
    default:
    console.log("invalid")
}
let float1 = 1.2;
let float2 = 3.8;
let sumFloat = float1 + float2;

// Round the sum to avoid precision issues
sumFloat = Math.round(sumFloat * 10) / 10;

switch (sumFloat) {
    case 5.0:
        console.log("The sum is 5.0");
        break;
    default:
        console.log("The sum is not 5.0");
        break;
}