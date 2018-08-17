import React from 'react'
import Link from 'gatsby-link'

import Hero from '../components/Hero'
import Projects from '../components/Projects'

const Index = ({data}) => (
  <div>
    <Hero
      strapline={data.site.siteMetadata.strapline}
      email={data.site.siteMetadata.email}
      />
    <Projects 
      projects={[]}
      />

  </div>
)

export default Index

export const query = graphql`
  query HomepageQuery {
    site {
      siteMetadata {
        email
        strapline
      }
    }
  }
`
