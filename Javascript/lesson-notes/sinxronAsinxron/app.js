// function start(){
//     console.log('start');
//     document.querySelector('body').textContent ="lorem ipsum";
//     console.log('end');
// }
// console.log('before'); //siralama buradan baslayir bu sinxron proqramlasdirmadi
// start();
// console.log('after'); 

// sinxron kod menim diger kodumu gozledir. 

// function start(){
//     console.log('start');
//     setTimeout(function(){
//         document.querySelector('body').textContent ="hello world";
//     }, 3000) //setTimeOut asinxron funksiyadi - sinxron kodu asinxron edir
//     console.log('end');
// }
// console.log('before');
// start();
// console.log('after');

// function step1(callback){
//     const data = "Hello world";
//     callback(data);
// }
// function start(result){
//     console.log(result);
// }

// step1(start);

// function step1(clb){ 
//     const data = "hello";
//     clb(data);
// }
// function start(result){
//     document.querySelector('body').textContent = result;
// }
// step1(start);

// API data alisverisi eden protokoldu
// callback hell
// function step1(clb) {
//     setTimeout(function(){
//         const location = {
//         lat:'40.188.13',
//         lng:'40.45.33',
//         city :'Baku'
//     };
//     console.log('Step1 finished');
//     clb(location); 
//     }, 1000)
 
// }

// //locationun neticesine uygun olaraq olkenin valyutasini tapaq
// function step2(location, clb){
//     setTimeout(function(){
//     const currency ={currency :'azn'};
//     console.log('Step2 finished');
//     clb(location, currency);
//     }, 1000)

// }

// function step3(location, currency, clb){
//     setTimeout(function(){
//         console.log('Step3 finished');
//         let message = `Hi, ${location.city}, ${currency.currency}`;
//         clb(message);
//     }, 1000)
    

// }
// function start() {
//     step1(function(step1Data){
//         step2(step1Data, function(location, currency){
//             step3(location, currency, function(){
//                 document.querySelector('body').textContent = message;
//             })
//         })
//     })
    
// }
// start();


// let myPromise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let rand = Math.random();
//         if(rand > 0.5 ){
//             resolve(` True rand is greater than 0.5 is ${rand}`);
//         } else{
//             reject(`False rand is greater than 0.5  ${rand}`);
//         }
//     }, 2000)
// })
// myPromise.then (function(message){
//     console.log(message);
// }).catch (function(err){
//     console.log(err);
// })

// const res = fetch('https://jsonplaceholder.typicode.com/posts'); //interview-da bele sorusurlar
// // console.log(res);
// // res.then(function(data){
// //     console.log(data.json());
// // }).catch(error => console.log(error));

// res.then((data)=> data.json()).then((data)=>{
//     const ul = document.createElement('ul');
//     data.map((post) => {
//         const li = document.createElement('li');
//         li.innerHTML = `<h1>${post.id}</h1>
//                         <h4>${post.title}</h4>
//                         <p>${post.body}</p> `;
//         ul.append(li)                
//     })
//     document.querySelector('body').append(ul);
// }).catch((error) => console.log(error));

// burdaki statusun qarsisindaki reqem deyisir istek atdiginiz url-den asili olaraq

// bu asan formasidi
async function fetchData(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log(data);
    const ul = document.createElement('ul');
    data.map((post) => {
        const li = document.createElement('li');
        li.innerHTML = `<h1>${post.id}</h1>
                        <h4>${post.title}</h4>
                        <p>${post.body}</p> `;
         ul.append(li)                
        })
    document.querySelector('body').append(ul);
}
fetchData();