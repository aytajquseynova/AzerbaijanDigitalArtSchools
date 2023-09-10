//Create Elements
let body = document.querySelector("body");
let div = document.createElement('div');
let h1 = document.createElement('h1');
let buttonDiv = document.createElement('div');
let generalBox = document.createElement('div');
let button1Div = document.createElement('div');
let button2Div = document.createElement('div');

//Appends
generalBox.prepend(buttonDiv);
generalBox.prepend(div);
body.prepend(generalBox);
div.prepend(h1);
buttonDiv.prepend(button1Div);
buttonDiv.prepend(button2Div);

//Styles
h1.style.fontSize = "32px";
h1.className = "count";

generalBox.style.display = "flex";
generalBox.style.flexDirection ="column";
generalBox.style.gap = "20px";

div.style.background = "#white";
div.style.color = "seagreen";
div.style.border ="2px solid seagreen";
div.style.margin ="0 auto";
div.style.width = "500px";
div.style.padding = "32px";
div.style.textAlign= 'center';

buttonDiv.style.width = "300px";
buttonDiv.style.margin = "0 auto";
buttonDiv.style.display ="flex";
buttonDiv.style.gap ="30px";
buttonDiv.style.justifyContent="center";

//Button1 styles
let button1 = document.createElement("button");
button1Div.prepend(button1);
button1.textContent = "Start";
button1.className = "start";
button1.style.padding = "8px 32px";
button1.style.backgroundColor ="seagreen";
button1.style.color = "bisque";
button1.style.cursor="pointer";

//Button2 styles
let button2 = document.createElement("button");
button2Div.prepend(button2);
button2.textContent = "Stop";
button2.className = "stop";
button2.style.padding = "8px 32px";
button2.style.backgroundColor = "seagreen";
button2.style.color = "bisque";
button2.style.cursor = "pointer";


// setInterval(function, ms)
// 1000 ms = 1sec

let time = document.querySelector(".count");
// console.log(time);
let count = 30,
    clear;
h1.textContent = count;
document.querySelector('.start').addEventListener('click', () => {
    clear = setInterval(fromEndtoZero, 1000);
});

document.querySelector('.stop').addEventListener('click', () => {
    clearInterval(clear);
})


//0-30
function fromZeroToEnd() {
    if (count < 30) {
        count++
    } else return;
    money.textContent = count;
}

// 30-0
function fromEndtoZero() {
    if (count > 0) {
        count--;
    } else return;
    time.textContent = count;
}