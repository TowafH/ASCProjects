//let x;
//x = 1

//console.log("The value of x is", x);

//let newVar = "All Star Code!";
//console.log(newVar);

//let var1 = 20;
//let var2 = 30;
//let var3 = "ABC";
//let var4 = "def";
//let var5 = "20";
//let var6 = "30";

//let answer1 = var1 + var2;
//let answer2 = var3 + var4;
//let answer3 = var5 + var6;

//console.log(answer1, answer2, answer3);

//let num1 = 5;
//let num2 = 3;
//num1 = 10;

//let sum = num1 + num2;
//console.log("Sum:", sum);


//let num1 = 5;
//let num2 = 3;

//let sum = num1 + num2;
//num1 = 10;
//console.log("Sum:", sum);

//const luckyNumber = 8;
//luckyNumber = 2;

//console.log(luckyNumber)


// We're goig to earn a profit by reselling tickets
// We bought some tickets to see Billie Eilish
// 4 regular tickets for $45 each an 2 front row tickets for $75 each

let regularTicket = 45;
let frontRowTicket = 75;
let totalCost = (regularTicket * 4) + (frontRowTicket*2);
let resaleCost = 1.5;
let sellerFee = 0.2;
let totalSellerResaleFee = resaleCost * sellerFee;

console.log("Cost:", totalCost);

// We're reselling the tikets for 50% above the original price
console.log("Selling Price:", (totalCost) * (resaleCost));


// But StubHub, the online ticket selling platform, charges a 20% seller fee
console.log("Seller Fee:", (totalCost) * (totalSellerResaleFee));

// Our Total Profit

console.log("Profit:", (totalCost) * resaleCost - (totalCost) - (totalCost) * (totalSellerResaleFee));