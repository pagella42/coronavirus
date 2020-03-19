import React, { Component } from 'react';
import './Main.css';
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    WhatsappShareButton,
  } from "react-share";
class Footer extends Component {

    render() {
        return (
                <div id="footer">
                    {/* <span className="sponsors-text">SPONSORS</span> */}
                    <FacebookShareButton url={"https://www.test-coronavirus.com.ar/"} />
                    {/* <div className="footer-ref-cont">
                        <span className="footer-ref">
                    *Referencia: Organización Mundial de la Salud (OMS) - <a className="footer-link" href="https://www.who.int/health-topics/coronavirus">Ref 1</a> / <a className="footer-link" href="https://www.who.int/news-room/q-a-detail/q-a-coronaviruses">Ref 2</a>
                    </span>
                    <br/>
                    <span className="footer-ref">
                    * Referencia: <a className="footer-link" href="https://www.buenosaires.gob.ar/coronavirus">Protocolo Gobierno de la Ciudad de Buenos Aires </a> 
                    </span> 
                    </div> */}
                   
                </div>
        )
    }


}

export default Footer;

