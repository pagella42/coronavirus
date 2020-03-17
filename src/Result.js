import React, { Component } from 'react';
import './Test.css';

class Result extends Component {
  constructor() {
    super()
    this.state = {
      answer: null
    }
  }

  componentDidMount() {
    this.runResults()
  }
  runResults() {
    let symptomps = this.props.data.fiebre || this.props.data.tos || this.props.data.respiratorio || this.props.data.malestar ? true : false
    let traveled = this.props.data.traveled
    let contacted = this.props.data.contacted

    if (!symptomps && !traveled && !contacted) {
      this.setState({ answer: 0 })
    }
    else if (symptomps && !traveled && !contacted) {
      this.setState({ answer: 1 })
    }
    else if (!symptomps && !traveled && contacted) {
      this.setState({ answer: 2 })
    }
    else if (symptomps && !traveled && contacted) {
      this.setState({ answer: 3 })
    }
    else if (!symptomps && traveled && !contacted) {
      this.setState({ answer: 4 })
    }
    else if (symptomps && traveled && !contacted) {
      this.setState({ answer: 5 })
    }
    else if (!symptomps && traveled && contacted) {
      this.setState({ answer: 6 })
    }
    else if (symptomps && traveled && contacted) {
      this.setState({ answer: 7 })
    }
  }

