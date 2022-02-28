import {telaPrincipal} from "../script.js"
import{symbol,final} from "../Bd/bd.js"
import{PlayerControle} from "../controller/player.js"
import{Adversario} from "../controller/adversary.js"

class TelaInicial{

    static btnPlay = ""
    static select = ""

    static createHtml(){
        telaPrincipal.innerHTML = `
        <h2>Como jogar</h2>
        <p>Voce de escolher entre pedra, papel ou tesoura. E seu adversario ira fazer o mesmo.</p>
        <p>Sempre que uma pessoa colocar um símbolo mais fraco, essa pessoa perderá a disputa.</p>
        <p>Ganha quem mostrar o objeto mais forte.Se os simbolos forem iguais é empate.</p>
        <h3>Regras do jogo</h3>
        <ul>
        <li>
            <p>A pedra quebra a tesoura</p>
        </li>
        <li>
            <p>A tesoura corta o papel</p>
        </li>
        <li>
            <p>O papel embrulha a pedra.</p>
        </li>
        </ul>
        <button id="btnIniciar">Iniciar jogo</button>
        
        `
        telaPrincipal.classList.add('inicio')
        return true
    }
    static iniciarGame(){
        telaPrincipal.classList.remove("inicio","final")
        telaPrincipal.innerHTML=""
        telaPrincipal.innerHTML=`
        <h3>Escolha o seu simbolo.</h3>
        <h3>Depois click em play</h3>
        <section class="player">
            <h2>Você</h2>

            <ul id="escolha">
                <li><img  id = ${symbol[0].nome} src="${symbol[0].img}"></li>
                <li><img id = ${symbol[1].nome} src="${symbol[1].img}"></li>
                <li><img id = ${symbol[2].nome} src="${symbol[2].img}"></li>
            </ul>
        </section>

        <div><p>X</p></div>

        <section class = "adversario">
            <h2>Adversário</h2>
            <ul id =result></ul>
        </section>
        <div class= 'play'>
            <button id ="btnPlay">Play</button>
        </div>
        `
        telaPrincipal.classList.add('partida')
        this.select = document.getElementById('escolha')
        this.btnPlay = document.getElementById('btnPlay')

        TelaInicial.select.addEventListener("click",PlayerControle.selectSymbol)
        TelaInicial.btnPlay.addEventListener('click',Adversario.ramdomNum)
      
    }
    static showSymbol(li){
        
        this.select.innerHTML = ""
        this.select.innerHTML = `
            <li><img src ="${li}"></li>
        `
        return true
    }
    static vencedor(mensage){

        const {nome,img,msg} = mensage

        telaPrincipal.classList.remove("partida")
        telaPrincipal.innerHTML = ""
        telaPrincipal.innerHTML = `
          <h1>${msg}</h1>
          <img src=${img}>
          <p>click em reiniciar para jogar novamente.</p>
          <button id="reiniciar">reiniciar</button>
        `
        telaPrincipal.classList.add('final')

        const reinicio = document.getElementById('reiniciar')
        reinicio.addEventListener('click',TelaInicial.iniciarGame.bind(TelaInicial))
 
    }
    
}

export {TelaInicial}