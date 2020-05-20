import React, { Component } from 'react'
//import StampContainer from './StampContainer'
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
import StampListContainer from './StampListContainer'
import AboutContainer from './AboutContainer'
import SummaryContainer from './SummaryContainer'
import AddStampContainer from './AddStampContainer'

export default class MainWindow extends Component {

    render() {

        var list = () => <StampListContainer stampCollection={this.props.dataManager.stampCollection}/>
        var about = () => <AboutContainer />
        var addStamp = () => <AddStampContainer addStampToCollection={this.props.dataManager.addStampToCollection} />
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
