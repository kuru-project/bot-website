import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = ({ siteTitle, botInviteLink, companyName }) => (
  <header style={{ backgroundColor: "#CD3C2A" }} className="mb-5 p-3">
    <div className="container mx-auto flex items-center">
      <h1 className="m-0 mr-auto p-0 font-roboto-condensed text-2xl">
        <Link to="/" className="no-underline text-white" title={siteTitle}>
          {companyName}
        </Link>
      </h1>
      <a href={botInviteLink} target="_blank" rel="noopener noreferrer" className="no-underline"><FontAwesomeIcon icon="robot" /> Invite Link</a>
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

export default Header
