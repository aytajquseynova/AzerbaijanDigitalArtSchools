let numbers = [1, 2, 3, 0, 4, 5, 6, -1, 7];



let max = numbers[0]

for (let i = 1; i < numbers.length; i++) {
    if (max < numbers[i]) {
        max = numbers[i]
    }
    
}

console.log(max);