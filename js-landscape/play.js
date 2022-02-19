// const {Player} = require("./player.js");
// const {Landscaping} = require("./field.js");


document.getElementById('buttonId').onclick = resultado;

function resultado(){    
    let pega = document.getElementById('input').value;
    document.getElementById('cname').innerHTML = pega;
   
}


// const play = Function (player , field){

// }

// const criarPlayer = new Player(`João`, `teeth`, 0);
// const firstPlay = new Landscaping(`Fase 1`)
// firstPlay.addPlayer(criarPlayer)
// console.log(firstPlay.players)









// fight() {
//   const [gladiator1, gladiator2] = this.gladiators;
//   const [weapon1, weapon2] = [gladiator1.weapon, gladiator2.weapon];
  
  
  
//   if(weapon1 === "spear") {
//     if (weapon2 === "spear") {
//       this.gladiators = [];
//     } else if (weapon2 === "club") {
//       this.gladiators = [gladiator1];
//     } else if (weapon2 === "trident") {
//       this.gladiators = [gladiator2];
//     }
//   } else if (weapon1 === "club") {
//     if (weapon2 === "spear") {
//       this.gladiators = [gladiator2];
//     } else if (weapon2 === "club") {
//       this.gladiators = [];
//     } else if (weapon2 === "trident") {
//       this.gladiators = [gladiator1];
//     }
//   } else if (weapon1 === "trident") {
//     if (weapon2 === "spear") {
//       this.gladiators = [gladiator1];
//     } else if (weapon2 === "club") {
//       this.gladiators = [gladiator2];
//     } else if (weapon2 === "trident") {
//       this.gladiators = [];
//     }
//   }
//   1V9%Dd.+
  
//   this.maximusAlwaysWins(gladiator1, gladiator2); //bonus this bonus is first but then switch the order
//   this.thumbsUpOrDown(gladiator1, gladiator2); //bonus
// }
// /* 
// -criar o jogador - done
// -criar o campo - done 
// -comecar o trabalho (fazer para que possa se repetir mais de uma vez ) -
// -quando chegar no valor de 5$ mandar mensagem "voce ja pode comprar uma tesoura"
// -comprar tessoura.
// -trabalhar com a tesoura (fazer para que possa se repetir mais de uma vez )
// -quando chegar no valor de 25$ mandar mensagem "voce ja pode comprar old-timey"
// -

// */