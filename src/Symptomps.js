import React, { Component } from 'react';
import './Test.css';

class Symtomps extends Component {
  constructor() {
    super()
    this.state = {
    fiebre:false,
    tos:false,
    respiratorio:false,
    malestar:false
    }
  }


loadValue(value, data){
this.setState({[value]: data})
}

  render(){
    let data = 
    { fiebre:this.state.fiebre,
      tos:this.state.tos,
      respiratorio:this.state.respiratorio,
      malestar:this.state.malestar}
    return (

      <div id="body-cont">

        <div id="card">
          <div id="question-box">

            <span className="question-text">Selecciona si tenes alguno de estos sintomas</span>
          </div>
          <div id="card-body">

            <div id="symptoms-box">
              <div className="symptom-row">
                <div id={this.state.fiebre ? "selected-button" : "select-button"} onClick={()=>this.loadValue("fiebre",!this.state.fiebre)}>
                  <span>
                  {this.state.fiebre ? "-" : "+"}
                  </span>
                </div>
                <span>Fiebre</span>
              </div>

              <div className="symptom-row">
                <div id={this.state.tos ? "selected-button" : "select-button"} onClick={()=>this.loadValue("tos",!this.state.tos)} >
                  <span>
                  {this.state.tos ? "-" : "+"}
              </span>
                </div>
                <span>Tos</span>
              </div>

              <div className="symptom-row">
                <div id={this.state.respiratorio ? "selected-button" : "select-button"} onClick={()=>this.loadValue("respiratorio",!this.state.respiratorio)} >
                  <span>
                  {this.state.respiratorio ? "-" : "+"}
              </span>
                </div>
                <span>Dificultad respiratoria</span>
              </div>

              <div className="symptom-row">
                <div id={this.state.malestar ? "selected-button" : "select-button"} onClick={()=>this.loadValue("malestar",!this.state.malestar)} >
                  <span>
                  {this.state.malestar ? "-" : "+"}
              </span>
                </div>
                <span>Malestar general</span>
              </div>
            </div>

          </div>
          <div id="card-button-cont">
  
            <div id="card-button" onClick={()=>this.props.moveOn("showSymtopms","showTraveled",data, "symptoms")}>
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

export default Symtomps;

