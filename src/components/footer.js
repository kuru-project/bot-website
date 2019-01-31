import PropTypes from 'prop-types'
import React from 'react'

const Footer = ({ siteTitle }) => (
  <footer className="bg-grey-darkest font-sans">
    <div className="container mx-auto text-center p-5 text-white text-sm">
      {siteTitle} &copy; {new Date().getFullYear()}
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
