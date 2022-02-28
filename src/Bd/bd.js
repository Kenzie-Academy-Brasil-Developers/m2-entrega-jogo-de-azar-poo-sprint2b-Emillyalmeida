const symbol = [
    {
        id:0,
        img:"./src/img/icons8-rocha-100.png",
        nome:'pedra'

    },{
        id:1,
        img: "./src/img/icons8-recortar-100.png",
        nome:'tesoura'
    },{
        id:2,
        img:"./src/img/icons8-papel-mate-100.png",
        nome:'papel'
    }
]

const final = [
    {
        nome:"Empate",
        img:"./src/img/empate.gif",
        msg:"O jogo empatou"

    },

    {
      nome:"Player",
      img:"./src/img/vitoria.gif",
      msg:"Parabéns você ganhou !!!"

    },
    {
        nome:"Adversario",
        img:"./src/img/derota.gif",
        msg:"Que pena, você perdeu :("
    }
]

export {symbol,final}