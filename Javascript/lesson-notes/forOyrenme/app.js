let users = [{
        name: "aytaj",
        surname: "huseynova",
        age: 22,
        lang: "Java",
    },
    {
        name: "nergiz",
        surname: "almazova",
        age: 23,
        lang: "Javascript",
    },
    {
        name: "zumrud",
        surname: "heziyeva",
        age: 24,
        lang: "PHP",
    },
    {
        name: "aysel",
        surname: "haxiyeva",
        age: 25,
        lang: "C",
    },

]

// for(i=0 ; i< users.length; i++){
//     console.log(users[i]);
// }

// for (value of users){
//     console.log(value.name);
// }

// let user = {
//     name :"aytaj",
//     surname: "huseynova",
//     age: 22,
//     lang:"Java",
// }

// for (key in user){
//     console.log(key + " "+ user[key]);
// }

// let arr = [1, 2, 3, 4, "Aytac"];

// arr.forEach(function(el){
//     console.log(el);
// })


let tree = ['baba' ,'nene',['ata','ana',['ogul','qiz']]]
function showTree(arrayData) {
    for (const data of arrayData) {
        if (Array.isArray(data)) {
            showTree(data)
        }else{
            console.log(data);
        }
    }   
}
showTree(tree);
