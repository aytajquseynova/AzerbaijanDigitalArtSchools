let body = document.querySelector('body');
let click = document.getElementById('click');
click.addEventListener('click', function(){
    body.style.backgroundColor = "#b24d8b";
    body.style.backgroundColor = "rgba(255,0,255,0.3)"
    let modalBox = document.getElementById('modalBox');
    modalBox.style.display ="block";
    click.style.display ="none";
    let x = document.getElementById('x');
    x.addEventListener('click', function(){
        modalBox.style.display ="none";
        body.style.backgroundColor ="white";
        body.style.opacity ="1";
    })
})

let slider_img = document.querySelector('.slider-img');
let images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
let i = 0;

let prevButton = document.getElementById('prev');
prevButton.addEventListener('click', function () {
    i--;
    if (i < 0) {
        i = images.length - 1;
    }
    setImg();
});

let nextButton = document.getElementById('next');
nextButton.addEventListener('click', function () {
    i++;
    if (i >= images.length) {
        i = 0;
    }
    setImg();
});

function setImg() {
    return slider_img.setAttribute('src', "images/" + images[i]);

}
