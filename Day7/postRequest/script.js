// Post Request in fetch API
const createOne = async (toOne) => {
    let opt = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(toOne),
    };


    // Using fetch method for using it
    let dataPromise = await fetch("https://jsonplaceholder.typicode.com/posts", opt);
    let promiseResponse = await dataPromise.json();
    return promiseResponse;
}

const getTdo = async (id) => {
    let p1 = await fetch('https://jsonplaceholder.typicode.com/posts/' + 55);
    let responseP1 = await p1.json();
    return responseP1;
}

const mFunc = async () => {
    let toOne = {
        "id" : 101,
        "userId" : 10,
        title: "Ack Wolver",
        body: "Normal", 
    }

    let dataRetrieved = await createOne(toOne);
    console.log(dataRetrieved);
    console.log(await getTdo(55));
}

mFunc();