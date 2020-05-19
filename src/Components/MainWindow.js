import React, { Component } from 'react'
//import StampContainer from './StampContainer'
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
import StampListContainer from './StampListContainer'
import AboutContainer from './AboutContainer'
import SummaryContainer from './SummaryContainer'

export default class MainWindow extends Component {
    
  
    
    render() {

        var list = () => <StampListContainer stampCollection={this.props.stampCollection}/>
        var about = () => <AboutContainer />
        var summary = () => <SummaryContainer />
        return (
            <div className="col MainWindow">
                <Router>
                <div className="row">
                    <div className="col">
                        <Link className="RouterLink" to="/">List</Link> |
                        <Link className="RouterLink" to="/Summary">Summary</Link> |
                        <Link className="RouterLink" to="/About">About</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Route exact path="/" component={list} />
                        <Route path="/about" component={about} />
                        <Route path="/Summary" component={summary} />
                    </div>
                </div>
                </Router>
               
            </div>
        )
    }
}
