import React from 'react'
import PropTypes from 'prop-types'

import Card from './common/Card'
import Button from './common/Button'

import './blog.sass'

const Blog = ({posts}) => (
    <section className="blog">
        <div className="blog__inner container">
            <h2 className="blog__title">Blog</h2>
            <ul className="blog__list">
                {posts.map((post, i) =>
                    <Card
                        key={i}
                        subtitle={post.node.frontmatter.categories}
                        title={post.node.frontmatter.title}
                        excerpt={post.node.frontmatter.excerpt}
                        linkHref="#"
                        linkLabel="Keep reading →"
                        />
                )}
            </ul>
            <Button
                outline
                href="#"
                label="More posts →"
                />
        </div>
    </section>
)

export default Blog