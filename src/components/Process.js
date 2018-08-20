import React from 'react'

import Skill from './common/Skill'

import './process.sass'

const Process = () => (
    <section className="process">
    <div className="container process__inner">
        <h2 className="process__title">How I work</h2>
        <ul className="process__list">
            <Skill
                icon="/skill1.svg"
                title="Discover"
                description="I specialise in designing for user needs - testing prototypes with real users and rapidly iterating them."
            />
            <Skill
                icon="/skill3.svg"
                title="Prototype"
                description="I've led and worked in a variety of agile teams, at all stages of the product development lifecycle."
                />
            <Skill
                icon="/skill2.svg"
                title="Iterate"
                description="I write robust, accessible front-end code and make use of modern Javascript frameworks."
                />                         
        </ul>
    </div>
</section>
)

export default Process