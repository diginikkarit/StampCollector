import React, { Component } from 'react'
import EditStampForm from './EditStampForm'
import DataManager from './DataManager'

export default class AddStampContainer extends Component {
    
    render() {
        return (
            <div>
                This is add Stamp Container.       
                <EditStampForm stamp={DataManager.stampCollection[0]} addStampToCollection={this.props.addStampToCollection}/>
            </div>
        )
    }
}
