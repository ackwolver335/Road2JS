// Fetch API

let dataLink = fetch("https://goweather.herokuapp.com/weather/Ny");
dataLink.then((response) => {

    // Initial Values that we get in first stage
    console.log(response.status);
    console.log(response.ok);
    console.log(response.headers);

    return response.json();
}).then((value2) => {
    console.log(value2);
})

// AJAX : Asynchronous Javascript XML
// When we used to get the response, it is considered and found to be a 2-step process.

/*
    let response = fetch("url-link",{
        headers : {
            Authentication : "secret";
        }
        });
*/