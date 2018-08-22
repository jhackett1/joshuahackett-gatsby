import React from 'react'
import PropTypes from 'prop-types'

import Card from './common/Card'
import Button from './common/Button'

import './blog.sass'

const Blog = ({posts}) => (
    <section className="blog" id="services">
        <div className="blog__inner container">
            <h2 className="blog__title">Services</h2>
            <ul className="blog__list">
                <Card
                    icon="/service1.svg"
                    title="Wordpress development"
                    excerpt="Get the website of your dreams with your own unique Wordpress theme and custom plugins to permit any novel functionality you need."
                    price="<strong>Most popular</strong> service"
                    />
                <Card
                    icon="/service4.svg"
                    title="Custom web development"
                    excerpt="Need something more bespoke? I work with modern tools like React to build completely custom web applications."
                    />
                <Card
                    icon="/service2.svg"
                    title="Native app development"
                    excerpt="Bring your idea to the iOS and Android app stores as a cross-platform React Native app."
                    />
                <Card
                    icon="/service3.svg"
                    title="Consulting, strategy and service design"
                    excerpt="Design is more than just pretty pictures. It's about understanding your users' needs and building a product that responds to them."
                    />

            </ul>
        </div>
    </section>
)

export default Blog