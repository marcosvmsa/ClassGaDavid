// ---- tela inicial ---------------------------------------------------
//--Alinhando a pagina no centro 
const body = document.getElementById("body");
    body.style.textAlign = 'center';
//--Pegando a tela 1 pelo Id 
const tela1 = document.getElementById("tela1");
    
//-- Criando funcionalidade para o botão 
const buttonId = document.getElementById("buttonId");
    buttonId.addEventListener('click', nextTela)
//-- apagando segunda tela 
const tela2 = document.getElementById("tela2");
tela2.style.display = 'none';
//-- apagando segunda tela 
let posicaoDaTela = 'tela1' 
//-- pegando valor do "Wallet" 
const spaceWallet = document.getElementById("spaceWallet");
//-- botao work
const butonWork = document.getElementById("butonWork");
//--  
const startJob = document.getElementById("startJob");
// --- segunda tela ----------------------------------------------------
function nextTela() {
    body.style.background = 'url("/js-landscape/3D Printed Denture Bit Holder With Magnets - Imgur.jpg")'
    tela1.style.display = 'none';
    tela2.style.display = 'block';
    let recivName = document.getElementById('input').value;
    document.getElementById('spaceName').innerHTML = recivName;
    posicaoDaTela = 'tela2';
    butonWork.addEventListener('click', jobAction)
}
// --- acao do job ----------------------------------------------------
function jobAction() {
    if(posicaoDaTela === 'tela2'){
        // body.style.background = 'url("/js-landscape/3D Printed Denture Bit Holder With Magnets - Imgur.jpg")' 
        tela1.style.display = 'none';
        tela2.style.display = 'none';
    }else if(posicaoDaTela === 'tela3'){
         body.style.background = 'url("/js-landscape/3D Printed Denture Bit Holder With Magnets - Imgur.jpg")' 
         tela1.style.display = 'none';
         tela2.style.display = 'none';
     }
} 

