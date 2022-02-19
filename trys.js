
// let titleElement = document.getElementById("info").value;
// console.log(`titleElement1`)
//<h1 id="buttonId" class="button1">buy</h1>

document.getElementById('buttonId').onclick = resultado;

function resultado(){    
    let pega = document.getElementById('info').value;
    document.getElementById("stopButton").innerHTML = pega
}
// document.getElementById('stopButton').onclick = illuminateRed;
// document.getElementById('slowButton').onclick = illuminateYellow;
// document.getElementById('marcos').onclick = mostrar;




// titleElement.innerHTML = "Hello!"


