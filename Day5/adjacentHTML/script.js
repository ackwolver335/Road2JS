// Adjacent HTML Concept
let paraBlock = document.getElementsByTagName('div')[0];

// inserting adjancent elements
// Begin Blocks
paraBlock.insertAdjacentHTML('beforebegin',"<div class = 'test1'> Before Begin Block </div>");
paraBlock.insertAdjacentHTML('beforeend',"<div class = 'test2'> Before End Block </div>");

// After Blocks
paraBlock.insertAdjacentHTML('afterbegin',"<div class = 'test2'> <h3> After Begin Block </h3> </div>");
paraBlock.insertAdjacentHTML('afterend',"<div class = 'test2'> <h3> After End Block </h3> </div>");

paraBlock.remove();