  render() {

    return (

      <div id="body-cont">

        <div id="card">

          <div id="question-box">
            <span className="question-text">
              {this.state.answer == 0 ? "No te preocupes, no hay indicios para sospechar que estes infectado del coronavirus" : null}
              {this.state.answer == 1 ? "No te preocupes, no hay indicios para sospechar que estes infectado del coronavirus" : null}
              {this.state.answer == 2 ? "No te preocupes, no hay indicios para sospechar que estes infectado del coronavirus" : null}
              {this.state.answer == 3 ? "" : null}
              {this.state.answer == 4 ? "No te preocupes, no hay indicios para sospechar que estes infectado del coronavirus" : null}
              {this.state.answer == 5 ? "" : null}
              {this.state.answer == 6 ? "No te preocupes, no hay indicios para sospechar que estes infectado del coronavirus" : null}
              {this.state.answer == 7 ? "" : null}

            </span>
          </div>

          
            {this.state.answer == 0 ?
            <div id="card-body-disclaimer">
              <span className="disclaimer-text">
                Dado que:
                </span><br/>
              <span className="disclaimer-text">
                No has estado en ninguna zona con evidencia de transmisión comunitaria
                No has estado en contacto con ningún caso sospechoso o confirmado
                No tienes síntomas
                </span><br/>
              <span className="disclaimer-text">
                Sigue los consejos de prevención:
                </span><br/>
              <span className="disclaimer-text">

                Lávate las manos frecuentemente (con agua y jabón o soluciones alcohólicas 70%), especialmente después del contacto directo con personas enfermas o su entorno.
                Tápate la boca y la nariz con pañuelos desechables o con la cara interna del codo en el momento de toser o estornudar y lava las manos enseguida (con soluciones alcohólicas 70% o con agua y jabón).
                Evita el contacto cercano (menos una distancia de dos metros) con personas que padecen infecciones respiratorias agudas y presentan tos, estornudos o expectoraciones, y no compartas las pertenencias personales.
                Evita compartir comida y utensilios (cubiertos, vasos, servilletas, pañuelos, etc.) y otros objetos sin limpiarlos debidamente.
                </span><br/>
                </div>
              : null}
            {this.state.answer == 1 ?
              <div id="card-body-disclaimer">
              <span className="disclaimer-text">

                Dado que:
                </span><br/>
                <span className="disclaimer-text">

                No has estado en ninguna zona con evidencia de transmisión comunitaria
                No has estado en contacto con ningún caso sospechoso o confirmado
                Si lo crees necesario, llama al 061 Salud Responde para que valoren los síntomas que presentas.
                </span><br/>
                <span className="disclaimer-text">

                Sigue los consejos de prevención:
                </span><br/>
                <span className="disclaimer-text">

                Lávate las manos frecuentemente (con agua y jabón o soluciones alcohólicas 70%), especialmente después del contacto directo con personas enfermas o su entorno.
                Tápate la boca y la nariz con pañuelos desechables o con la cara interna del codo en el momento de toser o estornudar y lava las manos enseguida (con soluciones alcohólicas 70% o con agua y jabón).
                Evita el contacto cercano (menos una distancia de dos metros) con personas que padecen infecciones respiratorias agudas y presentan tos, estornudos o expectoraciones, y no compartas las pertenencias personales.
                Evita compartir comida y utensilios (cubiertos, vasos, servilletas, pañuelos, etc.) y otros objetos sin limpiarlos debidamente.
                </span><br/>
            
            </div>
              : null}
            {this.state.answer == 2 ?
              <div id="card-body-disclaimer">
                <span className="disclaimer-text">

                No te preocupes, no hay indicios para sospechar que estes infectado del coronavirus
                Los próximos 14 días continúa controlando la posible aparición de síntomas y sigue los consejos de prevención:
                </span><br/>
                <span className="disclaimer-text">

                Lávate las manos frecuentemente (con agua y jabón o soluciones alcohólicas 70%), especialmente después del contacto directo con personas enfermas o su entorno.
                Tápate la boca y la nariz con pañuelos desechables o con la cara interna del codo en el momento de toser o estornudar y lava las manos enseguida (con soluciones alcohólicas 70% o con agua y jabón).
                Evita el contacto cercano (menos una distancia de dos metros) con personas que padecen infecciones respiratorias agudas y presentan tos, estornudos o expectoraciones, y no compartas las pertenencias personales.
                Evita compartir comida y utensilios (cubiertos, vasos, servilletas, pañuelos, etc.) y otros objetos sin limpiarlos debidamente.
                </span><br/>
            
            </div>
              : null}

            {this.state.answer == 3 ?
              <div id="card-body-disclaimer">
              </div>
              : null}

            {this.state.answer == 4 ?
              <div id="card-body-disclaimer">
                <span className="disclaimer-text">

                No te preocupes, no hay indicios para sospechar que estes infectado del coronavirus
                Los próximos 14 días continúa controlando la posible aparición de síntomas y sigue los consejos de prevención:
                </span><br/>
                <span className="disclaimer-text">

                Lávate las manos frecuentemente (con agua y jabón o soluciones alcohólicas 70%), especialmente después del contacto directo con personas enfermas o su entorno.
                Tápate la boca y la nariz con pañuelos desechables o con la cara interna del codo en el momento de toser o estornudar y lava las manos enseguida (con soluciones alcohólicas 70% o con agua y jabón).
                Evita el contacto cercano (menos una distancia de dos metros) con personas que padecen infecciones respiratorias agudas y presentan tos, estornudos o expectoraciones, y no compartas las pertenencias personales.
                Evita compartir comida y utensilios (cubiertos, vasos, servilletas, pañuelos, etc.) y otros objetos sin limpiarlos debidamente.
                </span><br/>
             
              </div>
              : null}
            {this.state.answer == 5 ?
              <div id="card-body-disclaimer">

              </div>
              : null}
            {this.state.answer == 6 ?
              <div id="card-body-disclaimer">
                <span className="disclaimer-text">

                No te preocupes, no hay indicios para sospechar que estes infectado del coronavirus
                Los próximos 14 días continúa controlando la posible aparición de síntomas y sigue los consejos de prevención:
                </span><br/>
                <span className="disclaimer-text">

                Lávate las manos frecuentemente (con agua y jabón o soluciones alcohólicas 70%), especialmente después del contacto directo con personas enfermas o su entorno.
                Tápate la boca y la nariz con pañuelos desechables o con la cara interna del codo en el momento de toser o estornudar y lava las manos enseguida (con soluciones alcohólicas 70% o con agua y jabón).
                Evita el contacto cercano (menos una distancia de dos metros) con personas que padecen infecciones respiratorias agudas y presentan tos, estornudos o expectoraciones, y no compartas las pertenencias personales.
                Evita compartir comida y utensilios (cubiertos, vasos, servilletas, pañuelos, etc.) y otros objetos sin limpiarlos debidamente.
                </span><br/>
             
              </div>
              : null}
            {this.state.answer == 7 ?
              <div id="card-body-disclaimer">

              </div>
              : null}

          


        </div>

      </div>

    )
  }


}

export default Result;

