// let user ={
//     firstName :'Aytac',
//     lastName :'Huseynova',
//     country : 'Azerbaijan',
//     city :'Baku',
//     age :22,
//     isMarried :false,
// }
// console.log(typeof(user.age), typeof(user.isMarried));
// firstName, lastName, country, city, age, isMarried, year değişkenlerini oluşturun ve bunlara değer atayın. Farklı veri türlerini kontrol etmek için typeof operatörünü kullanın.

// let a = '10';
// console.log(a === 10);
// '10' türünün 10'a eşit olup olmadığını kontrol edin

// console.log(parseInt('9.8') == 10);
// parseInt('9.8') 10'a eşit olup olmadığını kontrol edin

// console.log( 5> 3);
// console.log(4 === 4);
// console.log(10 < 20);
// console.log('a' === 'a');
// Doğruluk değeri sağlayan üç JavaScript ifadesi yazın.

// console.log('10' === 10);
// console.log( 1 > 0 > 5);
// console.log(4 < 1);
// Yanlış değer sağlayan üç JavaScript ifadesi yazın.

// console.log( 4 > 3); //true +
// console.log( 4 >= 3); //true +
// console.log( 4 < 3) // f +
// console.log(4 <=3 ) //f +
// console.log( 4 == 4) //t +
// console.log(4 === 4) //t +
// console.log(4 != 4) //f +
// console.log(4 !==4 ) //f +
// console.log( 4 !== '4') //t +
// console.log(4 != '4') //f +
// console.log(4 === '4') //f +
// console.log(('python').length !=('jargon').length) // f +
// console.log() kullanmadan önce aşağıdaki karşılaştırma ifadesinin sonucunu bulun.Sonuca karar verdikten sonra console.log() kullanarak onaylayın.

// 4 > 3
// 4 >= 3
// 4 < 3
// 4 <= 3
// 4 == 4
// 4 === 4
// 4 != 4
// 4 !== 4
// 4 != '4'
// 4 == '4'
// 4 === '4'
// Python ve jargonun uzunluğunu bulun ve yanlış bir karşılaştırma ifadesi yapın.

// console.log( 4 > 3 && 10 < 12 );//t
// console.log(4 > 3 && 10 > 12); //f
// console.log(4 > 3 || 10 < 12); // t
// console.log(4 > 3 || 10 > 12); //t
// console.log(!(4 > 3)); //f
// console.log(!(4 < 3)); //t
// console.log(!(false)); //t
// console.log(!(4 > 3 && 10 < 12)); //f
// console.log(!(4 > 3 && 10 > 12)); //t
// console.log(!(4 === '4')); //t
// console.log(!(('dragon').includes('on') && ('python').includes('on'))); //f

// let now = new Date();
// console.log(now.getFullYear()); //Bugün yıl nedir?
// console.log(now.getMonth() + 1); //Bugünün ayı rakam olarak nedir?
// console.log(now.getDay() - 1 ); // Bugün sayı olarak gün nedir ?
// console.log(now.getHours()); //Şimdi saat kaç?
// console.log(now.getMinutes()); // Dakika kaç şimdi?
// console.log(now.getTime()); // 1 Ocak 1970'den bugüne kadar geçen saniye sayısını bulun.

// LEVEL 2

// function area (b, h){
//     return 0.5 * b * h;
// }
// console.log(`The area of the triangle is ${area(20,10)}`);
// Kullanıcıdan üçgenin tabanını ve yüksekliğini girmesini ve bir üçgenin alanını hesaplamasını isteyen bir komut dosyası yazın (alan = 0,5 x b x h).

// Enter base: 20
// Enter height: 10
// The area of the triangle is 100

// function perimeter(a, b, c){
//     return a + b +c ;
// }
// console.log(`The perimeter of the triangle is ${perimeter(5, 4, 3)}`)

// Kullanıcıdan üçgenin a kenarını, b kenarını ve c kenarını girmesini ve üçgenin çevresini hesaplamasını isteyen bir komut dosyası yazın (çevre = a + b + c)

// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12

// function area(a, b){
//     return 2*(a + b);
// }
// console.log (area(5,4))

// function area(r){
//     let pi = 3.14;
//     let a = pi * r *r;
//     // let c = 2 * pi *r;
//     return a;
//     // return c;
// }
// console.log(area(3));

// function yKesme( x){
//    let y = 2 *x -2;
//    return y;
// }
// console.log(yKesme(5))

// Define the coordinates of the two points
// let x1 = 2;
// let y1 = 2;
// let x2 = 6;
// let y2 = 10;
// let slope = (y2 - y1) / (x2 - x1);
// console.log("The slope between (" + x1 + ", " + y1 + ") and (" + x2 + ", " + y2 + ") is: " + slope);

// let x = 5;
// let y = x * x +6 * x +9;
// console.log(y);

// function earning(hour, rate){
//     return hour * rate;
// }
// console.log(`Your weekly earning is ${earning(40, 28)}`)
//Kullanıcıdan saat ve saat başına oran girmesini isteyen bir komut dosyası yazın. Kişinin ücretini hesapla?

// let name = prompt('Ad daxil edin');
// if(name.length > 7){
//     console.log('adiniz uzundur');
// }else {
//     console.log('adiniz qisadir');
// }
// Adınızın uzunluğu 7'den büyükse, adınız uzun, yoksa adınızın kısa olduğunu söyleyin.

// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// if(firstName.length > lastName.length){
//     console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`)
// }
//Adınızın uzunluğunu ve soyadınızın uzunluğunu karşılaştırın ve bu çıktıyı almalısınız.

// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// Your first name, Asabeneh is longer than your family name, Yetayeh

// let myAge = 250;
// let yourAge = 25;
// let dif = myAge - yourAge;
// if(myAge > yourAge){
//     console.log(`I am ${dif} years older than you.`)
// }
// İki değişken myAge ve yourAge bildirin ve bunlara başlangıç değerleri ile myAge ve yourAge atayın.

// let myAge = 250
// let yourAge = 25
// if( myAge > yourAge){
//     console.log(`I am ${myAge- yourAge} years older than you`)
// }

// let birthYear = Number(prompt('Enter birth year'));
// let now = new Date();
// let year = now.getFullYear();
// let age = year - birthYear;
// if(age >= 18){
//     console.log(`You are ${age}.You are old enough to drive`);
// } else if(age > 0 && age < 18){
//     console.log(`You are ${age}.You will be allowed to drive after  years ${18 - age} `)
// }
// İstemi kullanarak, kullanıcının doğduğu yılı alır ve kullanıcı 18 veya daha büyükse, kullanıcıya belirli bir süre beklemesini söylemediği takdirde, kullanıcının araba kullanmasına izin verir.

// Enter birth year: 1995
// You are 25. You are old enough to drive

// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years

// let year = Number (prompt('Il daxil edin'));
// let sec = 31536000;
// console.log(` You loved ${year * sec} seconds`);
// Kullanıcıdan yıl sayısını girmesini isteyen bir komut dosyası yazın. Bir kişinin yaşayabileceği saniye sayısını hesaplayın. Birinin sadece yüz yıl yaşadığını varsayalım

// Enter number of years you live: 100
// You lived 3153600000 seconds.

