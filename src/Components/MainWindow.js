import React, { Component } from 'react'
//import StampContainer from './StampContainer'
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
import StampListContainer from './StampListContainer'
import AboutContainer from './AboutContainer'
import SummaryContainer from './SummaryContainer'
import AddStampContainer from './AddStampContainer'

export default class MainWindow extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
             dataManager:this.props.dataManager,
             stampCollection:this.props.dataManager.stampCollection
        }
    }

    AddStampToCollection = (stamp) =>{
           stamp.StampToConsole();
           this.state.dataManager.addStampToCollection(stamp)
          this.UpdateCollection()
    }
    
    UpdateCollection = () => {
        console.log("Updated collection")
        this.setState({
            stampCollection:this.state.dataManager.stampCollection
        })
    }

    render() {
        var list = () => <StampListContainer stampCollection={this.state.stampCollection} />
        var about = () => <AboutContainer />
        var addStamp = (props) => {
        return <AddStampContainer stamp={props.location.stamp} addStampToCollection={this.AddStampToCollection} />
        }
        var summary = () => <SummaryContainer />
        return (
            <div className="col MainWindow">
                <Router>
                <div className="row">
                    <div className="col">
                        <Link className="RouterLink" to="/">List</Link> |
                        <Link className="RouterLink" to="/Summary">Summary</Link> |
                        <Link className="RouterLink" to="/addStamp">Add Stamp</Link> |
                        <Link className="RouterLink" to="/About">About</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Route exact path="/" component={list} />
                        <Route path="/Summary" component={summary} />
                        <Route path="/addStamp" component={addStamp} />
                        <Route path="/about" component={about} />
                    </div>
                </div>
                </Router>
            </div>
        )
    }
}
