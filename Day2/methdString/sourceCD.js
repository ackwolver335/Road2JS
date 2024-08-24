// String Methods
// 1. length keyword : Used for getting the Length of the String (Property)
let str1 = "Ack Wolver";
console.log("Getting length of str1 " + str1 + " is : " + str1.length);

// 2. toUpperCase() : Converting all the letters to UpperCase in the String
console.log("The String in UpperCase is : " + str1.toUpperCase());

// 3. toLowerCase() : Converting all the letters to LowerCase in String
console.log("The String in LowerCase is : " + str1.toLowerCase());

// 4. slice() : Used for getting the partition of string from specific index.
console.log("The Middle Part of the String is : " + str1.slice(2,5))
console.log("The String till end after leaving some characters is : " + str1.slice(3));

// 5. replace() : Used for replacing a particular part of the String with some other characters
console.log("Replacing the original String LastName : "  + str1 + " will be shown as : " + str1.replace("Wolver","Chaudhary"));

// 6. concat() : Used for adding additional string to the initial string to it.
let college = "Maharaja Surjamal Institute";
console.log(str1.concat(" is a student at ",college));

// 7. trim() : Used for removing unnecessary space from the initial and ending side of the String
let space1 = "        First     ";
console.log("Initial String is : " + space1);
console.log("String after removing spaces using trim method : " + space1.trim());

// QuickQuiz : Print each letter of the String or name using for Loop
for(let i = 0;i < str1.length;i++){
    console.log("Letter at position" + (i + 1) + " in the String is : " + str1[i]);
}