import React from 'react'
import slugify from 'slugify'
import timeago from 'timeago.js'
import { Link } from 'gatsby'

import './relatedPosts.sass'

const RelatedPosts = ({posts}) => (
    <section className="related-posts container">
        <h3 className="related-posts__title">Related posts</h3>
        <ul className="related-posts__list">
            {posts.map((post, i)=>
            <li key={i}>
                <Link className="related-posts__link" to={ `/post/${slugify(post.node.frontmatter.title, {lower: true})}`}>
                    <h4 className="related-posts__post-title">{post.node.frontmatter.title}</h4>
                </Link>
                <p  className="related-posts__post-excerpt">{timeago().format(post.node.frontmatter.date)}</p>
            </li>)
            }
        </ul>
    </section>
)

export default RelatedPosts