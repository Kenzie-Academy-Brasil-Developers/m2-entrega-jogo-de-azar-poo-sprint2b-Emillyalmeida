import {symbol} from "../Bd/bd.js"
import {Winner} from "./winner.js"

class Adversario {
    static ramdomNum(){
        const result = document.getElementById('result')
        const random = Math.floor(Math.random()*3)
        
        const img = symbol[random].img

        const nome = symbol[random].nome

        result.classList.add(img)

        setTimeout(()=>{
            result.classList.remove(img)
        },2000)

        Winner.isWinner(nome)
        
    }
}

export{Adversario}