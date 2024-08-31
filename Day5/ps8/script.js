// Practice Set 8 Initiated
// Q3. Repeating Question 2 with the help of Event Listeners

// Getting the data tags first
document.getElementsByClassName('book-marks')[0].addEventListener('click',function(){
    let url = "https://www.github.com";
    window.location = url;
    window.focus();
});

// Repeating the one for Remove Background Page
document.getElementsByClassName('book-marks')[1].addEventListener('click',function(){
    let url = "https://www.remove.bg";
    window.location = url;
    window.focus();
});

// Q4. Continue taking the data from a site in every 5 second
// Ignoring this Question due to untold concept of async await.

// Q5. Create a blinking light of changing background like bulb on toggle
setInterval(async function(){
    document.getElementsByClassName("bright")[0].classList.toggle("changeEffect");
},800);