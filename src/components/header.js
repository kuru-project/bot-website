import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const NavLink = ({ children, icon }) => (
  <a href={`http://${children}.kuru-anime.com/`} title={children} target="_blank" rel="noopener noreferrer" className="no-underline hover:text-grey-light text-white font-sans mr-3 text-sm">
    <i className={icon}></i>
    <span className="hidden">{children}</span>
  </a>
)

const Header = ({ siteTitle, botInviteLink, companyName }) => (
  <header className="p-2 bg-kuru border-b border-kuru-dark">
    <div className="container mx-auto flex items-center">
      <h1 className="m-0 p-0 font-roboto-condensed text-2xl">
        <Link to="/" className="no-underline text-white" title={siteTitle}>
          {companyName}
        </Link>
      </h1>
      <nav className="ml-5 mr-auto">
        <NavLink icon="fab fa-discord">Discord</NavLink>
        <NavLink icon="fab fa-facebook-square">Facebook</NavLink>
        <NavLink icon="fab fa-twitter-square">Twitter</NavLink>
      </nav>
      <a href={botInviteLink} target="_blank" rel="noopener noreferrer" className="no-underline hover:bg-grey-lighter bg-white py-1 px-3 text-sm text-kuru rounded shadow">
        <i className="fas fa-robot"></i><span className="ml-2 font-sans">Invite bot</span>
      </a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  botInviteLink: PropTypes.string,
  companyName: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  botInviteLink: ``,
  companyName: ``,
}

NavLink.propTypes = {
  children: PropTypes.string,
  icon: PropTypes.string,
}

NavLink.defaultProps = {
  children: ``,
  icon: ``,
}

export default Header
