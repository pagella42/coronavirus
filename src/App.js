import React, {Component} from 'react';
import './App.css';
import Main from './Main';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import TestNav from './TestNav';
import Info from './Info';
import Prevent from './Prevent';
import ReactGA from 'react-ga';

class App extends Component{
  
  componentDidMount(){
    ReactGA.initialize('UA-160931930-1')
    ReactGA.pageview(window.location.pathname)
  }

  render(){
    return(
      <Router>
        <Route path="/" exact render={() => <Main/>} />
        <Route path="/test" exact render={() => <TestNav/>} />
        <Route path="/comoprevenir" exact render={() => <Prevent/>} />
        <Route path="/quees" exact render={() => <Info/>} />
    </Router>
    )
  }
   
  
}

export default App;
