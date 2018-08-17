import React from 'react'
import PropTypes from 'prop-types'

const Projects = ({projects}) => (
    <section className="projects">
        <div className="projects__inner container">
            <h2 className="projects__title">Projects</h2>
        </div>
    </section>
)

Projects.propTypes = {
    projects: PropTypes.array,
}

export default Projects