let settings ={
    userName :'Loremipsum',
    password:'BadPassword',
    isActive: false,
    ip: "127.0.0.1",
    serverName:"Kodluyoruz.org"
}

//obje icindeki bilgilerin tek seferde cikarilmasi
// let userName = settings.userName
// console.log(userName)
// rename && destructing
let {userName:user, password, isActive,ip:serverIp, serverName} =settings
console.log(user, password, isActive, isActive, serverName)
console.log(settings)
console.log (user)

//obje icindeki bazi bilgilerin cikarilmasi
let {userName:userName2, password:password2, isActive:isActive2, ...newSettings} =settings
//burada ilk 3 hisse kesildi 
console.log(userName2, password2, isActive2, newSettings)
// eger deyisken adi daha once teyin edilmeyibse
// let {userName, password, isActive, ...newSettings} =settings

// objenin destructing ile kopyalanmasi

// Xetali
// let settings2 = settings
// settings2.userName ="deyisen bilgi"
// console.log(settings)
// console.log(settings2)

//Dogrusu
let settings2 = {...settings}
settings2.userName ="Deyisen Bilgi"
console.log(settings)
console.log(settings2)

let score  =[100, 200, 300, 400]

let [score1, score2, ...otherScore] =score
console.log(score1, score2, otherScore)

//object kopyalama ile ayni 
let copyOfScore ={...score}
console.log(copyOfScore)