import {PlayerControle} from "./player.js"
import{TelaInicial} from "../models/index.js"

class Winner {
    static isWinner(adversario){
        let mensage = ""
        if(adversario === PlayerControle.choose){
            mensage = 'Empate'
        }
        else if(adversario=="pedra"&& PlayerControle.choose == "tesoura"){
            mensage = "Adversario"
        }
        else if(adversario=="papel"&& PlayerControle.choose == "pedra"){
            mensage = "Adversario"
        }
        else if(adversario=="tesoura"&& PlayerControle.choose == "papel"){
            mensage = "Adversario"
        }
        else{
            mensage = "Player"
        }
        console.log(adversario)
        console.log(PlayerControle.choose)
        TelaInicial.vencedor(mensage)

    }
}
export {Winner}