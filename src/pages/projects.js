import React from 'react'

import Layout from "../components/Layout"
import PageHeader from '../components/PageHeader';
import FilterableProjects from '../components/FilterableProjects';

import './page.sass'

export default class Projects extends React.Component{
    render(){


        return(
            <Layout>
                <PageHeader
                  title="Projects"
                  lede="My recent digital projects, plus older print design and media work."
                  />

                <section className="page">
                    <div className="container page__inner">
                      <FilterableProjects
                        projects={this.props.data.projects.edges}
                        />
                    </div>                
                </section>

            </Layout>
        )
    }
}

export const query = graphql`
  query ProjectsQuery {
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
  }
`
