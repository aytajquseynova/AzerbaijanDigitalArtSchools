function string(txt){
    let sait = ["aıoueəiöü"];
    for (i = 0 ; i< txt.length ; i++){
        if(!sait.includes(txt[i] )){
            sait.push(txt[i]);
        }
    }
    return sait;
}
console.log(string("salam"));