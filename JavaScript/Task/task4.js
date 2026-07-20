// 1. Movie Ticket Booking 
// Check seats available
// If available -> book ticket
// Else Reject

// let Movieticket = "Available"
// let Booking = new Promise ((resolve,reject) => {
//     if (Movieticket === "Available")
//     {
//         resolve("Book Ticket")
//     }
//     else
//     {
//         reject("Reject")
//     }  
// })

// Booking.then((result) => console.log(result)).catch((error) => {console.log(error)})

// 2. Atm Withdrawal
// Check Balance
// If sufficient balance -> withdraw money
// otherwise reject

// function Atm (Balance, Withdraw){
//     return new Promise((resolve, reject) =>{
//         if (Balance > Withdraw)
//         {
//             resolve("Withdraw Money")
//         }
//         else
//          {
//              reject("Insufficient B")
//          }
//     })
// }
// Atm(5000,2000).then((result) => console.log(result)).catch((error) => {console.log(error)})

// 3. Fetch User Data Simulation

function Fetch(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 1 ,
                name: "Rahul" ,
                age: 22
            })
        },2000)

    })
}
Fetch().then((user)=> console.log(user))