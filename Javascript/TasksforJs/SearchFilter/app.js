let body = document.querySelector('body');
let send = document.getElementById('send');
let itemsBox = document.getElementsByClassName('itemsBox')[0];
let rowBox = document.getElementById('rowBox');

send.addEventListener('click', function(){
    let item = document.createElement('div');
    item.style.background = '#329ea8';
    item.style.height = "80px";
    item.style.width ="150px";
    item.style.margin ="15px";
    item.style.color = "white";
    itemsBox.appendChild(item);

    let ul = document.createElement('ul');
    let li1 = document.createElement('li');
    let li2 = document.createElement('li');
    let li3 = document.createElement('li');
    item.append(ul);
    ul.append(li1); 
    ul.append(li2);
    ul.append(li3);
    li1.style.listStyleType ="none";
    li2.style.listStyleType = "none";
    li3.style.listStyleType = "none";
    let title = document.getElementById('title').value;
    let desc = document.getElementById('desc').value;
    li1.textContent = title;
    li2.textContent = desc.slice(0,15);

    let currentDate = new Date();
    let currentDay = currentDate.getDate();
    let currentMonth = currentDate.getMonth() + 1; 
    let currentYear = currentDate.getFullYear(); 
    li3.textContent = currentDay +" /"+ " /"+ currentMonth +" /"+ currentYear; 
    
    let htmlElements = document.getElementById('htmlElements');
    let remove__text__area = document.getElementById('remove__text--area');
    let htmlList = document.createElement('ul');
    let htmlListItems = document.createElement('li');
    htmlElements.append(htmlList);
    htmlList.append(li);
    htmlListItems.style.listStyleType = "none";
})