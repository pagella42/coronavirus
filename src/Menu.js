import React, { Component } from 'react';
import './Main.css';

class Menu extends Component {

  render() {
    return (
    
        <div id="body-cont">
          <div id="buttons">
            <div className="circle-cont">
              <div className="button-cont-1 circle-small">
                <img style={{ width: "12vw", height: "12vw" }} src={require("./components/info.png")} />
                <span className="menu-text">¿Que es?</span>
              </div>

            </div>

            <div className="circle-cont">
              <div className="button-cont-3 circle-big" onClick={()=>this.props.changePage("menu", "test")}>
                <img style={{ width: "17vw", height: "17vw" }} src={require("./components/test.png")} />

                <span className="menu-text">Realizar test</span>
              </div>
            </div>

            <div className="circle-cont">
              <div className="button-cont-2 circle-small">
                <img style={{ width: "12vw", height: "12vw" }} src={require("./components/prevencion.png")} />

                <span className="menu-text">¿Como prevenir?</span>
              </div>

            </div>


          </div>
        </div>
       
    )
  }


}

export default Menu;

