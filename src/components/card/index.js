import { useEffect } from 'preact/hooks'
import Tag from '../tag'
import { Howl } from 'howler'
import config from '../../config'

const Card = props => {

  const crySound = () => {
    const crySound = new Howl({ src: [`${config.baseUrl}${props.pokemon.audioCry.url}`] })
    crySound.play()
  }

  const nameSound = () => {
    const nameSound = new Howl({ src: [`${config.baseUrl}${props.pokemon.audioName.url}`] })
    nameSound.play()
  }

  const contentSound = () => {
    const descriptionSound = new Howl({ src: [`${config.baseUrl}${props.pokemon.audioDescription.url}`] })
    console.log(props.pokemon)
    descriptionSound.play()
  }

  useEffect(() => {
    // crySound = new Howl({ src: [props.pokemon.cry] })
    // nameSound = new Howl({ src: [props.pokemon.nameSound] })
    // descriptionSound = new Howl({ src: [props.pokemon.cry] })

    // crySound.play()
  }, [])

  return (
    <div className="card mt-15">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-128x128">
              <img className="pointor" src={props.pokemon.images.length ? `${config.baseUrl}${props.pokemon.images[0].url}` : ''} onClick={() => crySound()} height="" alt="" />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4 pointor" onClick={() => nameSound()}>{ props.pokemon.name }</p>
            <p className="subtitle is-6">
              Taille: { props.pokemon.size } m <br />
              Poids: { props.pokemon.weight } kg
            </p>
          </div>
        </div>
        <div className="tags">
          { props.pokemon.types ? props.pokemon.types.map( type => (
            <Tag type={type.name} >{ type.name }</Tag>
          )) : null }
          </div>

        <div className="content pointor" onClick={() => contentSound()}>
          { props.pokemon.content }
        </div>
      </div>
    </div>
  )
}

export default Card
