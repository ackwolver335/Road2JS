// Some Other Useful methods of Array
// 1. map() : Used to map the array as per the index, value or array and forms a new array
let arr1 = [23,45,22,30,10,3,4,8];

let newArr1 = arr1.map((value,index,array) => {
    console.log(value,index,array);
    return value * 2;
});

console.log("Initial Array : " + arr1);
console.log("Array after using map() method : " + newArr1);

// 2. filter() : Used for creating a filter and changing the values based on a particular filter
// and return a proper array of these values
let newArr2 = arr1.filter((val) => {
    return val < 40;
});

// 3. reduce() : Used for reducing the value and returns a single value as per the source code passed in its method
let newArr3 = arr1.reduce((val1,val2) => {
    return val1 + val2;
});

console.log("Array after using reduce() method : " + newArr3);