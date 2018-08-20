import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

import Menu from './common/Menu'

import './header.sass'

export default class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            menuOpen: false
        }
    }
    render(){
        return(
            <header className="header">
                <div className="header__inner container">
                    <Link to="/">
                        <img 
                            className="header__logo" 
                            src="/logo.svg"
                            alt={this.props.title}
                            />
                    </Link>
                    <button 
                        className="header__menu-toggle"
                        onClick={()=>{
                            this.setState({
                                menuOpen: !this.state.menuOpen
                            })
                        }}>{(this.state.menuOpen)? "Close" : "Menu"}</button>
                    <div className={(this.state.menuOpen)? "header__menu-holder--open" : "header__menu-holder"}>
                        <Menu menu={this.props.menu} />
                    </div>
                </div>
            </header>
        )
    }
}

Header.propTypes = {
    menu: PropTypes.array,
    title: PropTypes.string,
}