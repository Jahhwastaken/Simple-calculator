
const value = document.getElementById('display')

function addToDisplay(value){
    display.value += value;
}
function clearDisplay() {
    display.value = '';
}
function calculate(){
    try { display.value = eval(display.value)
        
    } catch (error) { display.value = 'error'
        
    } 
     }  
