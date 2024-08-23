# 4. Data Types in JS

In general we can consider them as the category or range for storing different categories of data into the containers or variables in JS Programs. And before categories we further have different of its categories. In other words, the category of value hold by any variable or container.

## Major Categories

| **Types** | **Explanation** |
| --------- | --------------- |
| **Primitive** | *These are considered as **Fundamental** which are built-in in it.* |
| **Objects** | *These are understood as the pair of key and value in which key can be a string or name, whereas the value is defined as a data type.* |

## Minor Category (Primitive)

| **Types** | **Explanation** |
| --------- | --------------- |
| **Number** | *Data type used for storing general numerical value.* |
| **Null** | *Data type used for storing null value and keyword that is used is **null**.* |
| **Boolean** | *Data type used for storing **true** or **false** boolean values for specific purpose.* |
| **BigInt** | *Data type used for storing big or large integer values.* |
| **String** | *Data type used for storing Sequence of characters in a particular variable.* |
| **Symbol** | *Data type used for storing or creating a user-defined or built-in symbol in variables.* |
| **Undefined** | *Data type used for storing undefined values in JS Variables.* |

### Source Code

```javascript
// Primitive Data Types
let a = null;
let b = 23;
let c = false;        // Can also store true value {Boolean}

let d  = BigInt("3454");
let string1 = "this is a string";
let symb1 = Symbol("This is a symbol");
let un1 = undefined;
```

## Non-Primtive Objects

These are considered or used in a way, the same way we generally used for storing values in **Python Dictionary**, so it is not a dictionary but used to store the data in key-value pairs in JS Programs or JS Variables.

### Source Code

```javascript
// Object Declaration
const obj1 = {
  "new1" : false,
  "new2" : 23,
  "third" : undefined
};
```