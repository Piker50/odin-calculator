const mainContainer = document.createElement('div');
mainContainer.setAttribute("id","mainContainer");

const buttonContainer = document.createElement('div');
buttonContainer.setAttribute("id","buttonContainer");
buttonContainer.textContent = 'buttonContainer';

const screen = document.createElement('div');
screen.setAttribute("id","screen");
screen.textContent = 'screen';

document.body.appendChild(mainContainer);
mainContainer.appendChild(screen);
mainContainer.appendChild(buttonContainer);

let number1 = 0;
let number2 = 0;

function addition() {
	//add numbers
}

function subtraction() {
	//minus numbers
}

function division() {
	//divide numbers
}

function backspace() {
	//deletes number
}

function removeNumbers() {
	//delete all numbers
}
