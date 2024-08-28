// Getting the first child of the page
console.log(document.body.firstChild);

// Getting the last child
console.log(document.body.lastChild);

// Getting all the child nodes
console.log(document.body.childNodes);

/*
    Condition written below is always true :
    body.childNodes[0] == body.firstChild

    1. First Way to access the first child of the body
    body.childNodes[0] : As here the child is been retreived via the Node List of all nodes

    2. Second Way to access the first child of the body
    body.firstChild : Here the first child is been accessed directly.

    // Similar reason for accessing the last child of the element
    body.childNodes[body.childNodes.length - 1] == body.lastChild

    // For checking if there is any child node
    body.hasChildNodes() : Returns true if exist otherwise false.
*/

// Converting the Nodes List of child nodes to an array
let nodesArray = Array.from(document.body.childNodes);
console.log(nodesArray);