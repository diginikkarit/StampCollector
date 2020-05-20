import React, { Component } from 'react'
import EditStampForm from './EditStampForm'

export default class AddStampContainer extends Component {
    
    render() {
        return (
            <div>
                This is add Stamp Container.       
                <EditStampForm stamp={null} addStampToCollection={this.props.addStampToCollection}/>
            </div>
        )
    }
}
