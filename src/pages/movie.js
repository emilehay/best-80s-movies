import React, { Component } from 'react'

export default class movie extends Component {

    render() {
        console.log(this.props)
        const { params } = this.props.match
        return (
            <div>
                
            </div>
        )
    }
}
