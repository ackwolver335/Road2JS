// Method Overriding in JS
class Employee{

    constructor(){
        console.log("Employee Class constructor initiated !");
    }

    login(name,id){
        console.log(`Employee with name ${name} and id ${id} loginned successfully !`);
    }

    logout(){
        console.log("Logout Successfully !");
    }

    requestLeaves(leaves){
        console.log(`${leaves} leaves are gaurented successfully !`);
    }
}

// Another class for using overriding method properties
class Programmer extends Employee{

    requestMeal(){
        console.log("Request by the Programmer is permitted !\nYour meal is on the way !");
    }
    
    requestLeaves(leaves){
        // console.log(`${leaves + 1} leaves will be granted with one extra leave !`);
        
        // for using the parent class data from the children class block code
        super.requestLeaves(leaves);
        console.log("One extra leave is been granted !");
    }
}

let e1 = new Employee();
e1.login("Ack Wolver",4843954);
e1.requestLeaves(3);

let p1 = new Programmer();
p1.requestLeaves(5);