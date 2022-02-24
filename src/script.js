const telaPrincipal = document.getElementById('principal')

export{telaPrincipal}

import { TelaInicial } from "./models/index.js"
TelaInicial.createHtml()

 const iniciarGame = document.getElementById('btnIniciar')
 iniciarGame.addEventListener('click',TelaInicial.iniciarGame)

 const select = document.getElementById("escolha")
 select.addEventListener("click",)