//selectors for body and button
const body = document.querySelector('body');
const colourBtn = document.querySelector('.colourBtn');
const hexNumbers = [01,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const hex = document.querySelector('.colour');

/* The previous colour generator code 
array storing the colours 
const colours = ['red', 'green', 'yellow', 'blue']; 
*/

//adding an event listener for clicking the button
colourBtn.addEventListener('click', getColour);

//function to change the colour on click 
function getColour (){
    
    let hexColour = '#';

    //loops to make the 6 digit hex colour code 
    for (let index = 0; index < 6; index++) {
        const random = Math.floor(Math.random()*hexNumbers.length);

        //adds the # in front of the code to generate colour
        hexColour += hexNumbers[random];
        
    }

    //sets the background colour
    body.style.backgroundColor = hexColour;

    //changes the HTML to say what the hex code is 
    hex.innerHTML = hexColour;
    
}

