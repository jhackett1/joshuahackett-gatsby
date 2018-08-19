import React from 'react'
import PropTypes from 'prop-types'

import Button from './Button'

import './card.sass'

const Card = ({
    imgSrc,
    imgAlt,
    subtitle,
    title,
    excerpt,
    linkHref,
    linkLabel
}) => (
    <li className="card">
        {(imgSrc && imgAlt)? 
            <img className="card__image" src={imgSrc} alt={imgAlt}/> 
        : ""}
        <div className="card__inner">
            {(subtitle)? 
                <h5 className="card__subtitle">{subtitle}</h5> 
            : ""}    
            {(title)? 
                <h3 className="card__title">{title}</h3> 
            : ""}          
            {(excerpt)? 
                <p className="card__excerpt">{excerpt}</p> 
            : ""}     
            {(linkHref && linkLabel)? 
                <Button outline="green" label={linkLabel} href={linkHref} /> 
            : ""}     
        </div>                 
    </li>
)

Card.propTypes = {
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    subtitle: PropTypes.string,
    title: PropTypes.string,
    excerpt: PropTypes.string,
    linkHref: PropTypes.string,
    linkLabel: PropTypes.string
}

export default Card