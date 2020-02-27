const Loading = props => {
  return (
    <div className={ props.isActive ? `pageloader is-active` : `pageloader` } ><span className="title">Chargement</span></div>
  )
}

Loading.defaultProps = {
  isActive: true,
}

export default Loading
