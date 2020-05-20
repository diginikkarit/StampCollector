import React, { Component } from 'react'

export default class EditStampForm extends Component {
    
    constructor(props) {
        super(props)
        
        let stamp = this.props.stamp

        console.log(this.props.stamp)
        
        //To use this as an update form and for adding, it is needed to check is there is a 
        //stamp provided for editing.
            this.state = {
                stampName:(stamp != null) ? stamp.name : "",
                stampPrice:(stamp != null) ? stamp.price : "",
                stampYearPublished:(stamp != null) ? stamp.yearPublished:"",
                 stampCountry:(stamp != null) ? stamp.country:"",
                 stampIsStamped:(stamp != null) ? stamp.isStamped:""
        }
    }

    nameChanged = (event) =>{
        this.setState({
            stampName:event.target.value
        })
    }

    priceChanged = (event) =>{
        this.setState({
            stampPrice:event.target.value
        })
    }

    countryChanged = (event) =>{
        this.setState({
            stampCountry:event.target.value
        })
    }
    
    yearPublishedChanged = (event) =>{
        this.setState({
            stampYearPublished:event.target.value
        })
    }

    isStampedChanged = (event) =>{
        this.setState({
            stampIsStamped:event.target.value
        })
    }

    handleSubmit = (event) => {
        console.log("Submited")
    
        this.props.addStampToCollection("jee")
        event.preventDefault();
    }
    
    render() {
        return (
            <div >
                <form onSubmit={this.handleSubmit}>
                    <div className='row'>
                        <div className='col'>
                            name:
                        </div> 
                        <div className='col'>
                            <input type="text" value={this.state.stampName} onChange={this.nameChanged}></input>
                        </div> 
                    </div>

                    <div className='row'>
                        <div className='col'>
                            price: 
                        </div> 
                        <div className='col'>
                            <input type="text" value={this.state.stampPrice} onChange={this.priceChanged}></input>
                            </div> 
                    </div>

                    <div className='row'>
                        <div className='col'>
                            country: 
                        </div> 
                        <div className='col'>
                            <input type="text" value={this.state.stampCountry} onChange={this.countryChanged}></input>
                        </div> 
                    </div>

                    <div className='row'>
                        <div className='col'>
                            year Published:
                        </div> 
                        <div className='col'>
                            <input type="text" value={this.state.stampYearPublished} onChange={this.yearPublishedChanged}></input>
                        </div> 
                    </div>

                    
                    <div className='row'>
                        <div className='col'>
                            stamped:        
                        </div> 
                        <div className='col'>
                            <select value={this.state.stampIsStamped} onChange={this.isStampedChanged}>
                                <option value="true">true</option>
                                <option value="false">false</option>
                            </select>
                        </div> 
                    </div>
                <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}
