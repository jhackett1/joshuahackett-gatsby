import React from 'react'

import './projectMeta.sass'

const ProjectMeta = ({outline, quickFacts}) => (
    <section className="project-meta">
        {(outline)?
            <div className="project-meta__card">
                <h3 className="project-meta__title">Project outline</h3>
                <p className="project-meta__outline">{outline}</p>
            </div>
        :""}
        {(quickFacts)?
            <div className="project-meta__card">
                <h3 className="project-meta__title">Quick facts</h3>
                <ul className="project-meta__list">
                    {quickFacts.map((fact)=>
                        <li className="project-meta__list-item">{fact}</li>
                    )}
                </ul>
            </div>   
        :""}     
    </section>
)

export default ProjectMeta