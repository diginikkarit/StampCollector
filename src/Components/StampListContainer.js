import React, { Component } from 'react'
import StampContainer from './StampContainer'

export default class StampListContainer extends Component {
    render() {
        return (
            <div>
                <StampContainer stamp={this.props.stampCollection[0]}/>
                <StampContainer stamp={this.props.stampCollection[1]}/>
                <StampContainer stamp={this.props.stampCollection[2]}/>
            </div>
        )
    }
}
