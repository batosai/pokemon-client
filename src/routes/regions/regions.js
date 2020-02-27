import { useEffect } from 'preact/hooks'
import Helmet from 'preact-helmet'
import { Link } from '../../components/router'
import config from '../../config'

const Regions = props => {
  useEffect(async () => {
    if (!props.regions.length) {
      props.fetchRegions()
    } else {
      props.loading(false)
    }
  }, [])

  return (
    <section className="section">
      <Helmet
        title="Regions"
        meta={[
            {name: "description", content: "Regions Pokemon"},
            {property: "og:description", content: "Regions Pokemon"}
        ]}
      />

      <div class="tile is-parent is-vertical">
        { props.regions.map( region => (
          <Link href={`/region/${region.id}`} className="panel-block">
            <article class="tile is-child notification" style={{ height: '180px', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(${config.baseUrl}${region.image.url})` }}>
              <p class="title has-text-white">{ region.name }</p>
            </article>
          </Link>
        )) }
      </div>
    </section>
  )
}

export default Regions
