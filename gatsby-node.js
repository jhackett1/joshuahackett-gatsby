const path = require('path')
const slugify = require('slugify')
// const createPaginatedPages = require("gatsby-paginate")

exports.createPages = ({boundActionCreators, graphql}) => {

  const { createPage } = boundActionCreators;

  const postTemplate = path.resolve('src/templates/post.js')
  return graphql(`
    {
      projects: allMarkdownRemark (
        filter: {fileAbsolutePath: {regex: "/projects/.*$/"}},
        sort: {fields: [frontmatter___date], order: DESC},
      ) {
        edges {
          node {
            fileAbsolutePath
            frontmatter {
              title
              image
              outline
              type
              quickFacts
            }
            html
          }
        }
      }
      posts: allMarkdownRemark (
        filter: {fileAbsolutePath: {regex: "/posts/.*$/"}}
      ) {
    	  edges {
    	    node {
            frontmatter {
              title
              image
              date
            }
            html
    	    }
    	  }
    	}
    
    }
  `).then(result => {
    if(result.errors){
      return Promise.reject(result.errors)
    }

    // Create project pages
    result.data.projects.edges.forEach(({ node }) => {
      createPage({
        path: `project/${slugify(node.frontmatter.title, {
          lower: true
        })}`,
        component: postTemplate,
        context: {
          title: node.frontmatter.title,
          post: node
        }
      })
    })

    // Create blog post pages
    result.data.posts.edges.forEach(({ node }) => {
      createPage({
        path: `post/${slugify(node.frontmatter.title, {
          lower: true
        })}`,
        component: postTemplate,
        context: {
          title: node.frontmatter.title,
          post: node
        }
      })
    })

  })
}