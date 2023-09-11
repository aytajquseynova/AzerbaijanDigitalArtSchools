 // local storage kkeys and values are always strings
// local storage - yerel depolama
// Session storage - oturum depolama

// local storage-de datani user silmediyi muddet qalmaga davam edir
// session storage-de ise brauzer baglandigi anda data silinir

// There are 5 methods to work on local storage:
// setItem(), getItem(), removeItem(), clear(), key()

// localStorage.setItem('name', 'Aytac')

// console.log(
//     localStorage.getItem('name')
// )

// let names = ['aytac','sebine', 'nergiz']

// localStorage.setItem('names', names)

// console.log(
//     localStorage.getItem('names')
// )

// let names = ['aytac', 'sebine', 'nergiz']

// let user = {
//     name :'aytac',
//     surname: 'huseynova'
// }

// localStorage.setItem('user', JSON.stringify(user)) // string qaytarir amma bilirik ki obyektdir
// console.log(localStorage.getItem('user'))
// localStorage.removeItem('names');  item silir
// butun itemleri silmek istesek clear methodu yazariq


// console.log(
//     localStorage
// )

// console.log(JSON.parse(localStorage.getItem('user')))

let basket = JSON.parse(localStorage.getItem('basket')) || []
let products = [
    {
    id :1, 
    title: 'Asus', 
    price : 40_000
    },
    {
        id: 2,
        title: 'Macbook',
        price: 50_000
    },
    {
        id: 3,
        title: 'Hp',
        price: 10_000
    }
]

function addBasket(productId){
    basket.push(productId)
    localStorage.setItem('basket', JSON.stringify(basket))
}

// addBasket(2)
// addBasket(3)


console.log(basket)