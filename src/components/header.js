import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle, botInviteLink }) => (
  <header className="bg-orange-light">
    <div>
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
      <a href={botInviteLink} target="_blank" rel="noopener noreferrer">Invite Link</a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  botInviteLink: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  botInviteLink: ``,
}

export default Header
