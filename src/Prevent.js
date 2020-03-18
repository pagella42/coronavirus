import React, { Component } from 'react';
import './Test.css';
import { Link } from "react-router-dom";

class Prevent extends Component {

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


                <div id="body-cont">

                    <div id="card">

                        <div id="question-box">
                            <span className="question-text">¿Qué podemos hacer para prevenirlo?</span>
                        </div>

                        <div id="card-body-info">
                            <span className="info-text">

                            Todas las medidas de prevención son ya conocidas por experiencias anteriores de
enfermedades parecidas al COVID-19, por ejemplo, la gripe común. Evitar o mitigar el
contagio del virus es una práctica de cuidado colectiva.
                            </span>
                            <span>
• Al toser y estornudar, cubrirse la boca y la nariz con el codo flexionado.
                            </span>
                            <span>

• Lavarse las manos con agua y jabón o usar alcohol en gel.
                            </span>
                            <span>
                                
• Limpiar las superficies de contacto frecuente con agua y lavandina.
                            </span>
                            <span>
• Evitar tocarse la cara con las manos.

                            </span>
                        </div>

                     

                    </div>

                </div>


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

export default Prevent;

