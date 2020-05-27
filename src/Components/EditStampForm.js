import React, { Component } from 'react'
import {Stamp} from './Stamp'
import StampContainerImage from './StampContainerImage'
import './EditStampForm.css'

export default class EditStampForm extends Component {
    
 

    constructor(props) {
        super(props)
        
        //let stamp = this.props.stamp
        
        this.test = this.props.addStampToCollection
        //To use this as an update form and for adding, it is needed to check is there is a 
        //stamp provided for editing.
        console.log("Loaded page")
            this.state = {
                stamp:this.props.stamp,
                stampId:(this.props.stamp != null) ? this.props.stamp.id : "",
                stampName:(this.props.stamp != null) ? this.props.stamp.name : "",
                stampPrice:(this.props.stamp != null) ? this.props.stamp.price : "",
                stampYearPublished:(this.props.stamp != null) ? this.props.stamp.yearPublished:"",
                stampCountry:(this.props.stamp != null) ? this.props.stamp.country:"",
                stampImageUrl:(this.props.stamp != null) ? this.props.stamp.imageUrl:""
                
        }
    }

    test(){

    }

    SetStampToState(stamp){
        
        this.setState ({
            stampName:stamp.name,
            stampPrice:22 ,
        })
    }

    componentDidMount(){
        console.log(this.props.stamp)
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
    
    imageUrlChanged = (event) =>{
       
        this.setState({
            stampImageUrl:event.target.value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.CheckImage(this.state.stampImageUrl,this.HandleStampAdding)
    }
    
    CheckImage = (imageUrl,imageOKFunction) =>{
        var img = new Image();
        img.src =imageUrl;
        img.onload = () =>  {imageOKFunction()}
        img.onerror=() => alert("Image was not valid!")
    }

    HandleStampAdding = () =>{

        let id = this.state.stampId;
        if(id === ""){
            id=null
        }

        console.log("Submited")
        let name = this.state.stampName
        if(name === ""){
            name="Stamp has no name"
        } 
        let price = parseFloat(this.state.stampPrice)
        if(isNaN(price) === true){
            console.log("in NaN")
            price = parseFloat(0.0)
        }
        this.setState(  {
            stampPrice:price
        })
        
        let yearPublished = this.state.stampYearPublished
        let country = this.state.stampCountry
        if(this.state.stampCountry === ""){
            alert("You have to give coutry!")
            return;
        }
        let isStamped = this.state.stampIsStamped
        if(isStamped === undefined){
            isStamped = true;
        } 
        let imgUrl = this.state.stampImageUrl
        let stamp = new Stamp(id,name,yearPublished,isStamped,imgUrl,country,price)
        

        //this.state.addStampToCollection(stamp)
        this.test(stamp)
        console.log(this.props.stamp)
    }

    ImageContainer = () => {
        if(this.state.stampImageUrl === ""){
            return <p>no picture provided</p>
        }
        else{
           return <StampContainerImage imagePath={this.state.stampImageUrl}/>
        }
    }
    
    render() {
        return (
            <div>
                {/* image */}
                <div className='row ImageRow justify-content-center'>
                    
                    <div className='col-4 center'>
                        {this.ImageContainer()}
                    </div>
                </div>

                {/* form */}
                <div className='row'>
                    <div className='col'>
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
                            <div className='row'>
                                <div className='col'>
                                    Image URL:        
                                </div> 
                                <div className='col'>
                                <input type="text" value={this.state.stampImageUrl} onChange={this.imageUrlChanged}></input>

                                </div> 
                            </div>
                        <button type="submit">submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
