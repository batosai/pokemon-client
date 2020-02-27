const types = {
  'acier': 'steel',
  'combat': 'combat',
  'dragon': 'dragon',
  'eau': 'water',
  'feu': 'fire',
  'fée': 'fairy',
  'glace': 'ice',
  'insecte': 'insect',
  'normal': 'normal',
  'obscur': 'obscure',
  'plante': 'plante',
  'poison': 'poison',
  'psy': 'psy',
  'roche': 'rock',
  'sol': 'ground',
  'spectre': 'ghost',
  'ténèbres': 'darkness',
  'vol': 'flight',
  'électrick': 'electrik',
}

const Tag = props => (
  <span className={`tag is-${types[props.type.toLowerCase()]}`}>{ props.children }</span>
)

export default Tag
