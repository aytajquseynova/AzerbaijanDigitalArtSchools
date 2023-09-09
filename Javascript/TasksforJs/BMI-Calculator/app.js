let weight = Number(prompt('Please, add your the weight')) ;
let height = (Number(prompt('Please, add your height'))) / 100;
let bmi = weight / (height * height);
console.log(weight+" "+height+ " " + bmi )
if ((bmi < 18.5) && (bmi > 0)){
    console.log('Underweight');
}
else if((bmi < 25) && (bmi >= 18.5)){
    console.log('Normal weight');
}
else if((bmi < 30) && (bmi >= 25)){
    console.log('Overweight');
}
else if((bmi >= 30)){
    console.log('Obesity');
}
else {
    console.log('unknown operator')
}