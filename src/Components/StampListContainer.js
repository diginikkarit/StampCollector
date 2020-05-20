import React, { Component } from 'react'
import StampContainer from './StampContainer'

export default class StampListContainer extends Component {
    render() {
        return (
            <div>
                <p>This is stamp list container.</p>
                <StampContainer stamp={this.props.stampCollection[0]}/>
                <StampContainer stamp={this.props.stampCollection[1]}/>
                <StampContainer stamp={this.props.stampCollection[2]}/>
            </div>
        )
    }
}
