// Exercise 6 : Create a Todo-List together with the UI
// Your list need to store the user's data in local Storage and get work with it

let submitBtn = document.getElementById("submitbtn");
let deleteBtn = document.getElementById("deletebtn");

// data ids of the title and description values
let todoTitle = document.getElementById("title");
let todoDesc = document.getElementById("description");
let mainTodo = document.getElementById("todo");

submitBtn.addEventListener("click",(event) => {
    
    // Changing the default behaviour of the page
    event.preventDefault();

    // setting up the data in the todolist with the help of localstorage
    localStorage.setItem("todo",JSON.stringify([todoTitle.value,todoDesc.value]));
    
    console.log(event);

    // Adding the todo data to the HTML Page now
    mainTodo.innerHTML = `
    <h1> ${todoTitle.value} </h1>
    <p> ${todoDesc.value} </p>
    `

    // Removing values of form from the page
    todoTitle.value = "";
    todoDesc.value = "";
});

deleteBtn.addEventListener("click",(event) => {
    event.preventDefault();
    console.log("Removing items from Todo List !");
    localStorage.removeItem("todo");

    // Removing the html from the page also
    mainTodo.innerHTML = "";
});