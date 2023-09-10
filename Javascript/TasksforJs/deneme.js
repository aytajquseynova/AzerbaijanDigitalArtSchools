let body = document.querySelector("body");
let div = document.createElement("div");
let p = document.createElement("p");
div.prepend("Some text", p);
body.prepend(div);