let arr1 = [2,4, 5, 9 , 10];
let  arr2 = [...arr1];

for (i in arr2) {
    arr2[i] = arr2[i] * 2;
}

console.log(arr1, arr2);
// 5) Massivin bütün elementlərinin dəyərin ikiqat artırın.5 rəqəmdən ibarət massiv yaradın.Orijinal massivin surətini çıxarın və yeni massivin bütün elementlərini ikiqat artırın.Orijinal massivin dəyişmədiyini yoxlayın.