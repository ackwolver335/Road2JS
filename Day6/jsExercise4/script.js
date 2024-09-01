// Getting up the current date time here

// Getting further details

setInterval(function(){
    let dateReal = new Date();
    let properDate = `${dateReal.getHours()} : ${dateReal.getMinutes()} : ${dateReal.getSeconds()}`;
    document.getElementsByTagName('span')[0].innerHTML = properDate;
},500);