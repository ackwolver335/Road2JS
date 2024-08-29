let paraBlock = document.getElementsByClassName('container')[0].firstElementChild;
paraBlock.className = 'text-dark red-back';

// Removing a particular classList
paraBlock.classList.remove('red-back');

// Adding a particular classList
paraBlock.classList.add('yellow-back');

// Using toggle method for adjacent working of classes
paraBlock.classList.toggle('red-back');

// contains : Used for checking if the class is been contained
if(paraBlock.classList.contains('red-back')){
    alert("Red Background is been enabled !");
}