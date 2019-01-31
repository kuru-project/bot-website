import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <StaticQuery
    query={graphql`
    query IndexPageQuery {
      site {
        siteMetadata {
          companyName
        }
      }
    }
  `}
    render={data => (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <div className="text-center mb-5 sm:p-14 md:p-20 lg:p-26 xl:p-32">
          <h1 className="p-0 pb-3 m-0 font-roboto-condensed">Kuru Anime Bot</h1>
          <p className="p-0 pb-3 m-0">An all purpose bot for Discord servers!</p>
          <div>
            <a href="http://google.com" target="_blank" className="no-underline hover:bg-grey-lighter bg-white py-1 px-3 text-sm text-kuru rounded">Invite {data.site.siteMetadata.companyName} Bot</a>
            <a href="http://google.com" target="_blank" className="no-underline hover:bg-grey-lighter bg-white py-1 px-3 text-sm text-kuru rounded">Join our Discord</a>
          </div>
        </div>
        <div className="container mx-auto">
          <Link to="/page-2/">Go to page 2</Link>
        </div>
      </Layout>
    )}
  />
)

export default IndexPage
