import React, { Component } from 'react';
import './Test.css';
import { Link } from "react-router-dom";
import Footer from './Footer';

class Prevent extends Component {

    render() {
        return (
            <div> <div id="header"> <Link to="/"> <div id="header-title"> <div class="header-main"> <span className="header-title-text">CORONAVIRUS</span> <img style={{width: "4vw", height: "4vw"}}src={require("./components/virusicon.png")}/> </div><div className="header-subtitle"> <span className="header-subtitle-text">Comprobá tus síntomas ahora</span> </div></div></Link> </div><div id="body-cont"> <div id="card"> <div id="question-box"> <span className="question-text">¿Qué podemos hacer para prevenirlo?</span> </div><div id="card-body-info"> <span className="info-text"> Puede reducir sus posibilidades de infectarse o propagar COVID-19 tomando algunas precauciones simples: </span><br/> <span className="info-text"> •Limpie sus manos regularmente y a fondo con un desinfectante para manos a base de alcohol o lávelas con agua y jabón.</span><br/> <span className="info-text"> •Mantenga al menos 1 metro de distancia entre usted y cualquier persona que esté tosiendo o estornudando.</span><br/> <span className="info-text"> •Evite tocarse los ojos, la nariz y la boca.</span><br/> <span className="info-text"> •Asegúrese de que usted y las personas que lo rodean sigan una buena higiene respiratoria. Esto significa cubrirse la boca y la nariz con el codo o pañuelo doblado cuando tose o estornuda. Luego deseche el tejido usado inmediatamente.</span><br/> <span className="info-text"> •Quédese en casa si no se siente bien. Si tiene fiebre, tos y dificultad para respirar, busque atención médica y llame con anticipación. Siga las instrucciones de su autoridad de salud local.</span><br/> <span style={{width:"100%", fontSize:"0.7em"}}> Referencia: Organización Mundial de la Salud (OMS) - https://www.who.int/news-room/q-a-detail/q-a-coronaviruses</span><br/> </div></div></div><Footer/> </div>
        )
    }


}

export default Prevent;

