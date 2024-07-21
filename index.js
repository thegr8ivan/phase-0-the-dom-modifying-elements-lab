// Remove the <main> element with id 'main'
const main = document.getElementById('main');
main.remove();

// Create a new <h1> element and assign it to the variable 'newHeader'
var newHeader = document.createElement('h1');

// Set the id of the new <h1> element to 'victory'
newHeader.id = 'victory';

// Set the text content of the new <h1> element
const yourName = 'YOUR-NAME'; // Replace 'YOUR-NAME' with your actual name
newHeader.innerHTML = `${yourName} is the champion`;

// Append the newHeader to the body
document.body.appendChild(newHeader);

  