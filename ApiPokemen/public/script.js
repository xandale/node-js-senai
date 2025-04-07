let idAtual = 0; // ID inicial do Pokémon é 0

// Função para buscar o Pokémon com o ID fornecido
function buscarPokemon(id) {
    if (id < 1) {
        return;
    }
2
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Pokémon não encontrado");
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("pokemon").innerHTML = `
                <h2>${data.name.toUpperCase()} (#${data.id})</h2>
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <p>Altura: ${data.height} | Peso: ${data.weight}</p>
                <p>Tipos: ${data.types.map(t => t.type.name).join(", ")}</p>
            `;
        })
        .catch(error => {
            document.getElementById("pokemon").innerHTML = `<p style="color: red;">${error.message}</p>`;
        });
}

// Função para mostrar o próximo Pokémon (aumenta o ID)
function ProximoPokemon() {
    idAtual++; // Aumenta o ID
    buscarPokemon(idAtual); // Busca o Pokémon com o novo ID
}

// Função para mostrar o Pokémon anterior (diminui o ID)
function PokemonAnterior() {
    if (idAtual > 1) {
        idAtual--; // Diminui o ID
        buscarPokemon(idAtual); // Busca o Pokémon com o novo ID
    }
}
