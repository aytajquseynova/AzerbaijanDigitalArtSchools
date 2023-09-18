let slider_img = document.querySelector('.slider-img');
let images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
let i = 0;

let prevButton = document.getElementById('prev');
prevButton.addEventListener('click', function () {
    i--; 
    if (i < 0) {
        i = images.length - 1   ; 
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
