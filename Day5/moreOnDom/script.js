console.log(document.getElementsByTagName('p')[0]);

// for getting its properties
console.dir(document.getElementsByTagName('p')[0]);

// Using Node Name
console.log(document.body.firstChild.nodeName);
console.log(document.body.firstElementChild.nodeName);

// Using TagName
console.log(document.getElementsByTagName('div')[0].firstElementChild.tagName);

// Using innerHTML and outerHTML
let para1 = document.getElementsByTagName('p')[0].innerHTML;
console.log(para1);

// for outerHTML
let para2 = document.getElementsByTagName('p')[0].outerHTML;
console.log(para2);

// first Element child
console.log(document.body.firstElementChild);

// Getting the text content
console.log(document.body.textContent);

// Showing the hidden content
document.getElementsByTagName('p')[1].hidden = false;