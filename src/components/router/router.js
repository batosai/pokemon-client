import { Router } from 'preact-router'

const R = props => {
  let currentUrl
  const handleRoute = e => {
    currentUrl = e.url
  }

  return (
    <Router onChange={handleRoute}>
      { props.children }
    </Router>
  )
}

export default R
