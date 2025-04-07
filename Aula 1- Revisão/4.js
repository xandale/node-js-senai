// let p = { produto: prompt('Produto?'), quantidade: +prompt('Quantas unidades?'), preco: +prompt('Preço?') };
// if (p.quantidade > 0 && p.preco > 0 && p.produto) 
//     alert(`Você comprou ${p.quantidade} ${p.produto}(s)\nValor Total: ${(p.preco * p.quantidade) > 30 ? p.preco * p.quantidade * 0.9 : p.preco * p.quantidade}`);
// else alert('Pedido inválido');

let pedidos = [];

function cadastrarPedido() {
    const produto = prompt('Digite o nome do produto');
    const quantidade = +prompt('Quantas unidades você vai comprar?');
    const preco = +prompt('Qual o valor de cada unidade?');
    return { produto, quantidade, preco };
}

function validarPedido(pedido) {
    return pedido.quantidade > 0 && pedido.preco > 0 && pedido.produto.trim() !== '';
}

function calcularTotal(pedido) {
    return pedido.preco * pedido.quantidade;
}

function calcularDesconto(total) {
    return total > 30 ? total * 0.9 : total;
}

function exibirResumo(pedido, valorFinal) {
    alert(`Você comprou ${pedido.quantidade} ${pedido.produto}(s)\nValor Total: ${valorFinal}`);
}

while (true) {
    const pedido = cadastrarPedido();
    if (validarPedido(pedido)) {
        pedidos.push(pedido);
        const total = calcularTotal(pedido);
        const valorFinal = calcularDesconto(total);
        exibirResumo(pedido, valorFinal);
    } else {
        alert('Pedido inválido');
    }

    if (!confirm('Deseja adicionar outro produto?')) break;
}

console.log(pedidos);
