//Boolean

// Truthy values  
// All numbers - positive and neagtive are truthy except zero
// All strings are truthy except an empty string("")
// The boolean true

//Falsy values 
// 0, 0n , null, undefined, Nan, the boolean false,"", '' , `` , empty string

// Operators

// === hem deyeri hem data tipinin beraberliyini yoxlayir
// == ise tekce deyeri yoxlayir

//Logical operators
// true&& true => true
// true &&false => false
// false&& false => false

//Ternary Operator

// let isRaining = true
// isRaining
// ? console.log('You need a rain coat.')
// : console.log('No need for a rain coat.')

// // console.log(isRaining)

// 5>4 ? console.log('beli')
// : console.log('xeyr')

//Window methods 

//alert method
// alert('welcome') -cox isletmeyin

// window prompt method

//confirm 

//Date object

// getMonth 0-11 arasi , getTime (millisecond since Jan 1, 1970)
//Getday 0-6 hefte gunu

let now = new Date();
// console.log(now);

// console.log(now.getFullYear()); // hal hazirdaki il
// console.log(now.getTime());
// console.log(now.getDay()); //hefte gunu

// console.log(Date.now()); // beraberdi getTime methoduna

// let year = now.getFullYear();
// let month = now.getMonth();
// let day = now.getDay();
// let hour = now.getHours();
// let minute = now.getMinutes();
// let second = now.getSeconds();

// let months =['Yanvar',
//             'Fevral',
//             'Mart',
//             'Aprel',
//             'May',
//             'Iyun',
//             'Iyul',
//             'Avqust',
//             'Sentyabr',
//             'Oktyabr',
//             'Noyabr',
//             'Dekabr'
//             ]
// let days = [
//     'Bazar Ertesi',
//     'Cersenbe axsami',
//     'Cersenbe',
//     'Cume axsami',
//     'Cume', 
//     'Senbe',
//     'Bazar'
// ]            
// // console.log(months[0]);
// // console.log(days[1]);

// let humanReadableDate = `${day} ${months[month]} ${year}, ${days[day]}, ${hour}: ${minute}:${second}}`;
// console.log(humanReadableDate);




