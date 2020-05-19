import React, { Component } from 'react'

export default class StampContainerData extends Component {

    render() {
        return (
            <div className="StampContainerData">
                <div className="StampDataRowHeader">Name</div>
                <div className="StampDataRow">{this.props.stampData.name}</div>

                <div className="StampDataRowHeader">Year Published</div>
                <div className="StampDataRow">{this.props.stampData.yearPublished}</div>
                
                <div className="StampDataRowHeader">Is Stamped</div>
                <div className="StampDataRow">{String(this.props.stampData.isStamped)}</div>
            </div>
        )
    }
}
