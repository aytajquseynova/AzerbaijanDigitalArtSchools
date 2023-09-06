let now = new Date(); //indiki tarix -saat
result = now; 

//Get Methods
result = now.getDate(); //bugunu gosterir
result = now.getDay(); //hefte gunu

result = now.getFullYear(); //il
result = now.getHours(); //saat
result = now.getTime(); //millisecond

//Set Methods
now.setFullYear(2023);
now.setMonth(10);
now.setDate(1);

let birthDay = new Date(2000, 11, 9);

result  = now.getFullYear()- birthDay.getFullYear();
// yas hesablama
console.log(result);

// console.log(typeof result);