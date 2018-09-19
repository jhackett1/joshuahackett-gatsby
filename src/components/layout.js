import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"

import Header from './Header'
import Footer from './Footer'

import './layout.sass'

const Layout = ({ children, data }) => (




  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
            description
            menu {
              label
              href
            }
            copyrightNotice
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
          ]}
          />
        <Header
          menu={data.site.siteMetadata.menu}
          title={data.site.siteMetadata.title}
          />
        {children}
        <Footer
          menu={data.site.siteMetadata.menu}
          title={data.site.siteMetadata.title}
          notice={data.site.siteMetadata.copyrightNotice}
          />
      </div>
    )}
  />


)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
