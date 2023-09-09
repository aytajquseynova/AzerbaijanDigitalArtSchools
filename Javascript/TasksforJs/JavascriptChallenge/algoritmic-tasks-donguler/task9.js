let array = ["apple", "banana", "cherry", "date"];


// let max = array[0].length

// for (let i = 1; i < array.length; i++) {
//     if (max < array[i].length) {
//         max = array[i].length
//     }

// }

// console.log(array.filter(el => el.length == max));


array.sort((a, b) => b.length - a.length)

console.log(array[0]);