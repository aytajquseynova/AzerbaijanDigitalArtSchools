// set ve map array ve objecte benzeyir
// set benzersiz elementlerden ibaretdir

// let companies = new Set();
// console.log(companies);
// creating set from array 
// const names = new Set(['Aytac','Aysun', 'Aygun', 'Aytac']);
// console.log(names);

// for(let name of names){
//     console.log('Ad:', name);
// }

// names.forEach(name => console.log(name))

const names = ['Aytac', 'Aygun', 'Aysun'];
// const namesSet = new Set();

// for(let name of names){
//     namesSet.add(name)
// }
// // console.log(namesSet.size) //length yerine burda size istifade olunur
// // console.log(namesSet.has('Aynur'));
// // namesSet.delete('Aytac'); // 1 item silir
// // console.log(namesSet);
// // namesSet.add('Arzu');
// // console.log(namesSet);
// // namesSet.clear(); // hamsini silir
// console.log(...namesSet);

// const languages = [
//     'English',
//     'Finnish',
//     'French',
//     'Spanish',
//     'English', 
//     'French',
//     'French',
// ]

// const langSet = new Set(languages);

// console.log(langSet.size); // tekrarlari saymadi

// let counts = [];
// for (let l of langSet){
//     let filteredLang = languages.filter((lng) => lng===l)
//     console.log(filteredLang);
//     counts.push({lang: l, count:filteredLang.length})
// }
// console.log(counts);

// union of sets
// let a = [1, 2, 3, 4, 5]
// let b = [3, 4, 5, 6]
// let c = [...a, ...b];

// let A = new Set(a);
// let B = new Set(b);
// let C = new Set(c);
// console.log(C); // iki arrayin birlesmesi ve eyni deyerleri gostermir

// intersection of sets - kesisme

// let a = [1, 2, 3, 4, 5, 6, 7, 7];
// let b = [2, 3, 4, 7,7,8, 10];

// let A = new Set(a);
// let B = new Set(b);

// let c = b.filter((num) => !A.has(num));
// let C = new Set(c);
// console.log(C);

// Map 

