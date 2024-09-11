// creating a regular expression and working on it
const regx = /very/gi;                                                           // g at the end specifies it globally
let text1 = "Ack is a very very one good boy and very very good one !";
console.log(text1.replace(regx,"VERY"));