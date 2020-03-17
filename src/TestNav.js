import React, { Component } from 'react';
import './Test.css';
import Test from './Symptomps';
import Travel from './Travel';
import Contact from './Contact';
import { Link } from "react-router-dom";

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
      return(
        <div>
        <div id="header">
          <Link to="/">
          <div id="header-title">
            <div class="header-main">
              <span className="header-title-text">CORONAVIRUS</span>
              <img style={{ width: "4vw", height: "4vw" }} src={require("./components/virusicon.png")} />
            </div>
            <div className="header-subtitle">
              <span className="header-subtitle-text">Comproba tus síntomas ahora</span>

            </div>
          </div>
</Link>

        </div>
        {this.state.showSymtopms ?<Test moveOn={this.moveOn}/> : null }
        {this.state.showTraveled ?<Travel moveOn={this.moveOn}/> : null}
        {this.state.showContacted ?<Contact moveOn={this.moveOn}/> : null}

        <div id="footer">
          <span className="sponsors-text">SPONSORS</span>
          <span className="sponsors-text-big">{"{sponsor 1}"}</span>
          <span className="sponsors-text-big">{"{sponsor 2}"}</span>
          <span className="sponsors-text-big">{"{sponsor 3}"}</span>
        </div>
      </div>
      )
  }


}

export default TestNav;

