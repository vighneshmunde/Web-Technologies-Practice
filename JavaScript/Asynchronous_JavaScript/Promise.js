// let ans ="No"
// let myPromise = new Promise((resolve,reject) => {
//     if(ans === "yes"){
//         resolve("she said yes ❤️")
//     }
//     else{
//         reject("She Said no 💔")
//     }
// })

// console.log(myPromise)
// myPromise.then((result) => console.log(result)).catch((error) => {console.log(error)})


// function Login(username, password) {
//     return new Promise((resolve, reject) => {
//         if (username === "admin" && password === 1234 )
//         {
//             resolve("Login done !!!")
//         }
//         else
//         {
//             reject("Login failed")
//         }
//     })
// }
// Login("admin",1234).then(result => console.log(result)).catch(error => console.log(error))


// function foodOrder(step){
//     return new Promise((res,rej) =>
//     {
//         setTimeout(() => {
//             console.log(step);
//             res();
//         },2000)
//     })
// }
// foodOrder("Order Placed")
//     .then(() => foodOrder("Preparing food"))
//     .then(() => foodOrder("food ready"))
//     .then(() => foodOrder("out of delivery"))
//     .then(() => foodOrder("Order received"))
//     .catch((err) => console.log(err))


// let promise1 = new Promise ((resolve, reject) => {
//     resolve("promise 1 is resolve")
// })

// Promise1.then((result) => console.log(result)).catch(error => console.log(error))
// .finally(() => console.log("Imp Code"))


// let promise1 = new Promise ((resolve,reject) => {
//     setTimeout(() => {
//         resolve("promise 1 is resolve")
//     },3000)
// })

// let promise2 = new Promise ((resolve,reject) => {
//     setTimeout(() => {
//         resolve("promise 2 is resolve")
//     },2000)
// })

// let promise3 = new Promise ((resolve,reject) => {
//     setTimeout(() => {
//         resolve("promise 3 is resolve")
//     },1000)
// })


// // Promise.all()
// Promise.all([promise1,promise2,promise3]).then((result) => console.log(result)).catch(error => console.log(error))


// // Promise.any()
// Promise.any([promise1,promise2,promise3]).then((result) => console.log(result)).catch(error => console.log(error))

// // Promise.race()
// Promise.race([promise1,promise2,promise3]).then((result) => console.log(result)).catch(error => console.log(error))

// // Promise.allSettled
// Promise.allSettled([promise1,promise2,promise3]).then((result) => console.log(result)).catch(error => console.log(error))


// fetch()
// let userData = fetch("https://jsonplaceholder.typicode.com/users")
// .then(data=>data.json()).then(res=>consol.log(res))
// .catch(error=>console.log(error))
// //console.log(userData) will not be executed


async function fetchingdata(){
    let data = await fetch("https://jsonplaceholder.typicode.com/users")
    let res = await data.json()
    console.log(res)
}
fetchingdata()