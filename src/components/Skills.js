import React from 'react'

import './skills.sass'

const Skills = ({projects}) => (
    <section className="skills">
        <div className="skills__inner container">

            <ul className="skills__list">
                <li className="skills__list-item">
                    <img className="skills__icon" src="/skill1.svg"/>
                    <h3 className="skills__title">User-centred design</h3>
                    <p className="skills__description">I specialise in designing for user needs - testing prototypes with real users and rapidly iterating them.</p>
                </li>
                <li className="skills__list-item">
                    <img className="skills__icon" src="/skill2.svg"/>
                    <h3 className="skills__title">Agile delivery</h3>
                    <p className="skills__description">I've led and worked in a variety of agile teams, at all stages of the product development lifecycle.</p>
                </li>
                <li className="skills__list-item">
                    <img className="skills__icon" src="/skill3.svg"/>
                    <h3 className="skills__title">Front-end development</h3>
                    <p className="skills__description">I write robust, accessible front-end code and make use of modern Javascript frameworks.</p>
                </li>
                <li className="skills__list-item">
                    <img className="skills__icon" src="/skill4.svg"/>
                    <h3 className="skills__title">Trainer</h3>
                    <p className="skills__description">I've helped students, apprentices, civil servants and volunteers gain new digital skills through workshops and courses.</p>
                </li>                                
            </ul>

        </div>
    </section>
)

export default Skills