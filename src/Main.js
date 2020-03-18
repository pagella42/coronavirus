import React, { Component } from 'react';
import './Main.css';
import Menu from './Menu';
import { Link } from "react-router-dom";
import Footer from './Footer';

class Main extends Component {

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
        <Menu />
       <Footer/>
      </div>
    )
  }


}

export default Main;

