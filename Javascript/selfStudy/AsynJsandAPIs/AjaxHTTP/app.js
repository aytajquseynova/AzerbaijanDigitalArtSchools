// api bir servisdir ve backend proqramlama dili ile gelistirilmisdir

// xml, json bax

const request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.com/v3.1/name/turkey') // get bilgi alir
request.send();

// async

request.addEventListener('load', function(){
    const data = JSON.parse(this.responseText);
    console.log(data[0]);
    console.log(typeof data);
    setCountry(data[0]);
    // string to json
})

function setCountry(data){
    
}