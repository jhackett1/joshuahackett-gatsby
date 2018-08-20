import React from 'react'
import PropTypes from 'prop-types'

import Card from './common/Card'
import Button from './common/Button'

import './blog.sass'

const Blog = ({posts}) => (
    <section className="blog">
        <div className="blog__inner container">
            <h2 className="blog__title">Services</h2>
            <ul className="blog__list">
                <Card
                    subtitle="Service"
                    title="Wordpress themes and plugins"
                    excerpt="Duplicate document named `HomepageQuery`. GraphQL fragments and roots must have unique names."
                    />
                <Card
                    subtitle="Service"
                    title="Front-end web design and development"
                    excerpt="Duplicate document named `HomepageQuery`. GraphQL fragments and roots must have unique names."
                    />
                <Card
                    subtitle="Service"
                    title="Native app development"
                    excerpt="Duplicate document named `HomepageQuery`. GraphQL fragments and roots must have unique names."
                    />
                <Card
                    subtitle="Service"
                    title="Consulting, strategy and service design"
                    excerpt="Duplicate document named `HomepageQuery`. GraphQL fragments and roots must have unique names."
                    />

            </ul>
        </div>
    </section>
)

export default Blog