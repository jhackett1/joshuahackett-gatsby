import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import Card from './common/Card'
import Button from './common/Button'

import './projects.sass'

const Projects = ({projects}) => (
    <section className="projects">
        <div className="projects__inner container">
            <h2 className="projects__title">Projects</h2>
            <ul className="projects__list">
                {projects.map((project, i) =>
                    <Link 
                        className="projects__list-item" 
                        to="#" 
                        key={i}
                        >
                        <Card
                            imgAlt={project.node.frontmatter.title}
                            imgSrc={project.node.frontmatter.image}
                            subtitle={project.node.frontmatter.categories}
                            title={project.node.frontmatter.title}
                            />
                    </Link>
                )}
            </ul>
            <Button
                outline
                href="#"
                label="More projects →"
                />
        </div>
    </section>
)

Projects.propTypes = {
    projects: PropTypes.array,
}

export default Projects