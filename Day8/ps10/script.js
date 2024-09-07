// Chapter 10 - Practice Set
// Q1. Use a free API from the Internet and feed your app some data.
let url = "https://dev.to/api/articles";

// fetching the data
let dataProm = fetch(url);

dataProm.then((val) => {
    return val.json();
}).then((val) => {
    // console.log(val);
    let dataHTML = '';

    // Let's print all the data one by one
    for(data in val){
        console.log(val[data]);

        dataHTML += `
        <div class="card" style="width: 18rem;">
            <img src = "${val[data].cover_image}" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title"> ${val[data].title}</h5>
              <p class="card-text"> ${val[data].description} </p>
              <a href="${val[data].canonical_url}" class="btn btn-primary"> Visit Canonical </a>
            </div>
        </div>
        `
    }
    document.getElementsByClassName("container")[0].innerHTML = dataHTML;
})

// Practice Set - Q2.
// Create a note saving app that would be saved in the local storage of the Browser
let note1 = prompt("Enter your note : ");
let noteCount = 0;

localStorage.setItem(`Note : ${noteCount}`,note1);
noteCount++;

// Practice Set - Q3.
let value = prompt("Enter your note : ");
if(value){
    localStorage.setItem(`Note : ${noteCount}`,value);
    alert(localStorage.getItem(`Note : ${noteCount}`));
}

// Practice Set - Q4.
// delete the note in the previous question
let confirmationNote = confirm("If you want to delete your note : ");
if(confirmationNote){
    localStorage.removeItem(`Note : ${noteCount}`);
}