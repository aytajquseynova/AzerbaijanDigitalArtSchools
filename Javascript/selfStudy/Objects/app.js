// const person = {};

const user = {
    firstName : 'Aytac', 
    secondName : 'Huseynova',
    age : 22,
    isMarried :false, 
    skills : ['Html',
             'CSS', 
             'Javascript',
             'Figma', 
             'Bootstrap'],
    siblings: [{
        name:'Sabina',
        age:25}
    ] , 
    getFullName: function(){
        return `${this.firstName} ${this.secondName}`
    }        
}

// console.log(user.getFullName())

// setting a new keys in a object

user.lang = 'az';
console.log(user)

