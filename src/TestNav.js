import React, { Component } from 'react';
import './Test.css';
import Test from './Symptomps';
import Travel from './Travel';
import Contact from './Contact';

class TestNav extends Component {
  constructor() {
    super()
    this.state = {
      showSymtopms: true,
      showTraveled: false,
      showContact: false,
      symtopms:{},
      traveled:false,
      contacted:false,
    }
  }
moveOn=(from,to, data, dataKey)=>{
this.setState({[to]:true, [from]:false, [dataKey]:data})
}
  render() {
    if(this.state.showSymtopms){
        return <Test moveOn={this.moveOn}/>
    }
    else if(this.state.showTraveled){
        return <Travel moveOn={this.moveOn}/>
    }
    else if(this.state.showContacted){
        return <Contact moveOn={this.moveOn}/>
    }
  }


}

export default TestNav;

