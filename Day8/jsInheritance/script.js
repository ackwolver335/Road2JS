// Inheritance and Extends keyword in JS
class HOD{
    canSpeak(){
        console.log("HOD Speaks first and then other !");
    }

    canDecide(){
        console.log("HOD has first priority then others !");
    }
};

class teachers extends HOD{
    canTeach(){
        console.log("Have the right to teach other people !");
    }
};

class students extends teachers{
    canStudy(){
        console.log("Have the right to study !");
    }
}

let studentRavi = new students();

// Now we can access each method from this particular class with the help of this particular class only
studentRavi.canStudy();
studentRavi.canDecide();