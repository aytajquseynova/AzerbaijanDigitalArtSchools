function doubleChar(str) {

    let string = ""

    for (let i = 0; i < str.length; i++) {
        string += str[i].repeat(2)
    }
    return string
}
console.log(doubleChar("String"));