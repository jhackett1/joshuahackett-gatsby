import React from 'react'

import Button from './common/Button'

import './smallWinsHero.sass'

const SmallWinsHero = () => (
    <section className="small-wins-hero">
        <div className="container small-wins-hero__inner">
            <h1 className="small-wins-hero__title">Small Wins</h1>
            <h2 className="small-wins-hero__subtitle">Freelance design and development by <strong>Joshua Hackett</strong></h2>
            <div className="small-wins-hero__button-holder">
                <Button external href="mailto:hello@joshuahackett.com?subject=A new project" label="Start a project"/> 
                <a href="#services" className="button button--outline">Or see services ↓</a>       
            </div>
        </div>
    </section>
)

export default SmallWinsHero