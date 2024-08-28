// Chapter 7 - Practice Set Q1.
document.getElementsByTagName('nav')[0].firstElementChild.style.color = 'red';

// Chapter 7 - Practice Set Q3.
document.getElementsByTagName('nav')[0].firstElementChild.style.color = 'green';
document.getElementsByTagName('nav')[0].lastElementChild.style.color = 'green';

// Chapter 7 - Practice Set Q4.
Array.from(document.getElementsByTagName("li")).forEach((ele)=> {
    ele.style.background = "cyan";
    ele.style.color = "red";
})