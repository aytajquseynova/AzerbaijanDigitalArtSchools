let hamburgerMenu = document.getElementById('hamburger-menu');
hamburgerMenu.addEventListener('click', function(){
    let navbarMenuListItems = document.querySelectorAll('#navbar-menu-list-items');   
    let navbarMenu = document.getElementById('navbar-menu');
    navbarMenu.style.flexDirection ="column";
    let ul = document.getElementById('navbar-menu-list');
    ul.style.flexDirection ='column';
    ul.style.display ="block";
    let navbarMenuItems = document.getElementById('navbar-menu-items');
    navbarMenuItems.style.margin = "0px";
})