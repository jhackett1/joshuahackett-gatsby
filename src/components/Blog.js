import React from 'react'
import PropTypes from 'prop-types'
import slugify from 'slugify'
import timeago from 'timeago.js';

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
                        subtitle={timeago().format(post.node.frontmatter.date)}
                        title={post.node.frontmatter.title}
                        excerpt={post.node.frontmatter.excerpt}
                        linkHref={(post.node.medium)? `http://medium.com/@dinosaurlord/${post.node.mediumSlug}` : `/post/${slugify(post.node.frontmatter.title, {lower: true})}`}
                        linkLabel="Keep reading →"
                        external={post.node.medium}
                        />
                )}
            </ul>
            <Button
                outline
                href="/blog"
                label="More posts →"
                />
        </div>
    </section>
)

export default Blog