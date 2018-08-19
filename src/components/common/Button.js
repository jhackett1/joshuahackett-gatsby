import React from 'react'
import PropTypes from 'prop-types'

import './button.sass'

export default class Button extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        if(this.props.outline && this.props.outline == "green"){
            return(
                <a 
                    href={this.props.href} 
                    className="button button--outline green"
                    >{this.props.label}</a>
            )
        } else if (this.props.outline) {
            return(
                <a 
                    href={this.props.href} 
                    className="button button--outline"
                    >{this.props.label}</a>
            )
        } else {
            return(
                <a 
                    href={this.props.href} 
                    className="button button--solid"
                    >{this.props.label}</a>
            )            
        }


    }
}

Button.propTypes = {
    label: PropTypes.string,
    href: PropTypes.string,
    outline: PropTypes.bool
}