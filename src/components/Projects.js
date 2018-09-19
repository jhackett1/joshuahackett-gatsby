import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import slugify from 'slugify'

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
                        to={`/project/${slugify(project.node.frontmatter.title, {lower: true})}`}
                        key={i}
                        >
                        <Card
                            imgAlt={project.node.frontmatter.title}
                            imgSrc={project.node.frontmatter.image}
                            subtitle={project.node.frontmatter.type.join(", ")}
                            title={project.node.frontmatter.title}
                            />
                    </Link>
                )}
            </ul>
            <Button
                outline
                href="/projects"
                label="More projects →"
                />
        </div>
    </section>
)

Projects.propTypes = {
    projects: PropTypes.array,
}

export default Projects