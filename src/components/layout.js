import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './tailwind.css'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            companyName
            botInviteLink
          }
        }
      }
    `}
    render={data => (
      <>
        <Header
          companyName={data.site.siteMetadata.companyName}
          siteTitle={data.site.siteMetadata.title}
          botInviteLink={data.site.siteMetadata.botInviteLink}
        />
        <div>{children}</div>
        <footer>
          {data.site.siteMetadata.companyName} &copy; {new Date().getFullYear()}
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
