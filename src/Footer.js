import React, { Component } from 'react';
import './Main.css';
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from "react-share";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
class Footer extends Component {

    render() {
        return (
            <div id="footer">
                {/* <span className="sponsors-text">SPONSORS</span> */}
                <div className="icon-outter">
                    <div className="icon-inner">
                        <span className="share-text">
                            Compartir
                        </span>
                <WhatsappShareButton url={"https://www.test-coronavirus.com.ar/"}>
                    <FontAwesomeIcon className="whatsappIcon icon"  icon={faWhatsapp} />
                </WhatsappShareButton>
                <FacebookShareButton url={"https://www.test-coronavirus.com.ar/"} >
                    <FontAwesomeIcon className="facebookFIcon icon" icon={faFacebookSquare} />
                </FacebookShareButton>
                <TwitterShareButton url={"https://www.test-coronavirus.com.ar/"} >
                    <FontAwesomeIcon className="twitterIcon icon" icon={faTwitter} />
                    </TwitterShareButton>

                    </div>
                </div>
                <div className="footer-ref-cont">
                        <span className="footer-ref">
                    *Referencia: Organización Mundial de la Salud (OMS) - <a className="footer-link" href="https://www.who.int/health-topics/coronavirus">Ref 1</a> / <a className="footer-link" href="https://www.who.int/news-room/q-a-detail/q-a-coronaviruses">Ref 2</a>
                    </span>
                    <br/>
                    <span className="footer-ref">
                    * Referencia: <a className="footer-link" href="https://www.buenosaires.gob.ar/coronavirus">Protocolo Gobierno de la Ciudad de Buenos Aires </a> 
                    </span> 
                    </div>

            </div>
        )
    }


}

export default Footer;

