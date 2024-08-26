// Creating an Array
let data1 = [32,34,5,34,89,"This is some String",false];

// Accessing the Values in Arrays
console.log("Array's First Element : " + data1[0]);
console.log("Array's Second Element : " + data1[1]);
console.log("Array's Third Element : " + data1[2]);

// Length of the Array
console.log("The Length of the Array is : " + data1.length);

// Adding element to the Array
data1[7] = 34;
console.log("The New Value of the array is : " + data1[7]);

// Changing the Value of the Array
console.log("The Value of Array before changing : " + data1);
data1[0] = 55;

console.log("The Value of Array after changing : " + data1);

// Showing the typeof this array
console.log("The Type of Array is : " + (typeof data1));

// QuickQuiz - Print all the Element of the array using for loop
for(let i = 0;i < data1.length;i++){
    console.log(`The Element of Array at ${i} position is : ${data1[i]}`);
}