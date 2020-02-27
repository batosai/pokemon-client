import { useEffect } from 'preact/hooks'
import Helmet from 'preact-helmet'

import List from '../../components/list'

const Home = props => {
  useEffect(async () => {
    if (!props.pokemons.length) {
      props.fetchPokemons()
    } else {
      props.loading(false)
      window.scrollTo(0, props.position)
    }
  }, [])

  useEffect(() => {
    props.setPosition(window.pageYOffset)
  })

  return (
    <section className="section">
      <Helmet
        title="Pokedex"
        meta={[
            {name: "description", content: "Pokedex Pokemon"},
            {property: "og:description", content: "Pokedex Pokemon"}
        ]}
      />

      {/*<p className="panel-tabs">
        <a className="is-active">All</a>
        <a>Kanto</a>
        <a>Johto</a>
        <a>Hoenn</a>
        <a>Sinnoh</a>
        <a>Unys</a>
        <a>Kalos</a>
        <a>Alola</a>
        <a>Galar</a>
      </p>*/}
      <List data={props.pokemons} />
    </section>
  )
}

export default Home
