import {TelaInicial} from "../models/index.js"
import {symbol} from "../Bd/bd.js"

class PlayerControle{
    static controlButton = false
    static choose = ''
    static selectSymbol(event){
        if(event.target.tagName == "IMG"){
            const li = event.target.id
            PlayerControle.choose = li
            PlayerControle.controlButton = true
            const filter = symbol.filter((el)=>el.nome === li)
            
            TelaInicial.showSymbol(filter[0].img)
            return true
        }
        return false
        
    }
}

export {PlayerControle}