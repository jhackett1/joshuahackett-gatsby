import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import './menu.sass'

const Menu = ({menu}) => (
    <nav>
        <ul className="menu">
            {menu.map((menuItem, i) => 
                <li key={i} className="menu__menu-item">
                    <Link 
                        to={menuItem.href} 
                        className="menu__menu-link"
                        activeClassName="menu__menu-link--active"
                        >{menuItem.label}
                        </Link>
                </li>
            )}
        </ul>
    </nav>
)

Menu.propTypes = {
    menu: PropTypes.array,
}

export default Menu