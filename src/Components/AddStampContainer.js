import React, { Component } from 'react'
import EditStampForm from './EditStampForm'
import DataManager from './DataManager'

export default class AddStampContainer extends Component {
    
    render() {
        DataManager.initDataManager()
        return (
            <div>
                This is add Stamp Container.
          
                <EditStampForm stamp={null} addStampToCollection={this.props.addStampToCollection}/>
            </div>
        )
    }
}
