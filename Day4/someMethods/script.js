let firstID = document.getElementById('first1');
console.log(firstID);

// Checking if this id matches the required class
console.log("Checking if it matches the passed values : " + (firstID.matches(".container1")));

// closest() : Used for checking if that one is closest or inside element or not
console.log("Checking if the closest element matches the one : " + (firstID.closest("#second1")));

// contains() : Checking if the element is not been contained in a particular block or not
let secondID = document.getElementById("para1");
console.log(first1.contains(secondID));