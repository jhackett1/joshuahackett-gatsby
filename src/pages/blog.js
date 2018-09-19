import React from 'react'
import slugify from 'slugify'
import timeago from 'timeago.js'

import Layout from "../components/Layout"
import Card from '../components/common/Card'
import PageHeader from '../components/PageHeader';

import './page.sass'

export default class Blog extends React.Component{
    render(){

        // Transform medium posts to match markdown format
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
            <Layout>
                <PageHeader
                  overlap
                  title="Blog"
                  lede="Things I’ve written about technology and design, plus older news stories and interviews."
                  />

                <section className="page">
                    <div className="container page__inner">
                        <ul className="page__list--with-overlap">
                            {sortedPosts.map((post, i) =>
                                <Card
                                    key={i}
                                    subtitle={timeago().format(post.node.frontmatter.date)}
                                    title={post.node.frontmatter.title}
                                    excerpt={(post.node.medium)? post.node.frontmatter.excerpt : post.node.html.substring(0,130).replace(/<(?:.|\n)*?>/gm, '')}
                                    linkHref={(post.node.medium)? `http://medium.com/@dinosaurlord/${post.node.mediumSlug}` : `/post/${slugify(post.node.frontmatter.title, {lower: true})}`}
                                    linkLabel="Keep reading →"
                                    external={post.node.medium}
                                    />
                            )}
                        </ul>
                    </div>                
                </section>
            </Layout>
        )
    }
}

export const query = graphql`
  query BlogQuery {
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
  }
`