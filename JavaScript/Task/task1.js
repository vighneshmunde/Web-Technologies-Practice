
// // 1. write a function that checks whether a number is even or odd 
// function number (num){
//     if(num % 2 == 0)
//     {
//     console.log("Even number")
//     }
//     else{
//     console.log("Odd number")
//     }
// }

// number(prompt("Enter a number"))

// // // 2. largest of two numbers
// let num1 = prompt("Enter the first number")
// let num2 = prompt("Enter the second number")
// let result = num1 > num2 ? "num1 is greater" : "num2 is greater"
// console.log(result)

// // 3. largest of three numbers
// let num1 = prompt("Enter the first number")
// let num2 = prompt("Enter the second number")
// let num3 = prompt("Enter the third number")
// let result = num1 > num2 && num1 > num3 ? "num1 is greater" : num2 > num1 && num2 > num3 ? "num2 is greater" : "num3 is greater"
// console.log(result)

// // 4. positive, negative or zero
// let num = prompt("Enter a number")
// let result = num == 0 ?  "Zero" : num > 0 ? "Positive number" : "Negative number"
// console.log(result)

// // 5. check leap year
// let year = prompt("Enter a year")
// let result = year % 4 == 0 ? "Leap year" : "Not a leap year"
// console.log(result)

// //  6. movie ticket booking
// //  condition:
// //  age below 18 - child ticket
// //  age between 18 and 60 - adult ticket
// //  age above 60 - senior citizen ticket

// let age = prompt("Enter your age")
// let result = age < 18 ? "Child ticket" : age >= 18 && age <= 60 ? "Adult ticket" : "Senior citizen ticket"
// console.log(result)

// //  7. shopping cart (using if else)
// //  condition:
// //  if cart value is greater than ₹2000 -> apply 10% discount
// //  otherwise no discount
// // shopping Cart Discount System
// // Shopping Cart Discount System

// let cartValue = prompt("Enter the total cart value")
// let discountPercentage = 0

// if (cartValue >= 2000) {
//     discountPercentage = 10
// }
// else {
//     discountPercentage = 0
// }
// let discountAmount = (cartValue * discountPercentage) / 100
// let finalAmount = cartValue - discountAmount

// console.log("Cart Value: ₹" + cartValue)
// console.log("Discount Percentage: " + discountPercentage + "%")
// console.log("Discount Amount: ₹" + discountAmount)
// console.log("Final Amount: ₹" + finalAmount)

// // 8. Shopping Cart Discount System
// // A shopping website Wants to provide discounts based on the total cart value.

// // Discount Rules:
// // Cart value      Discount
// // ₹5000 or more     20%
// // ₹3000 to ₹4999     15%
// // ₹2000 to ₹2999     10%
// // Below ₹2000      No discount

// // Task

// // create a variable cartValue
// // check the cart value and apply the appropriate discount.
// // calculate the discount amount
// // calculate the final price after applying the discount

// // Display:
// // cart value
// // discount percentage
// // discount amount
// // final amount

// let cartValue = prompt("Enter the total cart value")
// let discountPercentage = cartValue >= 5000 ? 20 : cartValue >= 3000 ? 15 : cartValue >= 2000 ? 10 : 0
// let discountAmount = (cartValue * discountPercentage) / 100
// let finalAmount = cartValue - discountAmount

// console.log("Cart Value: ₹" + cartValue)
// console.log("Discount Percentage: " + discountPercentage + "%")
// console.log("Discount Amount: ₹" + discountAmount)
// console.log("Final Amount: ₹" + finalAmount)

