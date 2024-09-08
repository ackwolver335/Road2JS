// Getters, Setters and instanceof() Operators in OOPs
class student{
    constructor(name){
        this._name = name;
    }

    study(){
        console.log("The Student is studying : " + this._name);
    }

    get name(){
        return this._name;
    }

    set name(newName){
        this._newName = newName;
    }
}

class teacher extends student{
    teaches(){
        console.log("Used to teaches the students !");
    }
}

let obj1 = new student("Ack");
obj1.study();

// Changing the name now
obj1._name = "Abhay";

// Getters in JS
console.log(`Name that I passed to this object is : ${obj1._name}`);

let obj2 = new teacher();
obj2.teaches();

// Instanceof Operator
console.log(`Checking if obj1 is the instanceof class : ${obj1 instanceof student}`);
console.log(`Checking if obj2 is the instanceof class : ${obj2 instanceof student}`);