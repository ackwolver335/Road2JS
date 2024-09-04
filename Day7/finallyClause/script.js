// Using the finally Clause
// Creating a Try Catch Block and its statements

try{
    console.log(trials);
    console.log("There is no error in the Program !");
} catch(err){
    console.log("Here we found an error !");
    // console.log(name1);
} finally{
    console.log("This will surely executed every time !");
}

// Code after this will not be executed if we'll not use the finally clause
// Creating a method for running it with the use of return statements

const func1 = () => {
    try{
        // console.log(trials);
        console.log("There is no error in the Program !");
        return
    } catch(err){
        console.log("Here we found an error !");
        console.log(name2);
    } finally{
        console.log("This will surely executed every time !");
    }
}

func1();