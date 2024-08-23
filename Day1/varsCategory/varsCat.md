# 3. Variables Category

Before the introduction of ES6, for defining variables *var* keyword was used declaring any variable in JS and regrading declaring in today's time we uses another keywords like **let** and **const** for declaring variables in Javascript.

## Differences

| **Types** | **Explanation** |
| --------- | --------------- |
| **vars** | *We can change its value and properties from any particular scope and can be redeclared.* |
| **let** | *We can not change its value in same block, {Block Scope} and can't be redeclared.* |
| **const** | *It's value can't be redeclared once it is defined in the program and need to be initialised.* |

### Source Code

```javascript
// var keyword not recommend but example given below
var a = 12;
console.log(a);
a = "String here";                      // due to this not recommended in Modern JS
console.log(a);

// Using let keyword
let New1 = "This is a String and can't be redefined once it is defined";
console.log(New1);

// let New1 = 12;       // Will not work due to which it is used in Modern JS

// Using const keyword
const PI = 3.14;
console.log(PI)l
```