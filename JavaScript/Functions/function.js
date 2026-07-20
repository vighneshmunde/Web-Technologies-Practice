

// //named function
// function addition(){
//     console.log(2+2)
// }

// addition()


// // function declaration
// function addition(a,b){
//     console.log(a+b);
// }

// addition(5,2)
// addition(10,20)

// //Anonymous function
// function(){

// }

// // function expression
// // sum()  // hoisting not possible
// let sum = function add(){
//     console.log("hello world")
// }

// sum()
// //add //not possible

// //return

// function multi(a,b){
//     console.log("hello")
//     return a*b
// }


// let result = multi(9,2)
// console.log(result)

// console.log(multi(9,5))

//Arrow function

//syntax
// ()=>{}

// let addition = (a) => {
//     return a
// }

// console.log(addition(10))

// 1. if you have a single line of code you can skip {} and return keyword
// let task = () =>"Hello"
// console.log(task())

// 2. if you dont have any parameter you can skip () and use _ or $
// let task = _ => "Hello"
// console.log(task())

// 3. if you have a single parameter you can skip () 
// let task = a => a
// console.log(task(10))

// // higher order function

// function addition(a,b){
//     return a + b
// }
// console.log(addition(num1(),num()))

// // callback function
// function num(){
//     return 8
// }

// function num1(){
//     return 10
// }

// // example 1

// function addition(a,b){
//     return a + b
// }
// console.log(addition(2,num(9)))

// function num(x){
//     return x
// }

// // example 2

// function addition(a,b){
//     return a+b()
// }

// console.log(addition(2,num))

// function num(){
//     return 10
// }

// // example 3
// function addition(a,b){
//     return a+b(7)
// }
// console.log(addition(2,num))

// function num(y){
//     return y
// }

//example 4
function addition(a,b){
    return a + b(8)
}

console.log(addition(2,(x)=>x))
