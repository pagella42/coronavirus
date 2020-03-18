import React, { Component } from 'react';
import './Test.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './Select.css';

class Numbers extends Component {
    constructor() {
        super()
        this.state = {
            value: "Elegií tu provincia",
            numbers :  {
                "Elegí tu provincia":null,
                "Ciudad de Buenos Aires":"107",
                "Provincia de Buenos Aires":"148",
                "Entre Ríos":"0800-555-6549",
                "Catamarca":"383-4238872",
                "Jujuy":"0800-888-4767",
                "La Pampa":"2954-619130",
                "​​La Rioja":"107",
                "​​Río Negro":"911",
                "Santiago del Estero (SEASE)":"107",
                "Santiago del Estero (Mirio Salud)":"385 4213006",
                "Santiago del Estero":"385 5237077​",
                "Córdoba":"107",
                "Santa Fe":"0800-555-6549",
                "Tucumán":"0800-555-8478",
                "Tucumán (WhatsApp)":"381-3899025",
                "Teléfono Mendoza (Covid)":"0800-800-26843",
                "Chaco":"0800-444-0829",
                "Corrientes":"107",
                "San Luis":"107",
                "San Juan":"107",
                "Salta":"911",
                "Chubut":"107",
                "Santa Cruz":"107",
                "Tierra del Fuego":"107",
                "Formosa":"107",
                "Misiones":"107",
            }
        }
    }
    handleChange = (e) => {
        this.props.updateNumber(this.state.numbers[e.target.value])
        
      }
    render() {
        let provincias = [
            "Elegí tu provincia",
            "Ciudad de Buenos Aires",
            "Provincia de Buenos Aires",
            "Entre Ríos",
            "Catamarca",
            "Jujuy",
            "La Pampa",
            "​​La Rioja",
            "​​Río Negro", 
            "Santiago del Estero (SEASE)",
            "Santiago del Estero (Mirio Salud)",
            "Santiago del Estero",
            "Córdoba",
            "Santa Fe",
            "Tucumán", 
            "Tucumán (WhatsApp)", 
            "Teléfono Mendoza (Covid)", 
            "Chaco",
            "Corrientes",
            "San Luis",
            "San Juan",
            "Salta", 
            "Chubut",
            "Santa Cruz",
            "Tierra del Fuego",
            "Formosa",
            "Misiones",
         ]
         
        return (
            <select className="select-css" defaultValue={this.state.value}
                onChange={this.handleChange}
            >
                {provincias.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
        )
    }


}

export default Numbers;

