import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import './header.css'

const Header = ({ siteTitle, botInviteLink }) => (
  <Header>
    <div className="container">
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
      <a href={botInviteLink} target="_blank">Invite Link</a>
    </div>
  </Header>
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
