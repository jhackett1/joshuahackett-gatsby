import React from 'react'

import Skill from './common/Skill'

import './skills.sass'

const Skills = ({projects}) => (
    <section className="skills">
        <div className="skills__inner container">
            <ul className="skills__list">
                <Skill
                    icon="/skill1.svg"
                    title="User-centred design"
                    description="I specialise in designing for user needs - testing prototypes with real users and rapidly iterating them."
                    />
                <Skill
                    icon="/skill2.svg"
                    title="Agile delivery"
                    description="I've led and worked in a variety of agile teams, at all stages of the product development lifecycle."
                    />
                <Skill
                    icon="/skill3.svg"
                    title="Front-end development"
                    description="I write robust, accessible front-end code and make use of modern Javascript frameworks."
                    />
                <Skill
                    icon="/skill4.svg"
                    title="Trainer"
                    description="I've helped students, apprentices, civil servants and volunteers gain new digital skills through workshops and courses."
                    />                             
            </ul>

        </div>
    </section>
)

export default Skills