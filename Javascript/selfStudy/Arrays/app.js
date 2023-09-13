// array yaradanda const let`e nezeren daha cox islenir
const arr = Array();
const array = []; 

//ferqli data tiplerinde deyerleri ola bilir arrayin

// sonuncu elemente catmaq ucun array.length -1

//concat method arrayleri birlesdirir
const fruits =['orange', 'apple'];
const vegetables = ['cucumber', 'domato'];
const foods = fruits.concat(vegetables);
const number = 1;
console.log(foods);
//lastindexof sonuncu index

//includes
console.log(fruits.includes('orange'));

//Array.isArray()
console.log(Array.isArray(vegetables));
console.log(Array.isArray(number));

// vegetables.toString();

//join 

//foods.splice() -remove all items
//foods.splice(0,1) //remove the first item 

let currentFruits = fruits.splice(0, 1, 'pineapple', 'watermalon');
console.log(fruits);

//push sona elave edir
//pop sondan cixarir ve qaytarir
//shift evvelden cixarir
//unshift evvele elave edir

console.log(fruits.reverse());
let name = 'aytac'; 
console.log(name.split('').reverse('').join(''));

//sort a-dan z-e siralayir aza
const ededler = [1, 2, 3, 4, 7, 9, 8];
console.log(ededler.sort());



