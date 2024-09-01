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
loadLink(linkScript, function notification(){
    function notification(error,url){
        if(error){
            console.log("Some Error Occured !");
            return
        }
        alert("The Script is been loaded to the Page with url : " + url);
        function notification(error,url){
            if(error){
                console.log("Some Error Occured !");
                return
            }
            alert("The Script is been loaded to the Page with url : " + url);
            function notification(error,url){
                if(error){
                    console.log("Some Error Occured !");
                    return
                }
                alert("The Script is been loaded to the Page with url : " + url);
            };
        };
    };
});

// Callback Hell
// Pyramid of Doom another Problem of Callbacks