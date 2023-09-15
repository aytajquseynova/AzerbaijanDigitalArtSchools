// let body = document.querySelector('body');
// let button = document.createElement('button');
// body.append(button);
// button.style.background = 'red';
// button.textContent = 'html';
// console.log(button)

// button.addEventListener('click', function(){
//     button.textContent ='Clicked'
// })

// let array = [1,2, 3, 4 ,5];
// let sum =0;
// let orta = 0;
// for(let i = 0 ; i<array.length; i++){
//     sum+= array[i];
//     orta = sum / array.length;
// }
// console.log(orta);

// let body = document.querySelector('body');
// let div = document.getElementById('myElement');
// div.style.backgroundColor ='red';
// div.addEventListener('click', function(){
//     div.style.display = "none"
// })

let body = document.querySelector('body');

let div = document.querySelector('div');

div.style.backgroundColor ='red';
div.style.width = '200px';

div.addEventListener('click', function(){
    let ul = document.createElement('ul');
    div.append(ul);
    let li = document.createElement('li');
    ul.append(li);
    li.textContent = 'hey'

})
