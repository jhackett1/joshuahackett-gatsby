import React from 'react'
import PropTypes from 'prop-types'

const Skill = ({icon, title, description}) => (
    <li className="skills__list-item">
        <img className="skills__icon" src={icon}/>
        <h3 className="skills__title">{title}</h3>
        <p className="skills__description">{description}</p>
    </li>
)

Skill.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
}

export default Skill