import {telaPrincipal} from "../script.js"
import{symbol} from "../Bd/bd.js"
class TelaInicial{

    static createHtml(){
        telaPrincipal.innerHTML = `
        <h2>Como jogar</h2>
        <p>Voce de escolher entre pedra, papel ou tesoura. E seu adversario ira fazer o mesmo.Sempre que uma pessoa colocar um símbolo mais fraco, essa pessoa perderá a disputa. Ganha quem mostrar o objeto mais forte.Se os simbolos forem iguais é empate</p>
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
        return true
    }
    static iniciarGame(){
        telaPrincipal.innerHTML=""
        telaPrincipal.innerHTML=`
        <section class="player">
            <h2>Voce</h2>
            <h3>Escolha o seu simbolo</h3>
            <ul id="escolha">
                <li><i id = ${symbol[0].nome}class = ${symbol[0].img}></i></li>
                <li><i id = ${symbol[1].nome}class = ${symbol[1].img}></i></li>
                <li><i id = ${symbol[2].nome}class = ${symbol[2].img}></i></li>
            </ul>
        </section>

        <div><p>X</p></div>

        <section>
            <h2>Adversario</h2>
            <div><i id =result ></i></div>
        </section>
        
        <button>Play</button>
        `
    }
}

export {TelaInicial}