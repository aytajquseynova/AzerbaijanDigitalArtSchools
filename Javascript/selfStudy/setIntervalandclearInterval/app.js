let body = document.querySelector("body");
let p = document.createElement('p');
body.append(p);

p.style.fontSize = "32px";
p.style.padding = "0px 32px";
p.className = "count";

let button1 = document.createElement("button");
body.append(button1);
button1.textContent = "Start";
button1.className = "start";
button1.style.padding = "8px 32px";
button1.style.width = "100px";

let button2 = document.createElement("button");
body.append(button2);
button2.textContent = "Stop";
button2.className = "stop";
button2.style.padding = "8px 32px";
button2.style.marginLeft = "5px";
button2.style.width = "100px";


// setInterval(function, ms)
// 1000 ms = 1sec

let time = document.querySelector(".count");
// console.log(time);
let count = 30,
    clear;
p.textContent = count;
document.querySelector('.start').addEventListener('click', () => {
    clear = setInterval(fromEndtoZero, 1000);
});

document.querySelector('.stop').addEventListener('click', () => {
    clearInterval(clear);
})
document.querySelector("")

function fromZeroToEnd() {
    if (count < 30) {
        count++
    } else return;
    money.textContent = count;
}

function fromEndtoZero() {
    if (count > 0) {
        count--;
    } else return;
    time.textContent = count;
}