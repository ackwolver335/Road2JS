// Concept of Session Storage
// Used very less than localStorage as used only in a particular storage
// gets vanishsed when page is been opened in new tab and till a particular session.

console.log(sessionStorage);

// 1. setItem() : Used for setting up an item regarding usage and working of data
sessionStorage.setItem("name","Ack Wolver");

// 2. getItem() : Used for getting an item with the help of its key name.
console.log(sessionStorage.getItem("name"));

// 3. removeItem() : Used for removing a particular item on the basis of provided key name.
sessionStorage.setItem("new1","firstOne");
sessionStorage.removeItem("new1");

// 4. clear() : Used for clearing all the key : value pair from the current session

// Storage Events
window.onstorage = (e) => {
    alert("Data Updated !");
    console.log(e);
}