import React, { Component } from 'react'
import StampContainer from './StampContainer'

export default class MainWindow extends Component {
    render() {
        return (
            <div className="col-9 MainWindow">
                <p>this is the main window.</p>
                <StampContainer stamp={this.props.stampCollection[0]}/>
                <StampContainer stamp={this.props.stampCollection[1]}/>
                <StampContainer stamp={this.props.stampCollection[2]}/>
            </div>
        )
    }
}
