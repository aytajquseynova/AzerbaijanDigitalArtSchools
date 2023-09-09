const students = [{
        name: "Alice",
        grade: 90
    },
    {
        name: "Bob",
        grade: 85
    },
    {
        name: "Charlie",
        grade: 92
    }
]
let index = 0;
let sumOfGrades = 0;
while (index < students.length) {
    sumOfGrades += students[index]["grade"];
    index++;
}
let avarage = sumOfGrades / students.length;
console.log(avarage);