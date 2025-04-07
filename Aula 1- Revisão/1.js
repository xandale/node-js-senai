// let saldo = 1000

// function sacar (valor){
//     // Retirar o valor informado do saldo
//     saldo = saldo - valor
//     return saldo
// }

// let nomes = ["Ruan", "Paulo", "Sergio"]
// console.log(nomes[2]) // terceiro elemento
// // Alterar elementos
// nomes[2]= "João"
// console.log(nomes)
// //Metodos de array
// nomes.push("Douglas")
// nomes.unshift("Jorge")

// EXERCICIO

// let cartao

// function validacaoDeCartao(cartao) {
//     if (cartao.length != 16) {
//         console.log('Cartão invalido, if 1')
//         return
//     }
//     if (cartao.startsWith('0')) {
//         console.log('cartao invalido, if 2')
//         return
//     }
//     if (isNaN(cartao)) {
//         console.log('cartao invalido, if 3')
//         return
//     }
//     console.log('cartao Valido')
// }

// validacaoDeCartao('1112223334445556')
// function validacaoDeCartao() {

// let input = document.getElementById("cartao")
// let resultado = document.getElementById ("resultado")

// let cartao
// cartao = input.value

//     if (isNaN(cartao) || cartao.startsWith('0') || cartao.length != 16) {
//        resultado.innerHTML += ('Cartão invalido')
//         return
//     }
//     resultado.innerHTML = ('cartao Valido')
// }
// validacaoDeCartao()

function processarMusicas (musicas) {
    for(let i = 0; i < musicas.length; i++){
       const minutos = parseInt(musicas[i] / 60).toString().padStart(2, '0')
       const segundos = parseInt(musicas[i] % 60).toString().padStart(2, '0')
       
       let minutosSegundos = (minutos + ':' + segundos)
      console.log(minutosSegundos)
       if(minutosSegundos>=2 || minutosSegundos <5){
        musicasFavoritas.push(minutosSegundos)
       }
   }
    }
              //       0    1    2    3   4   
const listaMusicas = [100, 200, 300, 400, 500]
const musicasFavoritas = []
processarMusicas(listaMusicas)
