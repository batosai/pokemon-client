import { route } from 'preact-router'

const Link = props => {
  const click = () => {
    if (window.location.pathname !== props.href) {
      props.stateLoading(true)
      setTimeout(() => route(props.href), 1000)
    }
  }

  return (
    <a onClick={click} className={props.className ? props.className : ''}>
      { props.children }
    </a>
  )
}

export default Link
