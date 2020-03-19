import React, { Component } from 'react';
import './Test.css';
import ReactGA from 'react-ga';
import Numbers from './Numbers'
class Result extends Component {
  constructor() {
    super()
    this.state = {
      answer: null,
      selectedNumber: null
    }
  }

  componentDidMount() {
    this.runResults()
  }
  updateNumber = (number) => {
    this.setState({ selectedNumber: number })
  }
  sendResults(result) {
    ReactGA.event({
      category: "Result",
      action: result
    })
  }
  runResults() {
    let symptoms = this.props.data.symptoms.fiebre || this.props.data.symptoms.tos || this.props.data.symptoms.respiratorio || this.props.data.symptoms.malestar ? true : false
    let traveled = this.props.data.traveled
    let contacted = this.props.data.contacted

    if (!symptoms && !traveled && !contacted) {
      this.setState({ answer: 0 })
      this.sendResults("nada")
    }
    else if (symptoms && !traveled && !contacted) {
      this.setState({ answer: 1 })
      this.sendResults("sintomas")
    }
    else if (!symptoms && !traveled && contacted) {
      this.setState({ answer: 2 })
      this.sendResults("contacto")
    }
    else if (symptoms && !traveled && contacted) {
      this.setState({ answer: 3 })
      this.sendResults("sintomas, contacto")
    }
    else if (!symptoms && traveled && !contacted) {
      this.setState({ answer: 4 })
      this.sendResults("viaje")
    }
    else if (symptoms && traveled && !contacted) {
      this.setState({ answer: 5 })
      this.sendResults("sintomas, viaje")

    }
    else if (!symptoms && traveled && contacted) {
      this.setState({ answer: 6 })
      this.sendResults("viaje, contacto")

    }
    else if (symptoms && traveled && contacted) {
      this.setState({ answer: 7 })
      this.sendResults("sintomas, viaje, contacto")

    }
  }

