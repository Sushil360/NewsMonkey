import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {

  pageSize=9;

  //918db18e13204e77b6bfdb4efcf059c3
  apiKey=process.env.REACT_APP_NEWS_API;

  state ={
    progress : 10
  }

  setProgress=(progress)=>{
    this.setState({progress: progress});
  }

  render() {
    return (
      <div>
        <Router>
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
          />
          <Navbar/>
          <Switch>
            <Route exact path="/home"><News setProgress={this.setProgress} apiKey={this.apiKey} key="home"  pageSize={this.pageSize} country='in' category='general'/></Route>
            {/*<Route exact path="/general"><News setProgress={this.state.setProgress}  key="general" pageSize={this.pageSize} country='in' category='general'/></Route>*/}
            <Route exact path="/business"><News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country='in' category='business'/></Route>
            <Route exact path="/entertainment"><News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country='in' category='entertainment'/></Route>
            <Route exact path="/sports"><News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country='in' category='sports'/></Route>
            <Route exact path="/science"><News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country='in' category='science'/></Route>
            <Route exact path="/health"><News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country='in' category='health'/></Route>
            <Route exact path="/technology"><News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country='in' category='technology'/></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
