let numbers = [1, 3, 4, 5]

// numbers.forEach((number, index) => {
//     numbers[index]= number* 2;
// })
// console.log(numbers)

let result = numbers.map(function(number){
    return number *2;
})
console.log(result);

//arrow function seklinde

let results = numbers.map (number => number*  3)
console.log(results)

let users = [
    {
        ad:'Aytac',
        soyad :'Huseynova',
        yas : 22
    },
    {
        ad: 'Sebine',
        soyad: 'Abdullayeva',
        yas: 25
    }
]
let date = new Date()
let resultUser = users.map((user) =>{
    return {
        fullname : `${user.ad} ${user.soyad}`,
        yearofBirth : date.getFullYear() - user.yas
    }
}
)
console.log(resultUser)