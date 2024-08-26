// Array Methods
// 1. toString() : Used for converting an array into String
let char1 = ['a','c','k'];
let sequence1 = char1.toString();

console.log("Initial Array : " + char1);
console.log("After converting into String : " + sequence1);

// 2. join() : Used to join the data elements together with any symbol or String
console.log("Array before using join Method : " + char1);

let joined = char1.join(" | ");
console.log("Array after joining with join() method : " + joined);

// 3. pop() : By default it returns the last element after removing it from the array
// It can also be used for removing a particular element
console.log("Array before using pop() method for removing element : " + char1);

// Removing the last element
char1.pop();
console.log("Array after using the pop() method : " + char1);

// Using to remove a particular element with its index
char1.pop(0);
console.log("Array after removing the first position element using pop(0) is : " + char1);

// 4. push() : Used for adding element by default to the end of the array
console.log("Array before using push() method in it : " + char1);

char1.push('c');
console.log("Array after using push() method is : " + char1);

// 5. shift() : Used for removing element from the Beginning of the Array
console.log("Array before using shift method : " + char1);

char1.shift();
console.log("Array after using shift() method : " + char1);

// 6. unshift() : Used for adding element at the beginning of the Array
console.log("Array before using unshift() method : " + char1);

char1.unshift('A');
console.log("Array after using unshift() method : " + char1);

// 7. delete : Used for deleting an element from the array but the length would not get effected
console.log("Array before using delete method : " + char1);

delete char1[0];
console.log("Array after using delete keyword : " + char1);

// 8. concat() : Used for adding two or more arrays together and return a new array without effecting original one
console.log("Array before using concat method : " + char1);

let char2 = ['w','o','l','e','r'];
let newArray = char1.concat(char2);

console.log("New Array after using concat method : " + newArray);

// 9. sort() : Used for shorting the array on the basis of alphabetical order even in Numerical Values
let new1 = [56,44,12,0,5,33];
console.log("Array before using sort() method : " + new1);

new1.sort();
console.log("Array after using sort() method : " + new1);

// Creating a method for sorting on numerical basis
let compare_num = (a,b) => {
    return a - b;
}

// Using it to compare numerically
new1.sort(compare_num);
console.log("Array after using sort() method with comparison Basis numerically : " + new1);

// 10. reverse() : Used for reversing the values on the basis of original array values as it is !
console.log("Array before using reverse() method : " + char2);

char2.reverse();
console.log("Array after using reverse() method : " + char2);

// 11. splice() : Used for removing and adding element in the array at specific index
console.log("Array before using splice() method : " + new1);

new1.splice(1,2,45,67);
console.log("Array after using splice() method : " + new1);

// 12. slice() : Used for slicing a particular part of the array as per given starting and ending index
let new2 = new1.slice(2,5);
console.log("Array created using slice() method for particular partition : " + new2);