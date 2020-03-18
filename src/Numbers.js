import React, { Component } from 'react';
import './Test.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

class Numbers extends Component {
 


  render() {
        // let provincias = [
        //     {name:"Ciudad de Buenos Aires", number:"107"}
        //     {name:"Provincia de Buenos Aires", number:"148"}
        //     {name:"Entre Ríos", number:"0800-555-6549"}
        //     {name:"Catamarca", number:"383-4238872"}
        //     {name:"", number:}
        //     {name:"", number:}
        //     {name:"", number:}
        //     {name:"", number:}
        //     {name:"", number:}
        //  ]
    return (
<Dropdown options={["caba","gba"]}  value={"caba"} placeholder="Elegí tu provincia" />
    )
  }


}

export default Numbers;

