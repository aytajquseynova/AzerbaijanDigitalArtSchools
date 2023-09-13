let str = "Ü hərfini artiq sevmirƏm";
let loveredStr = str.toLowerCase()
let result = []

for(let i = 0; i < str.length; i++) {
    if(str[i] != loveredStr[i]) {
        result.push(str[i])
    }

}
console.log(result)


// let alphabet = [
//     'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
//     'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
//     'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
// ]
// let count = 0;

// for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < alphabet.length; j++) {
//         if (str.charAt(i).includes(alphabet[j])) {
//             count++;
//         }
//     }
// }
// console.log(count);
