// setInterval(function (){
//     console.log("hello");
// },3000) //3 saniyeden bir

// setTimeout(function(){
//     console.log("hello");
// }, 3000) // 3saniyeden sonra ekrana cixir

// let count = 0;
// let interval = setInterval(function(){
//     // console.log('hello');
//     count +=1;
//     console.log(count);
//     if(count ===3){
//         clearTimeout(timeOut);
//     }
// },1000);

// var timeOut = setTimeout(function(){
//     console.log("hello");
//     // console.log(clearInterval(interval));
// },5000);  

// console.log(document.documentElement);
// console.log(document.body);
// console.log(document.head);

// let div = document.querySelector("div"); //objectden div elementini cagirir
// console.log(div); // 2 div elementi olanda 1cini secir

// let divs = document.querySelectorAll("div"); //node list seklinde konsola cixarir
// console.log(divs);

//getElementsbyTagName - elementin adina gore secmek
// let divs = document.getElementsByTagName("div");
// console.log(divs);

//elementin id-sine gore secmek
// let txt1 = document.getElementById("text1");
// console.log(txt1);

// class`a gore secmek
// let txt2 = document.getElementsByClassName('item')[0];
// console.log(txt2); //1 class olduqda da array qaytarir

// let items  = document.getElementsByClassName("test1")[0];
// items.textContent = "Hello, world!";
// console.log(items);

// let input = document.getElementsByTagName("input"); //collection seklinde cixir
// input[0].value = "hellooo";
// console.log(input);

let div = document.createElement('div');
div.textContent ="Salam, dunya";
console.log(div);

//bodye elave etmek
const body = document.querySelector("body");
// body.prepend(div); // bodyden hemen sonraya elave edilir
// body.before(div); // bodyden evvele elave edir

// const listItem = document.querySelector('li');
const li = document.createElement('li');
li.textContent = "Contact";
// listItem.after(li);

// li.remove();

let ul = document.querySelector("ul");
ul.insertAdjacentHTML("afterend", "<li>text</li>");
