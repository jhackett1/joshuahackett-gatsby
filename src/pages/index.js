import React from 'react'
import Link from 'gatsby-link'

import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Blog from '../components/Blog'
import CallToAction from '../components/CallToAction'

export default class Index extends React.Component {
  render(){
    let mediumPosts = this.props.data.mediumPosts.edges.map((post)=>{
      return {
        node: {
          medium: true,
          mediumSlug: post.node.uniqueSlug,
          mediumImage: post.node.virtuals.previewImage.imageId,
          frontmatter : {
            title: post.node.title,
            date: post.node.createdAt,
            excerpt: post.node.virtuals.subtitle
          }
        }
      }
    })
    // Now mix them with markdown posts and sort them all by date
    let sortedPosts = this.props.data.posts.edges.concat(mediumPosts).sort((a, b)=>{
      if (new Date(a.node.frontmatter.date) > new Date(b.node.frontmatter.date))  {
        return -1
      } else {
        return 1
      }
    })
    return(
      <div>
      <Hero
        strapline={this.props.data.site.siteMetadata.strapline}
        email={this.props.data.site.siteMetadata.email}
        />
      <Projects 
        projects={this.props.data.projects.edges.slice(0, 4)}
        />
      <Skills />
      <Blog
        posts={sortedPosts.slice(0, 2)}
        />
      <CallToAction
        email={this.props.data.site.siteMetadata.email}
        />
    </div>
    )
  }
}

export const query = graphql`
  query HomepageQuery {
    projects: allMarkdownRemark (
      filter: {fileAbsolutePath: {regex: "/projects/.*$/"}},
      sort: {fields: [frontmatter___date], order: DESC},
    ) {
      edges {
        node {
          frontmatter {
            title
            categories
            image
          }
        }
      }
    }
    posts: allMarkdownRemark (
      filter: {fileAbsolutePath: {regex: "/posts/.*$/"}},
      sort: {fields: [frontmatter___date], order: DESC},
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            date
            image
            excerpt
          }
        }
      }
    }
    mediumPosts: allMediumPost (
      sort: { fields: [createdAt], order: DESC }
    ) {
      edges {
        node {
          title
          createdAt
          uniqueSlug
          virtuals {
            subtitle
            previewImage {
              imageId
            }
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