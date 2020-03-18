import React, { Component } from 'react';
import './Main.css';
import { Link } from "react-router-dom";
import ReactGA from 'react-ga';

class Menu extends Component {
  

  startTest(){
    ReactGA.event({
      category:"Button",
      action:"Open test"
    })
  }


  render() {
    return (

      <div id="body-cont">
        <div id="buttons">

          <Link to="/quees"> 
            <div className="circle-cont">
              <div className="button-cont-1 circle-small"> 
                <img style={{ width: "12vw", height: "12vw" }} src={require("./components/info.png")} />
                <div class="menu-text-box">
                  <span className="menu-text">¿Que es?</span>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/test">
            <div onClick={this.startTest} className="circle-cont">
              <div className="button-cont-3 circle-big" >
                <img style={{ width: "17vw", height: "17vw" }} src={require("./components/test.png")} />
                <div class="menu-text-box">
                  <span className="menu-text">Realizar test</span>

                </div>
              </div>
            </div>
          </Link>

        <Link to="comoprevenir">
          <div className="circle-cont">
            <div className="button-cont-2 circle-small">
              <img style={{ width: "12vw", height: "12vw" }} src={require("./components/prevencion.png")} />
              <div class="menu-text-box">

                <span className="menu-text">¿Como prevenir?</span>
              </div>
            </div>

          </div>
          </Link>

        </div>
      </div>

    )
  }


}

export default Menu;

