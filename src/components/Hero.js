import React from 'react'
import PropTypes from 'prop-types'

import './hero.sass'

const Hero = ({strapline, email }) => (
    <section className="hero">
        <div className="hero__inner container">
            <h2 className="hero__strapline" dangerouslySetInnerHTML={{__html: strapline}}></h2>
            <h2 className="hero__email">
                <a className="hero__email-link" href={`mailto:${email}`}>{email}</a>
            </h2>
        </div>
    </section>
)

Hero.propTypes = {
    strapline: PropTypes.string,
    email: PropTypes.string,
}

export default Hero