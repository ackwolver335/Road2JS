// Getting Started with Synchronous and Asynchronous programming
// Synchronous Programming

let data1 = prompt("Answer your age here : ");
console.log(data1);

// // Asynchronous Programming
console.log(`The value that your provided is ${data1}`);
setTimeout(function(){
    console.log("This is printed after 2 seconds !");
},2000);

console.log("Data is been coming after 2 seconds below !");

// Callbacks
// Creating a function with name loadLink which takes url
function loadLink(src,callback){
    let script = document.createElement('script');                  // script tag of HTML
    script.src = src;
    
    script.onload = function(){
        console.log("Script is been loaded as : " + src);       
        callback(null,src);                                         // Using the callback here
    }
    
    // Creating a method in case we got any kind of error
    script.onerror = function(){
        console.log("Error in loading Script !");
        callback(new Error("Error Regarding src ! "))
    };

    document.body.appendChild(script);
};

function notification(error,url){
    if(error){
        console.log("Some Error Occured !");
        return
    }
    alert("The Script is been loaded to the Page with url : " + url);
};

let linkScript = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";

// Call the function
loadLink(linkScript,notification);