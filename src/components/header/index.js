import { useState } from 'preact/hooks'
import { Link } from '../router'

const Header = () => {
  const [active, setActive] = useState(false)
  const activeToggle = () => setActive(!active)

  return (
    <nav className="navbar is-primary is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <div class="navbar-item is-paddingless">
          <a role="button" onClick={activeToggle} className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <Link className="navbar-item is-size-4" href="/">
          Pokedex
        </Link>
      </div>

      <div className={ active ? 'navbar-menu is-active' : 'navbar-menu' } id="navMenu">
        <div className="navbar-start">
          <Link href="/" className="navbar-item">
            Accueil
          </Link>

          {/* <a className="navbar-item">
            Documentation
          </a> */}
        </div>
      </div>
    </nav>
  )
}

export default Header
