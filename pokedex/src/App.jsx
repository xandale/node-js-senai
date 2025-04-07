import { useState } from 'react'

function App() {

  const [pokemon, setPokemon] = useState(null)
  const [idPokemon, setIdPokemon] = useState(1)

  const buscarPokemons = async () => {
    const urlApi = `https://pokeapi.co/api/v2/pokemon/${idPokemon}`
    const response = await fetch(urlApi)
    const pokemonJson = await response.json()
    setPokemon(pokemonJson)
  }

  const avancarPokemon = () => {
    setIdPokemon(idPokemon + 1)
  }

  const voltarPokemon = () => {
    setIdPokemon(idPokemon - 1)
  }

  buscarPokemons()

  return (
    <div>
      <h1>{pokemon?.name}</h1>
      <img src={pokemon?.sprites.front_default} />
      <button onClick={avancarPokemon}>Próximo</button>
      {idPokemon > 1 && <button onClick={voltarPokemon}>Voltar</button>}
    </div>
  )
}

export default App
// npm install
// npm run dev