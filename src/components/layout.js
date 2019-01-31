import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import './tailwind.css'
import './layout.css'

const Layout = ({ children, className }) => (
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
        <div className={`${className} font-sans`}>{children}</div>
        <Footer siteTitle={data.site.siteMetadata.title}/>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default Layout
