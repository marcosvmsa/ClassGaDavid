// const {Player} = require("./player.js");



class Landscaping {
    constructor(name){
        this.name = name;
        this.players = [];
    }
    addPlayer(player){
        this.players.push(player)
    }
    
}

// module.exports = {
//     Landscaping
//   }
// const firstPlay = new Landscaping(`Fase 1`)
// console.log(firstPlay.players)

// const criarPlayer = new Player(`João`, `teeth`, 0);
// const firstPlay = new Landscaping(`Fase 1`)
// firstPlay.addPlayer(criarPlayer)
// console.log(firstPlay.players)




// console.log(`Landscaper: ${player.name} can use teeth to cut grass`)