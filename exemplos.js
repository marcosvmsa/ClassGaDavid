

document.getElementById('stopButton').onclick = illuminateRed;
document.getElementById('slowButton').onclick = illuminateYellow;
document.getElementById('goButton').onclick = illuminateGreen;
document.getElementById('marcos').onclick = mostrar;


let inputs = from.getElementByteg('input')

function mostrar() {
    let inputs = from.getElementByteg('input')
    document.getElementById('stopButton')
    
}


function illuminateRed() {
clearLights();
document.getElementById('stopLight').style.backgroundColor = "red";
}

function illuminateYellow() {
clearLights();
document.getElementById('slowLight').style.backgroundColor = "yellow";
}

function illuminateGreen() {
clearLights();
document.getElementById('goLight').style.backgroundColor = "green";
}

function clearLights() {
document.getElementById('stopLight').style.backgroundColor = "black";
document.getElementById('slowLight').style.backgroundColor = "black";
document.getElementById('goLight').style.backgroundColor = "black";
}
