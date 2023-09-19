// a promise is one of these states
// pending : initial state, neither fulfilled nor rejected
// fulfilled : meaning that the operation completed successfully
// rejected : meaning the operation failed

// callback 
// callback 
// const test = callback => {
//     setTimeout(() =>{
//         callback(' Xeta yarandi', [])
//     }, 2000)
// }
// const callback = (err, data) => {
//     if(err){
//         console.log('xeta', err)
//     } else{
//         console.log('data',data)
//     }
// }
// test(callback)

// callback hell-den qurtulmaq ucun promise isledirik

// promise constructor 

// const promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         // reject('xeta')
//     }, 1500)
//     // resolve('islem basarili');
//     // reject('islem basarisiz')
// })
// // console.log(promise)
// promise.then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.warn(err)
// })
// promise basarili olanda resolve, basarisiz olanda ise reject yazir

// fetch api
// const API_URL = 'https://jsonplaceholder.typicode.com/posts';
// // console.log(fetch(API_URL) ); // promise pending dondurur

// fetch(API_URL)
// .then((res) => res.json()
// .then( data => console.log(data)))
// .catch(err => console.error(err))

// bir funksiyanin evveline async yazanda promise`e donusur

// ASYNC ve Await ikisi birlikde isledilir hemise
//  const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// async function getPosts(){
//    try{
//     const res = await fetch(API_URL);
//     const data = await res.json();
//     console.log(data);
//    } catch(Err){
//     console.error(Err)
//    }
// }
// getPosts();

//  const res = await fetch (API_URL);
//  console.log(res);

// Evvele async yazilanda funksiya promise dondurur
// const square = async function(n){
//     return n*n
// }
// const value = await square(2);
// console.log(value);

