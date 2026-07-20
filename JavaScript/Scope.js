// global Scope

var a = 10;
let b = 20;
const c = 30;

console.log(a)
console.log(b)
console.log(c)

// function task () {
//     console.log(a)
//     console.log(b)
//     console.log(c)

// }
// task()

// if(true){
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }

// block scope

if(true){
    var a = 10;
    let b = 20;
    const c = 30;

    console.log(a)
    console.log(b)
    console.log(c)
}

console.log(a)
console.log(b)
console.log(c)

// function scope 

function scope(){
    var x = 10;
    let y = 20;
    const z = 30;

    console.log(x)
    console.log(y)
    console.log(z)  
}

// scope()
// console.log(x)
// console.log(y)
// console.log(z)  

// lexical scope

function Outer(){
    let a = 10;
    console.log(a)

    function inner(){
        let b = 20;
        console.log(a)
        console.log("inner")
    }
    console.log(b)
    inner()
}  
Outer()