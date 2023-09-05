// Method 1
// let arr1
// let  arr2 = [...arr1];
// for (i in arr2) {
//     arr2[i] = arr2[i] * 2;
// }

// console.log(arr1, arr2);
// 5) Massivin bütün elementlərinin dəyərin ikiqat artırın.5 rəqəmdən ibarət massiv yaradın.Orijinal massivin surətini çıxarın və yeni massivin bütün elementlərini ikiqat artırın.Orijinal massivin dəyişmədiyini yoxlayın.

// method 2
const arr = [1, 2, 3, 4, 5];
const newArr = arr.map((item) => {
    return item * 2;
});
console.log(newArr);