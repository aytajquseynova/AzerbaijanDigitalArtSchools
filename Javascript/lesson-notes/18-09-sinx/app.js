// function start(){
//     console.log('start');
//     setTimeout(function (){
//         document.querySelector('body').textContent = "Hello ";
//         console.log('end');
//     },3000);
// }
// console.log('before');
// start();
// console.log('end');

// sinxron kodun minusu - for yazsaq hemin o for dongusu bitmemis digerlerini yazdirmaq olmaz
// sinxron kodu asinxrona ceviren bir nece usul :settime out
// asinxron kodu idare etmek cetindi

// bir funksiyaya basqa bir funksiyanin oturulmesi callback adlanir

// function step1(callback){
//     const data = "Hello world";
//     callback(data);
// }
// function start(message){
//     console.log(message);
// }
// step1(start);

// function step1(callback) {
//     let user = "Test Testli";
//     setTimeout(function(){
//         user = "Aytaj Huseynova"
//         callback(user);
//     }, 3000)  
// }

// function start(message) {
//     console.log(message);
// }
// step1(start);

function step1(callback) {
    setTimeout(function () {
        const countryData = {
            lat : '40.98.43.15', 
            lng :'41.33.24.35',
            countryName :'Azerbaijan',
    }
        callback(countryData);
    }, 3000)
}

function step2(countryData,callback) {
    setTimeout(function () {
        const currency = {
            name: 'AZN',
        }
        callback(countryData, currency);
    }, 3000)
}

function step3(countryData, currency, callback){
    setTimeout(function(){
        const message = `Hi. Your country is ${countryData.countryName}.
         your currency is ${currency.name}`
        callback(message);
    }, 3000)
}

function start(){
    step1(function(countryData){
        step2(countryData,function(countryData, currency){
            
        })
    })
}