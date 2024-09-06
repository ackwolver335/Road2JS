// Concept of Local Storage
// Setting my name in local Storage of Browser
localStorage.setItem("name","Ack Wolver");

// Creating another one that would be working on user based input
let userKey = prompt("Enter your key name to be set in local storage : ");
let userValue = prompt("Enter your value name to be set in local storage : ");

// 1. setItem() : Used for setting the key value pair to the local storage or its value
localStorage.setItem(userKey,userValue);
console.log(`Your key with name ${userKey} with its value : ${userValue} is been set to local storage !`);

// 2. getItem() : Used for retrieving the value from the local storage
console.log(localStorage.getItem("name"));

// 3. removeItem() : Used for removing any particular key if there is no further use exits of that one !
localStorage.removeItem(userKey);

// 4. clear() : Used for clearing up the local storage when it is not any more required
// localStorage.clear();

// 5. length : Used for getting the length of local storage as per the items available
console.log(localStorage.length);

// 6. key(index) : Used for getting the key name as per the index similar to the way we work with arrays
console.log(localStorage.key(0));

/*
    localStorage works similar to an object as we can get and set the values as per we want.
    localStorage.one = 12;
    alert(localStorage.one);
    delete localStorage.one

    We can also use the JSON methods for using them in localStorage : 
    1. JSON.Stringify(object) : Used for converting objects to JSON Strings.
    2. JSON.parse(object) : Used for converting string to Objects (But it should/must be a valid JSON).
*/