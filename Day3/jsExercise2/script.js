
// User's Choice
const val1 = ['S','W','G'];

// Getting a random choice
let choice = () => {
    let choice1 = Math.floor((Math.random()) * 3);
    return val1[choice1];
}

let chances = 0;
let score = 10;

while(chances < 10){

    let userChoice = prompt("Enter from 'S' | 'W' | 'G' : ");
    let comptr_choice = choice();

    if(userChoice == 'W' && comptr_choice == 'S'){
        score--;
        alert("You Lose !");
    }

    else if(userChoice == 'S' && comptr_choice == 'G'){
        score--;
        alert('You Lose !');
    }

    else if(userChoice == 'G' && comptr_choice == 'W'){
        score--;
        alert('You Lose !');
    }

    else if(userChoice == comptr_choice){
        alert('Draw !');
    }

    else{
        if(score < 10){
            score++;
        }
        alert('You Won !');
    }

    chances++;
}

console.log("You score is : " + score);