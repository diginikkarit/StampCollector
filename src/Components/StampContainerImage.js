import React, { Component } from 'react'

export default class StampImage extends Component {
    render() {
        return (
            <div className="StampContainerImage">
                <img src={this.props.imagePath} alt="StampPic"/>
            </div>
        )
    }
}
