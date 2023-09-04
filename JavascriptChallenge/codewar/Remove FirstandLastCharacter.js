function addLength(str) {
    string = [...str];
    for ( i=0 ; i< str.length; i++){
        string[i] += " "+ string[i].length ;
    }
    return string;
}
console.log(addLength("apple ban"));
