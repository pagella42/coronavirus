import React, { Component } from 'react';
import './Main.css';
import BodyNav from './BodyNav';

class Main extends Component {

  render() {
    return (
      <div>
        <div id="header">
          <div id="header-title">
            <div class="header-main">
              <span className="header-title-text">CORONAVIRUS</span>
              <img style={{ width: "4vw", height: "4vw" }} src={require("./components/virusicon.png")} />
            </div>
            <div className="header-subtitle">
              <span className="header-subtitle-text">Comproba tus síntomas ahora</span>

            </div>
          </div>


        </div>
        <BodyNav/>
        <div id="footer">
          <span className="sponsors-text">SPONSORS</span>
          <span className="sponsors-text-big">OSDE</span>
          <span className="sponsors-text-big">SANOFI</span>
          <span className="sponsors-text-big">MEDICUS</span>
          <span className="sponsors-text-big">LARRETA</span>
        </div>
      </div>
    )
  }


}

export default Main;

