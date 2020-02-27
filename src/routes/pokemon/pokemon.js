import { useEffect } from 'preact/hooks'
import Helmet from 'preact-helmet'

import Card from '../../components/card'

const Pokemon = props => {
  useEffect(async () => {
    props.fetchPokemon(props.id)
  }, [])

  return(
    <section className="section">
      <Helmet
        title={props.pokemon.name}
        meta={[
            {name: "description", content: `Pokemon {props.pokemon.name}`},
            {property: "og:description", content: `Pokemon {props.pokemon.name}`}
        ]}
      />
      <Card pokemon={props.pokemon} />
    </section>
  )
}

export default Pokemon
