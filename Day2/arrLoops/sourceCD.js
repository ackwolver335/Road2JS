// Loops and Array's Relation
// Creating an Array First
let arr1 = [1,22,3,45];

// Using Simple For Loop for printing elements
console.log("Using For Loop here : \n");

for(let i = 0;i < arr1.length;i++){
    console.log(arr1[i]);
}

// Doing the same thing with forEach Loop
console.log("\nUsing forEach Loop : ");
arr1.forEach((ele) => {
    console.log(ele * 2);
});

// Array.from : Used for converting particular value or mostly of HTML Collection in Projects
let str1 = "Ack Wolver";
let newArr = Array.from(str1);
console.log("Array created from String : " + newArr);

// Using forOf Loop for printing the element of the Array
console.log("\nPrinting the Values using for of Loop : \n");
for(let i of newArr){
    console.log(i);
}

// Using for In Loop for printing values
console.log("\nPrinting values using for In Loop : \n");
for(let item in arr1){
    console.log(arr1[item]);
}