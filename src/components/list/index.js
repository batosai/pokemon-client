import { Link } from '../router'
import config from '../../config'

const List = props => (
  <article className="panel is-primary mt-15">
    { props.data.map( item => (
      <Link href={`/pokemon/${item.pokemon.id}`} className="panel-block">
        { item.pokemon.thumbnail ? (<img src={`${config.baseUrl}${item.pokemon.thumbnail.url}`} height="52" width="52" alt="" />) : null}
        {item.pokemon.name}
      </Link>
    ))}
  </article>
)

export default List
