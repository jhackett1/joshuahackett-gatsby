import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

import Menu from './common/Menu'

import './header.sass'
// import logo from '../../static/logo.svg'

const Header = ({menu, title }) => (
    <header className="header">
        <div className="header__inner container">
            <Link to="/">
                <img 
                    className="header__logo" 
                    src="/logo.svg"
                    alt={title}
                    />
            </Link>
            <Menu menu={menu} />
        </div>
    </header>
)

Header.propTypes = {
    menu: PropTypes.array,
    title: PropTypes.string,
}

export default Header