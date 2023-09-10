let body = document.querySelector('body');
let button =  document.getElementById ("btn");

button.style.marginTop ="10px";
// button.addEventListener('click', function(e){
//     // console.log('Butona tikladin!');
//     button.textContent ="Butona tikladin";
// })

//or 

// button.addEventListener('click', e => {
// })

// function clickHandle(e){
//     console.log(e);
// }

// function clickHandle(e){
//     console.log(e.getAttribute('id'))
// }

// button.onclick = e => {
//     console.log(e);
// }

// button.addEventListener('dblclick', e =>{
//     button.textContent ="Salam";
//     button.style.backgroundColor = "red";
//     button.style.color ="white";
//     button.style.padding ="10px 20px";
// })

button.addEventListener('mousemove', e=>{
    button.style.backgroundColor ="blue";
}) // mouse ustune gelende o ozelliyi dasiyir ve sabit qalir

//onemli eventlar
// click , dblclick , mouseenter, mouseleave, mousemove, mouseover, mouseout, input, 
// change, blur, keydown, keyup , keypress, onload

let input = document.getElementById('name');
input.addEventListener('input', e=>{
    console.log('bir seyler yaziliyor', e.target.value );
})
input.style.marginBottom ="10px";


let colorInput = document.getElementById('colorpicker');
colorInput.addEventListener('input', e => {
    document.body.style.backgroundColor= e.target.value;
    console.log(e.target.value);
})
colorInput.style.marginBottom ="10px";

let savedButton = document.getElementById('saved-btn');
savedButton.addEventListener('click', e => {
    console.log(
        input.value, 
        colorInput.value
    )
})

let gender = document.getElementById('gender');
gender.addEventListener('change', e =>{
    console.log(e.target.value)
})