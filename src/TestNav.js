import React, { Component } from 'react';
import './Test.css';
import Symptoms from './Symptoms';
import Travel from './Travel';
import Contact from './Contact';
import { Link } from "react-router-dom";
import Result from './Result';
import Disclaimer from './Disclaimer';
import ReactGA from 'react-ga';

class TestNav extends Component {
  constructor() {
    super()
    this.state = {
      showSymptoms: true,
      showTraveled: false,
      showContact: false,
      showDisclaimer: false,
      showResult: false,
      symptoms: {},
      traveled: false,
      contacted: false,
    }
  }

  componentDidMount(){
    // ReactGA.initialize('UA-160931930-1');
    // ReactGa.pageview("/test")
  }

  moveOn = (from, to, data, dataKey) => {
    this.setState({ [to]: true, [from]: false, [dataKey]: data })
  }
  render() {
    return (
      <div>
        <div id="header">
          <Link to="/">
            <div id="header-title">
              <div className="header-main">
                <span className="header-title-text">CORONAVIRUS</span>
                <img style={{ width: "4vw", height: "4vw" }} src={require("./components/virusicon.png")} />
              </div>
              <div className="header-subtitle">
                <span className="header-subtitle-text">Comproba tus síntomas ahora</span>

              </div>
            </div>
          </Link>

        </div>
        {this.state.showSymptoms ? <Symptoms moveOn={this.moveOn} /> : null}
        {this.state.showTraveled ? <Travel moveOn={this.moveOn} /> : null}
        {this.state.showContacted ? <Contact moveOn={this.moveOn} /> : null}
        {this.state.showDisclaimer ? <Disclaimer moveOn={this.moveOn}/> : null}
        {this.state.showResult? <Result data={{symptoms:this.state.symptoms, traveled:this.state.traveled, contacted:this.state.contacted}}/> : null}

        <div id="footer">
          <span className="sponsors-text">SPONSORS</span>
          <span className="sponsors-text-big">{"{sponsor 1}"}</span>
          <span className="sponsors-text-big">{"{sponsor 2}"}</span>
          {/* <span className="sponsors-text-big">{"{sponsor 3}"}</span> */}
        </div>
      </div>
    )
  }


}

export default TestNav;

