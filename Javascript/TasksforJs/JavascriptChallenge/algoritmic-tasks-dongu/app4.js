// let str = "Welcome to GeeksforGeeks.";
// let check = str.includes("to");
// console.log(check);
// function tekrar(){ 
//     let array = [];

//     for(i = 0; i< array.length; i++){
//     if (array[i] = array.includes("") ){
//         array += 1;
//     }
// }
// }
// tekrar()
function arr(newArr){
let array = [];
for (i =0 ; i < newArr.length; i++){
    if(!array.includes(newArr[i])){
        array.push(newArr[i])
    }
    
}
return array;
}
console.log([2, 7,8,8, 7].length -arr([2, 7,8,8, 7]).length);