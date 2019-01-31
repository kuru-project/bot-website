import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="text-center sm:p-14 md:p-20 lg:p-26 xl:p-32">
      <h1 className="p-0 m-0">Kuru Anime Bot</h1>
      <p className="p-0 m-0">An all purpose bot for Discord servers!</p>
    </div>
    <div className="container mx-auto">
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  </Layout>
)

export default IndexPage
