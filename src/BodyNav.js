import React, { Component } from 'react';
import './Main.css';
import Menu from './Menu';
import TestNav from './TestNav';

class BodyNav extends Component {
constructor(){
    super()
    this.state={
        menu:true,
        test:false,
        info:false,
        prevention:false
    }
}

changePage=(from, to)=>{
  this.setState({[from]:false, [to]: true})
}
  render() {
    
    if(this.state.menu){
        return <Menu changePage={this.changePage}/>
    }
    else if(this.state.test){
      return  <TestNav/>
  }
    
  }


}

export default BodyNav;

