import React, { Component } from 'react';
import './Test.css';

class Contact extends Component {
    constructor() {
        super()
        this.state = {
            contacted: null
        }
    }


    contacted(value) {
        this.setState({ contacted: value })
    }

    render() {

        return (

            <div id="body-cont">

                <div id="card">

                    <div id="question-box">
                        <span className="question-text-contact">¿Has tenido contacto estrecho con alguna
                        persona que sea un caso en estudio o
                                confirmado de coronavirus SARS-CoV-2?</span>
                    </div>

                    <div id="card-body-contact">

                        <div id="contact-options">
                            <span>
                                •Contacto estrecho significa alguna de estas situaciones:
                              </span>
                            <span>
                                •Vivir en la misma vivienda
                            </span>
                            <span>
                                •Tener contacto cara a cara. Ejemplo: una conversación de algunos minutos
                            </span>
                            <span>
                                •Si ha tosido cerca de usted
                            </span>
                            <span>
                                •Estar a menos de 2 metros de la persona durante más de 15 minutos
                            </span>
                            <span>
                                •Estar en contacto con sus secreciones (mucosidad, saliva, heces, orina, sangre,
                                vómitos, etc.)
                            </span>

                        </div>
                        <div id="travel-box">
                            <div className="symptom-row">
                                <div id={this.state.contacted === true ? "selected-button" : "select-button"} onClick={() => this.contacted(true)} >
                                    <span>{this.state.contacted === true ? "-" : "+"} </span>
                                </div>
                                <span>Si</span>
                            </div>

                            <div className="symptom-row">
                                <div id={this.state.contacted === false ? "selected-button" : "select-button"} onClick={() => this.contacted(false)} >
                                    <span>{this.state.contacted === false ? "-" : '+'}</span>
                                </div>
                                <span>No</span>
                            </div>
                        </div>
                    </div>

                    <div id="card-button-cont">
                        <div id="card-button" onClick={() => this.state.contacted !== null ? this.props.moveOn("showContacted", "showDisclaimer", this.state.contacted, "contacted") : null}>
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

export default Contact;

