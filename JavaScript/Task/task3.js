// // 1. print "Hello World " After 3 Seconds

// setTimeout(()=>{
//     console.log("Hello World")
// },3000)

// // 2.  Countdown from 10 to 1 
// let count = 10;
// let timer = setInterval(()=>{
//     console.log(count);
//     count--;
//     if (count == 0)
//     {
//         clearInterval(timer)
//     }
// },2000)

// 3. OTP Expiry Time
let Expire = 60
console.log("Your Otp will be Expire Soon")
let timer = setInterval(()=>{
    console.log(Expire + " Seconds Remaining");
    Expire--;
    if (Expire == 0)
    {
        clearInterval(timer)
        console.log("Otp has been Expired");
    }
},1000)