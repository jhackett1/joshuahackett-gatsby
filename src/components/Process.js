import React from 'react'

import Skill from './common/Skill'

import './process.sass'
import './skills.sass'

const Process = () => (
    <section className="process">
    <div className="container process__inner">
        <h2 className="process__title">How I work</h2>
        <ul className="process__list">
            <Skill
                icon="/skill1.svg"
                title="Discover"
                description="Every digital service exists to meet a user need. The first step in a new project is learning who our users are, and what they need."
            />
            <Skill
                icon="/skill3.svg"
                title="Prototype"
                description="It's risky to deliver a 'finished' product all at once. To avoid building the wrong thing, we'll focus on a minimum viable product and test it with users."
                />
            <Skill
                icon="/skill2.svg"
                title="Iterate"
                description="Measure how the product performs in the real world and use that feedback to improve it. User needs change over time, and the best products respond to that change."
                />                         
        </ul>
    </div>
</section>
)

export default Process