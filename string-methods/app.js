// Include method
// let messages = 'Hello, dear users, I am Aytaj';
// let result = messages.includes("Aytaj");
// console.log(result);

//Slice method
// let messages = 'Hello, dear users, I am Aytaj';
// console.log(messages, messages.slice());

// let arr1 = [1,2, 3];
// let arr2 = arr1.slice();
// arr2.push(4);
// console.log(arr1, arr2);

// let messages = new String('Hello, dear users, I am Aytaj');
// console.log(messages.slice(-1)); // sonuncu herfi secir

// let messages = "test";
// console.log(messages.toUpperCase());

// TRIM METHOD
// let messages = prompt ("Enter message");
// console.log(messages.length, messages.trimStart().length);

//Task1
// let mentor = "faXRI";
// console.log(mentor.slice(0, 1).toUpperCase() + mentor.slice(1, 5).toLowerCase());


// Task2
// let email = prompt("Email daxil edin");
// if(email.trim().includes("@") && email.trim().includes(".")){
//     console.log("Valid email");
// }
// else {
//     console.log("Invalid email");
// }

//replace method
// let message = "Hello world girls";
// console.log(message.replace(/e/g, "-"))

// startsWith method
// let message ="hello girls , how are you?";
// console.log(message.startsWith("Hel"))

// endWith methodu da eyni qaydada

//Split methodu
// let message = "Hello world how are you";
// console.log(message.split(" ").join("-"));

// let firstName ="Aytaj";
// console.log(firstName.repeat(4));


//Task
// let txt = "my name is nasib";
// let array = txt.split(" ");

// let newSentence;
// for (let i = 0; i< array.length ; i++){
//     newSentence +=
//     array[i].slice(0, 1).toUpperCase()+ 
//     array[i].slice(1, array.length) +
//     "";
// }
// console.log(newSentence);

// let cardNumber = "4098509860987098";
// console.log(cardNumber.slice(- 4).padEnd(16, "*"))