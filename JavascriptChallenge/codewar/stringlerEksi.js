let text = String(prompt('metn daxil edin'));
let str = '';
for (let i = text.length - 1; i >= 0; i--) {
    str += text[i];

}
console.log(str);