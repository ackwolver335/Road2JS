// Static Methods in JS
/*
    Static Methods : Methods that are used with and called with the help of className only
    Can't be initialized with the object of the class are of this Category.
*/

class student{
    name;
    constructor(name){
        this.name = student.capatilize(name);
        alert("Hello student ! How can I help you ?");
    }

    static capatilize(name){
        return (name.charAt(0).toUpperCase + name.substr(1,name.length));
    }

    checkDetails(){
        console.log("Your name is : " + this.name);
    }
}

let obj1 = new student("ack");
obj1.checkDetails();