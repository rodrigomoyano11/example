import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import pokemonService from '../../../services/modules/pokemon'
import PokemonResponse from '../../../services/types/pokemon/response.types'
import capitalizeSentence from '../../../utils/helpers/capitalizeSentence'

type GetPokemons = PokemonResponse['getPokemons']['results']

const Home = () => {
  // Props
  // Hooks
  const router = useRouter()

  // States
  const [pokemons, setPokemons] = useState<GetPokemons>([])

  // Methods
  const getPokemons = async () => {
    const response = await pokemonService.getPokemons()

    setPokemons(response.data.results)
  }

  const getPokemonId = (index: number) => index + 1

  // Handlers
  const handleClick = (id: number) => void router.push(`/pokemons/${id}`)

  // Effects
  useEffect(() => {
    void getPokemons()
  }, [])

  // Render
  return (
    <div>
      <h1>Home Page</h1>

      {pokemons.map((pokemon, index) => {
        const id = getPokemonId(index)

        const name = capitalizeSentence(pokemon.name)

        return (
          <div className="pokemon" key={pokemon.name}>
            <p className="title">{name}</p>

            <button type="button" onClick={() => handleClick(id)}>
              See details
            </button>
          </div>
        )
      })}

      <style jsx>{`
        .pokemon {
          background-color: rgb(240, 170, 170);
          padding: 1rem;
          margin: 1rem;
        }
      `}</style>
    </div>
  )
}

export default Home
