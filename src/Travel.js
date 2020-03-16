import React, { Component } from 'react';
import './Test.css';

class Travel extends Component {
  constructor() {
    super()
    this.state = {
      traveled: null
    }
  }


  traveled(value) {
    this.setState({ traveled: value })
  }

  render() {

    return (

      <div id="body-cont">

        <div id="card">

          <div id="question-box">
            <span className="question-text">¿Has estado o viajado los últimos 14 días en algunos de estos lugares?</span>
          </div>

          <div id="card-body-travel">

            <div id="travel-destinations">
              <span>
              España, Italia (todo el país), Francia, Alemania, China (todas las provincias, incluyendo Hong Kong y Macao), Corea del Sur, Japón, Singapur, Irán
              </span>
            </div>
            <div id="travel-box">
              <div className="symptom-row">
                <div id={this.state.traveled === true ? "selected-button" : "select-button"} onClick={() => this.traveled(true)} >
                  <span>{this.state.traveled=== true  ? "-" : "+"} </span>
                </div>
                <span>Si</span>
              </div>

              <div className="symptom-row">
                <div id={this.state.traveled === false ? "selected-button" : "select-button"} onClick={() => this.traveled(false)} >
                  <span>{this.state.traveled === false ?"-" : '+' }</span>
                </div>
                <span>No</span>
              </div>
            </div>
          </div>

          <div id="card-button-cont">
            <div id="card-button" onClick={() =>this.state.traveled !==null ?  this.props.moveOn("showTraveled", "showContacted", this.state.traveled, "traveled") : null}>
              <span>
                Siguiente
              </span>
            </div>
          </div>

        </div>

      </div>

    )
  }


}

export default Travel;

