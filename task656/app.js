let body = document.querySelector("body");
let div1 = document.createElement("div");

div1.textContent = "30";
div1.style.padding ="30px";
div1.style.border ="5px solid black";
div1.style.textAlign ="center";
div1.style.width = "500px";
body.append(div1);
let button = document.createElement('button');
body.append(button);
button.value ="Stop";
button.style.padding = "20px";
button.style.margin = "5px";
button.style.width = "300px";
button.style.border = "1px solid black";