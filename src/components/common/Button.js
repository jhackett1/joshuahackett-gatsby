import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import './button.sass'

export default class Button extends React.Component{
    render(){
        if(this.props.external){
            return(
                <a
                    href={this.props.href} 
                    target="blank"
                    className={(this.props.outline)? `button button--outline ${this.props.outline}` : `button button--solid ${this.props.outline}`}
                    >{this.props.label}
                </a>
            )
        } else {
            return(
                <Link 
                    to={this.props.href} 
                    className={(this.props.outline)? `button button--outline ${this.props.outline}` : `button button--solid ${this.props.outline}`}
                    >{this.props.label}
                </Link>
            )
        }
    }
}

Button.propTypes = {
    label: PropTypes.string,
    href: PropTypes.string
}