import React, { Component } from 'react';
import './Test.css';

class Disclaimer extends Component {
    constructor() {
        super()
        this.state = {
            comtacted: null
        }
    }


    disclaimer(value) {
        this.setState({ disclaimer: value })
    }

    render() {

        return (

            <div id="body-cont">

                <div id="card">

                    <div id="question-box">
                        <span className="question-text-contact">COMPROBADOR DE SINTOMAS COVID-19 </span>
                        <span className="question-text-contact" >Aviso legal</span>
                    </div>

                    <div id="card-body-disclaimer">
                        <span className="disclaimer-text">
                        La herramienta que aquí te ofrecemos como Comprobador de Síntomas de coronavirus, en ningún caso
sustituye la consulta al médico. Es importante que siempre ante cualquier condición de salud, recurras a una
atención médica especializada.
</span>
<br/>
<span className="disclaimer-text">

El Comprobador de Síntomas de coronavirus pretende ser una herramienta de ayuda para orientar
principalmente a despejar dudas a personas que no tienen indicios suficientes para sospechar padecer esta
enfermedad, ayudando así a que no colapsen las guardias en hospitales y a reducir la visita a instituciones
medicas lo cual podría aumentar el riesgo a exposición a esta u otras enfermedades, y por otro lado a
reforzar y recordar las medidas preventivas que todo ciudadano debe tomar. En ningún caso tiene el objetivo
de hacer un diagnóstico de tu situación de salud, ni sustituye la consulta médica.
</span>
<br/>

<span className="disclaimer-text">

De estar de acuerdo y ser consciente de lo anterior, puede presionar el botón VER RESULTADO.
</span>
<br/>



                      
                    </div>

                    <div id="card-button-cont">
                        <div id="card-button" onClick={() => this.state.disclaimer !== null ? this.props.moveOn("showDisclaimer", "showResult", this.state.disclaimer, "disclaimer") : null}>
                            <span>
                                Ver resultado
              </span>
                        </div>
                    </div>

                </div>

            </div>

        )
    }


}

export default Disclaimer;

