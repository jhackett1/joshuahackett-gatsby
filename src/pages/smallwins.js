import React from 'react'

import Layout from '../components/Index'
import Projects from '../components/Projects'
import SmallWinsHero from '../components/SmallWinsHero'
import Services from '../components/Services'
import Process from '../components/Process'
import CallToAction from '../components/CallToAction'

export default class Index extends React.Component {
  render(){

    return(
    <Layout>
        <SmallWinsHero/>
        <Projects 
            projects={this.props.data.projects.edges.slice(0, 4)}
            />
        <Process/>
        <Services/>
        <CallToAction
            email={this.props.data.site.siteMetadata.email}
            />
    </Layout>
    )
  }
}

export const query = graphql`
  query HireQuery {
    projects: allMarkdownRemark (
      filter: {fileAbsolutePath: {regex: "/projects/.*$/"}},
      sort: {fields: [frontmatter___date], order: DESC},
    ) {
      edges {
        node {
          frontmatter {
            title
            type
            image
          }
        }
      }
    }
    site {
      siteMetadata {
        email
        strapline
      }
    }
  }
`