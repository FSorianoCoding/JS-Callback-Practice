const inventory = newInventory()
move(inventory).to(0, 0)

const character = newImage('assets/green-character/static.gif')

// Creating and wrapping our 'character' direction in a function 
// to pass as a callback in the .withArrowKeys function below so that it passes through the move code  

function handleDirectionChange(direction){
    //Adding code for character moving with different gifs
    if(direction === null){
        character.src = 'assets/green-character/static.gif'
    }
    if(direction === 'west'){
        character.src = 'assets/green-character/west.gif'
    }
    if(direction === 'north'){
        character.src = 'assets/green-character/north.gif'
    }
    if(direction === 'east'){
        character.src = 'assets/green-character/east.gif'
    }
    if(direction === 'south'){
        character.src = 'assets/green-character/south.gif'
    }
}

// Passing handleDirectionChange as call back into .withArrowKeys to handle moving code.
move(character).withArrowKeys(100, 250, handleDirectionChange)  //changed from .to(100,250) to .withArrowKeys(100,250)

// Adding code for direction change of greenCharacter
// let direction = null;
// let x = 100;
// let y = 250;

// setInterval (function(){
//     if (direction === 'west'){
//         x = x - 1
//     }
//     if(direction === 'north'){
//         y = y + 1
//     }
//     if(direction === 'east'){
//         x = x + 1
//     }
//     if(direction === 'south'){
//         y = y - 1
//     }
//     character.style.left = x + 'px'
//     character.style.bottom = y + 'px'
// }, 1)


//Function to get the character to move pressing arrow keys
// document.addEventListener('keydown', function(e){

//     // "e" is an object containing details about the event that fired.
//     if(e.repeat) return;

//     if(e.key === 'ArrowLeft'){
//         direction = 'west'
//     }
//     if(e.key === 'ArrowUp'){
//         direction = 'north'
//     }
//     if(e.key === 'ArrowRight'){
//         direction = 'east'
//     }
//     if(e.key === 'ArrowDown'){
//         direction = 'south'
//     }
// })

//Function to get character to stop after releasing the keys
// document.addEventListener('keyup', function(e){
//     direction = null
// })

// setInterval(moveCharacter, 1)  

//end direction code 


move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)