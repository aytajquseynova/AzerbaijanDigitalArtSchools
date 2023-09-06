// 1 deyisen string kimi . hemin string ad soyad ata ad  boyuk herfleri kicik 
let user = "Huseynova Aytac Qedir Eli Aytac";
let txt = user.split(" ");
// console.log(user.slice(0,1).toLowerCase()
// + "."+ user.slice(10,11).toLowerCase()
// + "." + user.slice(16, 17).toLowerCase());


// console.log(txt[0][0].toLowerCase(), txt[1][0].toLowerCase(), txt[2][0].toLowerCase())

let letters =[];
for (let i = 0; i< txt.length ; i++){
    letters+= txt[i][0].toLowerCase();
}
console.log(letters);