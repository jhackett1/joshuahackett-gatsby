import React from 'react'
import PropTypes from 'prop-types'

import Menu from './common/Menu'

import './footer.sass'

const Footer = ({menu, title, notice }) => (
    <footer className="footer">
        <div className="footer__inner container">
            <p className="footer__copyright-notice">{notice}</p>
            <Menu menu={menu} />
        </div>
    </footer>
)

Footer.propTypes = {
    menu: PropTypes.array,
    title: PropTypes.string,
    notice: PropTypes.string,
}

export default Footer