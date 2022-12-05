import { useEffect, useState } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/router'

import pokemonService from '../../services/modules/pokemon'
import PokemonResponse from '../../services/types/pokemon/response.types'

const PokemonDetailsPage = () => {
  // Props
  // Hooks
  const router = useRouter()

  // States
  const [pokemon, setPokemon] = useState<PokemonResponse['getPokemon']>()

  // Data
  const { id } = router.query

  // Methods
  const getPokemonDetails = async () => {
    const response = await pokemonService.getPokemon(Number(id))

    setPokemon(response.data)
  }

  // Effects
  useEffect(() => {
    if (typeof id !== 'string') return

    void getPokemonDetails()
  }, [])

  // Render
  return (
    <div>
      <h1>Pokemon Details Page</h1>

      {pokemon && (
        <div>
          <h2>{pokemon.name}</h2>

          <Image
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            width={100}
            height={100}
          />

          <h3>Abilities</h3>
          <ul>
            {pokemon.abilities.map((ability) => (
              <li key={ability.ability.name}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default PokemonDetailsPage
