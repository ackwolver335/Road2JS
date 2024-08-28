// Getting the first element child or table
let table = document.body.firstElementChild.firstElementChild;

console.log(table);

// getting the rows of table
console.log(table.rows);
console.log(table.caption);                 // Captions

/*
    In the similar way we can access the thead, tbody together by their properties.

    Some Other Details : 
    1. tr.cells : Returns the collection of td and th.
    2. tr.sectionRowIndex : Returns the index of tr inside enclosing element.
    3. tr.rowIndex : Returns the index of the rows that is starting from 0.

    4. tr.cellIndex : Returns the number of cell index inside enclosing <tr>
*/

console.log(table.tBodies);