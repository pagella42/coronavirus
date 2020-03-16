import React, {Component} from 'react';
import './App.css';
import Main from './Main';

class App extends Component{
  componentWillMount() {
    document.title = 'Corona virus'
  }
  render(){
    return(
     <Main/>
    )
  }
   
  
}

export default App;
