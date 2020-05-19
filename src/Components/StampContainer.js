import React, { Component } from 'react'
import './StampContainer.css'
import StampData from './StampContainerData'
import StampImage from './StampContainerImage'

export default class StampContainer extends Component {
    
    constructor(){
        super()
        this.state = {
            showFull:false
        }
    }

    headerClicked = () =>{
        //var showFull = !this.state.showFull
        this.setState(
            {showFull:!this.state.showFull}
        )
    }
    
    render() {
        return (
            <div className="col StampContainer justify-content-center" onClick={this.headerClicked}>
                <div className="row">
                    <div className="col StampContainerHeader">
                        {this.props.stamp.name}
                    </div>
                </div>
               <div className="row" hidden={!this.state.showFull}>
                    <div className="col-4">
                    <StampImage imagePath={this.props.stamp.imageUrl} />
                    </div>
                    <div className="col-8">
                    <StampData stampData = {this.props.stamp}/>
                    </div>
                </div>
                                 
            </div>
        )
    }
}
