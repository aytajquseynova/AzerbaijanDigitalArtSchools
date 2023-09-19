// Level1 

let challenge = "30 days of javascript"; //Challenge adında bir değişken tanımlayın ve '30 Days Of JavaScript' başlangıç ​​değerine atayın

console.log(challenge.length); // console.log() kullanarak tarayıcı konsolunda değişkeni yazdırın,
// console.log() kullanarak tarayıcı konsolunda dizenin length değerini yazdırın
console.log(challenge.toUpperCase()); // toUpperCase() yöntemini kullanarak tüm dize karakterlerini büyük harflerle değiştirin,

console.log(challenge.toLowerCase());
// toLowerCase() yöntemini kullanarak tüm dize karakterlerini küçük harflerle değiştirin,

console.log(challenge.substring(0,3));
// substr() veya substring() yöntemini kullanarak string'in ilk kelimesini kesin-silin (dilimleyin)

console.log(challenge.substr(3,challenge.length ));
// Days Of JavaScript ifadesini 30 Days Of JavaScript'ten ayırın.

console.log(challenge.includes('script'));
// includes() yöntemini kullanarak string'in Script kelimesini içerip içermediğini kontrol edin

console.log(challenge.split(''));
// split() yöntemini kullanarak string öğesini bir array'ye bölün

let netWork = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon ';
console.log(netWork.split(','));
// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' dizeyi virgülden split ve bir dizi olarak değiştirin.

console.log(challenge.replace('javascript', 'pyhton'));
// replace() yöntemini kullanarak 30 Days of JavaScript'i 30 Days of Python olarak değiştirin.

console.log(challenge.charAt(15));
// 'JavaScript'in 30 Günü' dizesinde dizin 15'teki karakter nedir? charAt() yöntemini kullanın.

console.log(challenge.charCodeAt('j')); //unicode urf-16a gore getirilir
// charCodeAt() kullanan 'JavaScript'in 30 Günü' dizesindeki J karakter kodu nedir?

console.log(challenge.indexOf('30'));
// 30 Days of JavaScript'te a öğesinin ilk oluşumunun konumunu belirlemek için indexOf kullanın

console.log(challenge.lastIndexOf('javascript'));

let sentence = "Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır";
console.log(sentence.indexOf('çünkü' ))
//Aşağıdaki cümlede çünkü kelimesinin ilk geçtiği yeri bulmak için indexOf kullanın: 'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'

console.log(sentence.lastIndexOf('çünkü'))
// Aşağıdaki cümlede çünkü kelimesinin son geçtiği yeri bulmak için lastIndexOf kullanın: 'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'

console.log(sentence.search('çünkü'));
// Aşağıdaki cümlede çünkü kelimesinin ilk geçtiği yeri bulmak için search kullanın: 'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır

console.log(challenge.trim());
// Bir dizgenin başındaki ve sonundaki boşlukları kaldırmak için trim() kullanın. Örneğin '30 Days Of JavaScript'.

console.log(challenge.startsWith('30'));
// 30 Days Of JavaScript dizesiyle startsWith() yöntemini kullanın ve sonucu doğru yapın

console.log(challenge.endsWith('javascript'));
// 30 Days Of JavaScript dizesiyle endsWith() yöntemini kullanın ve sonucu doğru yapın

const matchA = /a/g;
console.log(challenge.match(matchA));
// JavaScript'in 30 Günü'ndeki tüm a'leri bulmak için match() yöntemini kullanın

let days = "30 days of";
let lang = 'Javascript';
console.log(days.concat(lang));
// concat() kullanın ve '30 Days of' ve 'JavaScript'i tek bir dize olan '30 Days of JavaScript' ile birleştirin

console.log(challenge.repeat(2));
// 30 Gün JavaScript 'i 2 kez yazdırmak için repeat() yöntemini kullanın

// Level 2

console.log(`The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`);
// console.log() kullanarak aşağıdaki ifadeyi yazdırın:

console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`);

let a = '10';
console.log(Number(a) === 10);
// '10' tipinin tam olarak 10'a eşit olup olmadığını kontrol edin. Değilse tam olarak eşit yapın

console.log(parseFloat(9.8) == 10)
// parseFloat('9.8') 10'a tam olarak eşit değilse, 10'a eşit olup olmadığını kontrol edin.

let python = "python";
let jargon = "jargon";
console.log(python.includes('on') && jargon.includes('on'));
// Hem python hem de jargonda 'on' ifadesinin bulunup bulunmadığını kontrol edin

let jargonSentence = 'Umarım bu kurs jargonla dolu değildir';
console.log(jargonSentence.includes('jargon'));
// Umarım bu kurs jargonla dolu değildir. Cümlede jargon olup olmadığını kontrol edin.

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}
console.log(getRandomInt(100));
// 0 ile 100 arasında rastgele bir sayı üretin.

  function randomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  console.log(randomInt(50, 100));
// 50 ile 100 arasi

function Random(max){
    return (Math.floor(Math.random() * max));
}
console.log(Random(255));
// Dahil olmak üzere 0 ile 255 arasında rastgele bir sayı oluşturun.

for (let i = 1; i <= 5; i++) {
    const square = i * i;
    const cube = i * i * i;
    console.log(`${i} ${1} ${square} ${cube} `);
}