
function cadastrarPedido() {
    const produto = prompt('Digite o nome do produto')
    const quantidade = prompt('Quantas unidades você vai comprar ?')
    const preco = Number(prompt('Qual o valor de cada unidade?'))
    // Juntar 3 variaveis em um objeto pedido
    const pedido = {
        produto,
        quantidade,
        preco
    }
    // Retornar para quem chamou a função
    return pedido
}
function validarPedido(pedido) {
    // Validar dados do pedido
    if (pedido.quantidade <= 0) {
        alert('Quantidade deve ser maior que zero')
        return false
    }
    // Validar o preço
    if (pedido.preco <= 0) {
        alert('Preço deve ser maior que zero')
        return false
    }
    if (pedido.produto.length === 0) {
        alert('Produto precisa ter um nome')
        return false
    }
    // Return true para indicar que está válido
    return true
}
function calcularPedidoTotal(pedido) {
    const valorTotal = pedido.preco * pedido.quantidade
    return valorTotal
}
function calcularValorComDesconto(total) {
    if (total > 30) {
        // Aplicar desconto 
        return total * 0.9
    }
    // sem desconto compla mais pastel
    return total
}
function exibirResumoPedido(pedido, valorFinal){
    alert(`Você comprou ${pedido.quantidade} ${pedido.produto}(s)\n Valor Total: ${valorFinal}`)
}

const pedidoNovo = cadastrarPedido()
const ehValido = validarPedido(pedidoNovo)
console.log('Pedido Valido?', ehValido)

if (ehValido) {
    const total = calcularPedidoTotal(pedidoNovo)
    const valorFinal = calcularValorComDesconto(total)
    exibirResumoPedido(pedidoNovo, valorFinal)
} else {
    alert('Pedido invalido')
}