import React, { Component } from 'react';
import './Main.css';
import { Link } from "react-router-dom";

class Footer extends Component {

    render() {
        return (
                <div id="footer">
                    {/* <span className="sponsors-text">SPONSORS</span> */}
    
                    <div className="footer-ref-cont">
                        <span className="footer-ref">
                    *Referencia: Organización Mundial de la Salud (OMS) - <a className="footer-link" href="https://www.who.int/health-topics/coronavirus">Ref 1</a> / <a className="footer-link" href="https://www.who.int/news-room/q-a-detail/q-a-coronaviruses">Ref 2</a>
                    </span>
                    <br/>
                    <span className="footer-ref">
                    * Referencia: <a className="footer-link" href="https://www.buenosaires.gob.ar/sites/gcaba/files/protocolocoronaviruscaba_version10_16demarzo2020_8hs_1.pdf">Protocolo Gobierno de la Ciudad de Buenos Aires </a> 
                    </span> 
                    </div>
                   
                </div>
        )
    }


}

export default Footer;

