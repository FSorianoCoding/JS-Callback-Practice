function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

//Refractering key buttons into move function 
    //adding handleDirection Change callback as a passthrough, add as function down in lines 56 and 63
    function moveWithArrowKeys(left, bottom, handleDirectionChange){  
    let direction = null;
    let x = left;
    let y = bottom;

    element.style.left = x + 'px'
    element.style.bottom = y + 'px'

    function moveCharacter(){
        if(direction === 'west'){
            x-=1
        }
        if(direction === 'north'){
            y+=1
        }
        if(direction === 'east'){
            x+=1
        }
        if(direction === 'south'){
            y-=1
        }
        element.style.left = x +'px'
        element.style.bottom = y + 'px'
    }

    setInterval(moveCharacter, 1)

    //Function to get the character to move pressing arrow keys
    document.addEventListener('keydown', function(e){
        if(e.repeat) return;

        if(e.key === 'ArrowLeft'){
            direction = 'west'
        }
        if(e.key === 'ArrowUp'){
            direction = 'north'
        }
        if(e.key === 'ArrowRight'){
            direction = 'east'
        }
        if(e.key === 'ArrowDown'){
            direction = 'south'
        }
        // adding callback where we change the direction variable from line 11
        // adding "direction" as the passthrough argument to work with handleDirectionChange defined in the index
        handleDirectionChange(direction)  
    })

    document.addEventListener('keyup', function(e){
        direction = null
        // adding callback where we stop changing direction variable from line 11
        // adding "direction" as the passthrough argument to work with handleDirectionChange defined in the index
        handleDirectionChange(direction)  
    })

    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}