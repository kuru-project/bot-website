import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './tailwind.css'
import './layout.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faRobot
} from '@fortawesome/free-solid-svg-icons'

library.add(faRobot)

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
        <Header companyName={data.site.siteMetadata.companyName} siteTitle={data.site.siteMetadata.title} botInviteLink={data.site.siteMetadata.botInviteLink} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {children}
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
