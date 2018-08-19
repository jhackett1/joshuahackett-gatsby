import React from 'react'

import Button from './common/Button'

import './callToAction.sass'

const CallToAction = ({email}) => (
    <section className="call-to-action">
        <div className="container call-to-action__inner">
            <h2 className="call-to-action__title">Contact me</h2>
            <p className="call-to-action__description">I'm always looking for new freelance opportunities and partnerships that fit my skillset. If you think you've got one, do get in touch!</p>
            <Button
                href={"mailto:" + email}
                label="Email me"
                />
        </div>
    </section>
)

export default CallToAction