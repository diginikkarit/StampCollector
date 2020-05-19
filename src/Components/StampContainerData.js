import React, { Component } from 'react'
import {Stamp} from './Stamp.js'


export default class StampContainerData extends Component {

    render() {

        var stamp = new Stamp();
        Object.assign(stamp, this.props.stampData )

        return (
            <div className="StampContainerData">
                <div className="StampDataRowHeader">Name</div>
                <div className="StampDataRow">{stamp.name}</div>

                <div className="StampDataRowHeader">Price</div>
                <div className="StampDataRow">{stamp.GetPriceString()} €</div>

                <div className="StampDataRowHeader">Country</div>
                <div className="StampDataRow">{stamp.country}</div>
                

                <div className="StampDataRowHeader">Year Published</div>
                <div className="StampDataRow">{stamp.yearPublished}</div>
                
                <div className="StampDataRowHeader">Is Stamped</div>
                <div className="StampDataRow">{String(stamp.isStamped)}</div>
            </div>
        )
    }
}
