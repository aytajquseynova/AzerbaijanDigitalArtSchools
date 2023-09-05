// 2) Qrup yoldaşları massivi yaradın və onun üzərində əməliyyatlar aparın.Üç qrup yoldaşının adlarından ibarət massiv yaradın;
// Başqa bir qrup yoldaşının adını massivin sonuna əlavə edin;
// İlk adı silin

let groupmates =['aytac','nargiz', 'zumrud'];
let groupmates2= [...groupmates];
groupmates2 = [...groupmates, 'guler'];

console.log(groupmates2.slice(1,4));


