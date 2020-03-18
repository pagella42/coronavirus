import React, { Component } from 'react';
import './Test.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

class Numbers extends Component {
 


  render() {
        let provincias = [
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
         let numbers =  [
            {name:"Ciudad de Buenos Aires", number:"107"},
            {name:"Provincia de Buenos Aires", number:"148"},
            {name:"Entre Ríos", number:"0800-555-6549"},
            {name:"Catamarca", number:"383-4238872"},
            {name:"Jujuy", number:"0800-888-4767"},
            {name:"La Pampa", number:"2954-619130"},
            {name:"​​La Rioja", number:"107"},
            {name:"​​Río Negro", number:"911"},
            {name:"Santiago del Estero (SEASE)", number:"107"},
            {name:"Santiago del Estero (Mirio Salud)", number:"385 4213006"},
            {name:"Santiago del Estero", number:"385 5237077​"},
            {name:"Córdoba", number:"107"},
            {name:"Santa Fe", number:"0800-555-6549"},
            {name:"Tucumán", number:"0800-555-8478"},
            {name:"Tucumán (WhatsApp)", number:"381-3899025"},
            {name:"Teléfono Mendoza (Covid)", number:"0800-800-26843"},
            {name:"Chaco", number:"0800-444-0829"},
            {name:"Corrientes", number:"107"},
            {name:"San Luis", number:"107"},
            {name:"San Juan", number:"107"},
            {name:"Salta", number:"911"},
            {name:"Chubut", number:"107"},
            {name:"Santa Cruz", number:"107"},
            {name:"Tierra del Fuego", number:"107"},
            {name:"Formosa", number:"107"},
            {name:"Misiones", number:"107"},
         ]
    return (
<Dropdown options={provincias}  value={"Elegí tu provincia"} placeholder="Elegí tu provincia" />
    )
  }


}

export default Numbers;

