import api from '../clients/api.client'
import PokemonResponse from '../types/pokemon/response.types'

const pokemonService = {
  getPokemons: () =>
    api.get<PokemonResponse['getPokemons']>(
      'https://pokeapi.co/api/v2/pokemon',
    ),
  getPokemon: (id: number) =>
    api.get<PokemonResponse['getPokemon']>(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
    ),
}

export default pokemonService
