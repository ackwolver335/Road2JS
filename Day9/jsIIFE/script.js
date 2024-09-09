/* 
    IIFE : Immediately Invoked Function Expression
*/

// Using a promise here
let p1 = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(23);
        },2000);
    })
};

// let func1 = async () => {
//     let a = await p1();
//     console.log(a);
//     let b = await p1();
//     console.log(b);
//     let c = await p1();
//     console.log(c);
// };

(async () => {
    let a = await p1();
    console.log(a);
    let b = await p1();
    console.log(b);
    let c = await p1();
    console.log(c);
})();