function processarMusicas(musicas) {
    let soma = 0
    // Criar uma repetição para rodar um item do array por vez
    for(let i = 0; i < musicas.length; i++){
        // O item atual do array pode ser reconhecido por musicas[i]
        const itemAtual = musicas[i]
        // console.log('itemAtual: ', itemAtual)
        // 1- Converter todas as musicas para o formato mm:ss
        const horario = converterSegundosParaHorario(itemAtual)
        console.log(horario)

        // 2- Incluir musicas com duração entre 2 e 5 minutos no array musicasFavoritas
        // 2 minutos = 120 segundos
        // 5 minutos = 300 segundos
        if (itemAtual >= 120 && itemAtual <= 300){
            // Está entre 2 e 5 minutos, entao fazer o push em musicasFavoritas
            musicasFavoritas.push(itemAtual)
        }

        // 3- Calcular o tempo total da playlist (soma do tempo das musicas)
        soma = soma + itemAtual
    }
    console.log('As musicas favoritas sao ', musicasFavoritas)
    console.log('A soma em segundos das musicas é ', soma)
    console.log('A soma em horario das musicas é ', converterSegundosParaHorario(soma))
}

function converterSegundosParaHorario(tempo){
    const minutos = parseInt(tempo / 60).toString().padStart(2, '0')
    const segundos = parseInt(tempo % 60).toString().padStart(2, '0')
    const resultado = minutos + ':' + segundos
    return resultado
}

const listaMusicas = [100,200,300,400,500]
const musicasFavoritas = []

processarMusicas(listaMusicas)