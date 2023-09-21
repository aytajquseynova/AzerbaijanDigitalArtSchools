let hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', function(){
    let x = document.getElementById('x');
    x.style.display = "block";
    x.style.color = "#ff4500";
    hamburger.style.display ="none";
    let items = document.getElementById('items');
    items.style.display= "block";
    items.style.margin ="0px";
    let ul = document.getElementById('list');
    ul.style.gap ="30px";
    ul.style.marginLeft ="0px";
    ul.style.flexDirection ="column";
    let navbarMenu = document.getElementById('navbarMenu');
    navbarMenu.style.flexDirection ="column";
    navbarMenu.style.gap = "5px";
    let logo = document.getElementById('logo');
    logo.style.marginLeft ="10px";
    logo.style.marginBottom ="30px";
    x.addEventListener('click', function(){
        hamburger.style.display ="block";
        items.style.display ="none";
        x.style.display ="none";
    })
})