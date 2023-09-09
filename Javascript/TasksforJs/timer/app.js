let body = document.querySelector("body");
let div1 = document.createElement("div");
let div2 = document.createElement("div");
let div3 = document.createElement("div");
body.append(div2);
body.append(div3);
let h1 = document.createElement("h1");
div1.append(h1);
h1.textContent = "30";
div1.style.padding ="20px";
div1.style.border ="3px solid seagreen";
div1.style.margin ="0 auto";
div1.style.textAlign ="center";
div1.style.width = "500px";
div1.style.backgroundColor ="milk";
div3.append(div1);
let button = document.createElement('button');
div3.append(div2);
div2.append(button);
div3.style.display ="grid";
div3.style.textAlign = "center";
div3.style.gap ="30px";
//button 
button.value ="Stop";
button.style.padding = "20px";
button.style.width = "300px";
button.style.border = "1px solid black";
button.style.textAlign = "center";
// setInterval 






