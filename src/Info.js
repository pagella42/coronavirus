import React, { Component } from 'react';
import './Test.css';
import { Link } from "react-router-dom";
import Footer from './Footer';

class Info extends Component {

    render() {
        return (
            <div> <div id="header"> <Link to="/"> <div id="header-title"> <div class="header-main"> <span className="header-title-text">CORONAVIRUS</span> <img style={{width: "4vw", height: "4vw"}}src={require("./components/virusicon.png")}/> </div><div className="header-subtitle"> <span className="header-subtitle-text">Comprobá tus síntomas ahora</span> </div></div></Link> </div><div id="body-cont"> <div id="card"> <div id="question-box"> <span className="question-text">¿Qué es el coronavirus (COVID-19)?</span> </div><div id="card-body-info"> <span className="info-text"> Los coronavirus (CoV) son una gran familia de virus que causan enfermedades que van desde el resfriado común hasta enfermedades más graves, como el síndrome respiratorio de Medio Oriente (MERS-CoV) y el síndrome respiratorio agudo severo (SARS-CoV). </span><br/> <span className="info-text"> COVID-19 es la enfermedad infecciosa causada por el coronavirus descubierto más recientemente. Este nuevo virus y enfermedad eran desconocidos antes de que comenzara el brote en Wuhan, China, en diciembre de 2019.</span><br/> <span className="info-text"> Los coronavirus son zoonóticos, lo que significa que se transmiten entre animales y personas.</span><br/> <span className="info-text"> Los signos comunes de infección incluyen síntomas respiratorios, fiebre, tos y dificultades respiratorias. En casos más graves, la infección puede causar neumonía, síndrome respiratorio agudo severo, insuficiencia renal e incluso la muerte.</span><br/> <span style={{width:"100%", fontSize:"0.7em"}}> Referencia: Organización Mundial de la Salud (OMS) - https://www.who.int/health-topics/coronavirus / https://www.who.int/news-room/q-a-detail/q-a-coronaviruses </span><br/> </div></div></div><Footer/> </div>
        )
    }


}

export default Info;

