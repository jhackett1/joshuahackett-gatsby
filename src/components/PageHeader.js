import React from 'react'

import './pageHeader.sass'

const PageHeader = ({overlap, title, lede}) => (
    <section className="page-header">
        <div className={(overlap)? "container page-header__inner--with-overlap" : "container page-header__inner"}>
            <h1 className="page-header__title">{title}</h1>
            <p className="page-header__lede">{lede}</p>
        </div>
    </section>
)

export default PageHeader