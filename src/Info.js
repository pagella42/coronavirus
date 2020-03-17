import React, { Component } from 'react';
import './Test.css';
import { Link } from "react-router-dom";

class Info extends Component {

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
                            <span className="question-text">¿Qué es el coronavirus (COVID-19)?</span>
                        </div>

                        <div id="card-body-info">
                            <span className="info-text">Es una enfermedad causada por un virus que se transmite a través de las gotas de
                            estornudos y tos, y del contacto con manos a ojos, boca y nariz.
                            Los primeros casos se detectaron en diciembre en personas que habían estado en un
                            mercado de pescado de la ciudad de Wuhan, China, donde también se venden otros
                            animales –especialmente aves y serpientes. Como otros coronavirus, el COVID-19 es un
                            virus procedente de otra especie que ha adquirido la capacidad de infectar a las personas.
La especie de la que procede aún no se ha identificado.</span>
                        </div>

                        

                    </div>

                </div>


                <div id="footer">
                    <span className="sponsors-text">SPONSORS</span>
                    <span className="sponsors-text-big">{"{sponsor 1}"}</span>
                    <span className="sponsors-text-big">{"{sponsor 2}"}</span>
                    <span className="sponsors-text-big">{"{sponsor 3}"}</span>
                </div>
            </div>
        )
    }


}

export default Info;