  render() {

    return (

      <div id="body-cont"> <div id="card-disclaimer"> <div id="question-box"> <span className="question-text">{this.state.answer===0 ? "No te preocupes, en tu caso, no hay sospecha de infección por coronavirus." : null}{this.state.answer===1 ? "No te preocupes, en tu caso, no hay sospecha de infección por coronavirus." : null}{this.state.answer===2 ? "No te preocupes, en tu caso, no hay sospecha de infección por coronavirus." : null}{this.state.answer===3 ? "En tu caso podría haber sospecha de infección por coronavirus." : null}{this.state.answer===4 ? "No te preocupes, en tu caso, no hay sospecha de infección por coronavirus." : null}{this.state.answer===5 ? "En tu caso podría haber sospecha de infección por coronavirus." : null}{this.state.answer===6 ? "No te preocupes, en tu caso, no hay sospecha de infección por coronavirus." : null}{this.state.answer===7 ? "En tu caso podría haber sospecha de infección por coronavirus." : null}</span> </div>{this.state.answer===0 ? <div id="card-body-disclaimer"> <span className="disclaimer-text"> Igual, es importante que recuerdes las medidas de prevención: </span><br/> <span className="disclaimer-text">•Al toser o estornudar, tapate la boca y la nariz con el codo flexionado.</span><br/> <span className="disclaimer-text">•Lavate las manos con agua y jabón o con alcohol en gel.</span><br/> <span className="disclaimer-text">•Evitá tocarte los ojos, la nariz y la boca con las manos.</span><br/> <span className="disclaimer-text">•No compartas bebidas, alimentos, vajillas, ni objetos personales con nadie.</span><br/> <span className="disclaimer-text">•Lavá con agua y lavandina las superficies de contacto como escritorios o picaportes.</span><br/> <span className="disclaimer-text">•Y tratá de no comer productos animales crudos o poco cocinados.</span><br/> </div>: null}{this.state.answer===1 ? <div id="card-body-disclaimer"> <span className="disclaimer-text"> Igual, es importante que recuerdes las medidas de prevención: </span><br/> <span className="disclaimer-text">•Al toser o estornudar, tapate la boca y la nariz con el codo flexionado.</span><br/> <span className="disclaimer-text">•Lavate las manos con agua y jabón o con alcohol en gel.</span><br/> <span className="disclaimer-text">•Evitá tocarte los ojos, la nariz y la boca con las manos.</span><br/> <span className="disclaimer-text">•No compartas bebidas, alimentos, vajillas, ni objetos personales con nadie.</span><br/> <span className="disclaimer-text">•Lavá con agua y lavandina las superficies de contacto como escritorios o picaportes.</span><br/> <span className="disclaimer-text">•Y tratá de no comer productos animales crudos o poco cocinados.</span><br/> </div>: null}{this.state.answer===2 ? <div id="card-body-disclaimer"> <span className="disclaimer-text"> Igual, es importante que recuerdes las medidas de prevención: </span><br/> <span className="disclaimer-text">•Al toser o estornudar, tapate la boca y la nariz con el codo flexionado.</span><br/> <span className="disclaimer-text">•Lavate las manos con agua y jabón o con alcohol en gel.</span><br/> <span className="disclaimer-text">•Evitá tocarte los ojos, la nariz y la boca con las manos.</span><br/> <span className="disclaimer-text">•No compartas bebidas, alimentos, vajillas, ni objetos personales con nadie.</span><br/> <span className="disclaimer-text">•Lavá con agua y lavandina las superficies de contacto como escritorios o picaportes.</span><br/> <span className="disclaimer-text">•Y tratá de no comer productos animales crudos o poco cocinados.</span><br/> </div>: null}{this.state.answer===3 ? <div id="card-body-disclaimer"> <br/> <span className="disclaimer-text"> •No te alarmes, es importante para definir los pasos a seguir, eligas tu provincia y llames al numero definido.<br/> Ahí, un equipo especializado va a articular los cuidados que necesitás. <br/><br/><br/> •Según el decreto nacional, por favor mantenete en tu domicilio y aislado de las personas que vivan con vos, hasta recibir las indicaciones por parte del equipo de profesionales. </span><br/> <div className="call-cont"> <Numbers updateNumber={this.updateNumber}/> <br/>{this.state.selectedNumber !==null ? <span className="number-text">LLamá al{this.state.selectedNumber}</span> : null}<br/>{this.state.selectedNumber !==null ? <a href={`tel:${this.state.selectedNumber}`}className="call-link"> <div className="call"> <span className="disclaimer-text">Llamar</span> </div></a> : null}</div></div>: null}{this.state.answer===4 ? <div id="card-body-disclaimer"> <br/> <span className="disclaimer-text"> Los próximos 14 días continúa controlando la posible aparición de síntomas y sigue los consejos de prevención: </span><br/> <span className="disclaimer-text"> •Lávate las manos frecuentemente (con agua y jabón o soluciones alcohólicas 70%), especialmente después del contacto directo con personas enfermas o su entorno. </span><br/> <span className="disclaimer-text"> •Tápate la boca y la nariz con pañuelos desechables o con la cara interna del codo en el momento de toser o estornudar y lava las manos enseguida (con soluciones alcohólicas 70% o con agua y jabón). </span><br/> <span className="disclaimer-text"> •Evita el contacto cercano (menos una distancia de dos metros) con personas que padecen infecciones respiratorias agudas y presentan tos, estornudos o expectoraciones, y no compartas las pertenencias personales. </span><br/> <span className="disclaimer-text"> •Evita compartir comida y utensilios (cubiertos, vasos, servilletas, pañuelos, etc.) y otros objetos sin limpiarlos debidamente. </span><br/> </div>: null}{this.state.answer===5 ? <div id="card-body-disclaimer"> <br/> <span className="disclaimer-text"> •No te alarmes, es importante para definir los pasos a seguir, eligas tu provincia y llames al numero definido.<br/> Ahí, un equipo especializado va a articular los cuidados que necesitás. <br/><br/><br/> •Según el decreto nacional, por favor mantenete en tu domicilio y aislado de las personas que vivan con vos, hasta recibir las indicaciones por parte del equipo de profesionales. </span><br/> <div className="call-cont"> <Numbers updateNumber={this.updateNumber}/> <br/>{this.state.selectedNumber !==null ? <span className="number-text">LLamá al{this.state.selectedNumber}</span> : null}<br/>{this.state.selectedNumber !==null ? <a href={`tel:${this.state.selectedNumber}`}className="call-link"> <div className="call"> <span className="disclaimer-text">Llamar</span> </div></a> : null}</div></div>: null}{this.state.answer===6 ? <div id="card-body-disclaimer"> <br/> <span className="disclaimer-text"> Los próximos 14 días continúa controlando la posible aparición de síntomas y sigue los consejos de prevención: </span><br/> <span className="disclaimer-text"> •Lávate las manos frecuentemente (con agua y jabón o soluciones alcohólicas 70%), especialmente después del contacto directo con personas enfermas o su entorno. </span><br/> <span className="disclaimer-text"> •Tápate la boca y la nariz con pañuelos desechables o con la cara interna del codo en el momento de toser o estornudar y lava las manos enseguida (con soluciones alcohólicas 70% o con agua y jabón). </span><br/> <span className="disclaimer-text"> •Evita el contacto cercano (menos una distancia de dos metros) con personas que padecen infecciones respiratorias agudas y presentan tos, estornudos o expectoraciones, y no compartas las pertenencias personales. </span><br/> <span className="disclaimer-text"> •Evita compartir comida y utensilios (cubiertos, vasos, servilletas, pañuelos, etc.) y otros objetos sin limpiarlos debidamente. </span><br/> </div>: null}{this.state.answer===7 ? <div id="card-body-disclaimer"> <br/> <span className="disclaimer-text"> •No te alarmes, es importante para definir los pasos a seguir, eligas tu provincia y llames al numero definido.<br/> Ahí, un equipo especializado va a articular los cuidados que necesitás. <br/><br/><br/> •Según el decreto nacional, por favor mantenete en tu domicilio y aislado de las personas que vivan con vos, hasta recibir las indicaciones por parte del equipo de profesionales. </span><br/> <div className="call-cont"> <Numbers updateNumber={this.updateNumber}/> <br/>{this.state.selectedNumber !==null ? <span className="number-text">LLamá al{this.state.selectedNumber}</span> : null}<br/>{this.state.selectedNumber !==null ? <a href={`tel:${this.state.selectedNumber}`}className="call-link"> <div className="call"> <span className="disclaimer-text">Llamar</span> </div></a> : null}</div></div>: null}</div></div>
    )
  }


}

export default Result;

