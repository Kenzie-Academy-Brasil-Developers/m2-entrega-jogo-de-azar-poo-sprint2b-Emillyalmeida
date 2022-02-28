import {PlayerControle} from "./player.js"
import{TelaInicial} from "../models/index.js"
import{final} from "../Bd/bd.js"

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
        console.log(mensage)
        const msg = final.filter((el)=>el.nome == mensage)

        TelaInicial.vencedor(msg)

    }
}
export {Winner}