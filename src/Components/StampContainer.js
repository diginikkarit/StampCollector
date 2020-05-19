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
            <div className="col-6 StampContainer  justify-content-center">
                <div className="row">
                    <div className="col StampContainerHeader" onClick={this.headerClicked}>
                        {this.props.stamp.name}
                    </div>
                </div>
               <div className="row" hidden={!this.state.showFull}>
                    <div className="col-6">
                    <StampImage imagePath={this.props.stamp.imageUrl} />
                    </div>
                    <div className="col-6">
                    <StampData stampData = {this.props.stamp}/>
                    </div>
                </div>
                                 
            </div>
        )
    }
}
