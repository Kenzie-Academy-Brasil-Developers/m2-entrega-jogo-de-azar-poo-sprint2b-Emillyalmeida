import {symbol} from "../Bd/bd.js"
import {Winner} from "./winner.js"
import{PlayerControle} from "./player.js"

class Adversario {
    static ramdomNum(){
         if(PlayerControle.choose == ''){
             alert("escolha seu simbolo")
             return true
         }else{
        const result = document.getElementById('result')
        const random = Math.floor(Math.random()*3)
        
        const img = symbol[random].img

        const nome = symbol[random].nome

        result.innerHTML=''
        result.innerHTML=`
            <li><img src="${img}"></li>
        `

         setTimeout(()=>{
             result.classList.remove(img)
             Winner.isWinner(nome)
         },2000)
     }

        }
        
}

export{Adversario}