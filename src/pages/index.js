import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import scopedStyles from './css/index.module.css'

const youtubeVideoID = "xKKFb8i5ECw";

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
        <div className={`text-center text-white mb-5 ${scopedStyles.mainBlock}`}>
          <div className={scopedStyles.videoBackground}>
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${youtubeVideoID}?autoplay=1&mute=1&modestbranding=1&autohide=1&showinfo=0&controls=0`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="videoBackground"></iframe>
          </div>
          <div className={`sm:p-14 md:p-20 lg:p-26 xl:p-32 ${scopedStyles.filter}`}>
            <h1 className="p-0 pb-3 m-0 font-roboto-condensed">{data.site.siteMetadata.companyName} Bot</h1>
            <p className="p-0 pb-3 m-0">An all purpose bot for Discord servers!</p>
            <div>
              <a href={`https://discordapp.com/oauth2/authorize?&client_id=514252558248706059&scope=bot&permissions=8`} target="_blank" rel="noopener noreferrer" className="inline-block m-3 no-underline hover:bg-grey-lighter bg-white p-3 text-sm text-kuru rounded"><i className="fas fa-robot"></i><span className="ml-2">Invite Bot</span></a>
              <a href="http://discord.kuru-anime.com/" target="_blank" rel="noopener noreferrer" className="inline-block m-3 no-underline hover:bg-grey-lighter bg-white p-3 text-sm text-kuru rounded"><i className="fab fa-discord"></i><span className="ml-2">Join Server</span></a>
            </div>
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
