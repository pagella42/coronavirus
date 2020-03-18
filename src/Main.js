import React, { Component } from 'react';
import './Main.css';
import Menu from './Menu';
import { Link } from "react-router-dom";

class Main extends Component {

  render() {
    return (
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
        <Menu />
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

export default Main;

