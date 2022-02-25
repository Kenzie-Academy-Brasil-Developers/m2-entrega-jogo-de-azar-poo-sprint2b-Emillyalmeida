import {TelaInicial} from "../models/index.js"
import {symbol} from "../Bd/bd.js"

class PlayerControle{
    static choose = ""
    static selectSymbol(event){
        const li = event.target.id
        this.choose = li
        const filter = symbol.filter((el)=>el.nome === li)
        
        TelaInicial.showSymbol(filter[0].img)
    }
}

export {PlayerControle}