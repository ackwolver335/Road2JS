// Getting the Value accessed from the random choices
// creating array of values
const choices = ['S','W','G'];

let choice_method = () => {
    const get_index = Math.floor(Math.random() * choices.length);
    return choices[get_index];
};

