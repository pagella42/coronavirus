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
    setTimeout(() => {
      
      console.log(this.state.answer)
    }, 3000);
  }
  runResults() {
    let symptoms = this.props.data.symptoms.fiebre || this.props.data.symptoms.tos || this.props.data.symptoms.respiratorio || this.props.data.symptoms.malestar ? true : false
    let traveled = this.props.data.traveled
    let contacted = this.props.data.contacted

    if (!symptoms && !traveled && !contacted) {
      this.setState({ answer: 0 })
    }
    else if (symptoms && !traveled && !contacted) {
      this.setState({ answer: 1 })
    }
    else if (!symptoms && !traveled && contacted) {
      this.setState({ answer: 2 })
    }
    else if (symptoms && !traveled && contacted) {
      this.setState({ answer: 3 })
    }
    else if (!symptoms && traveled && !contacted) {
      this.setState({ answer: 4 })
    }
    else if (symptoms && traveled && !contacted) {
      this.setState({ answer: 5 })
    }
    else if (!symptoms && traveled && contacted) {
      this.setState({ answer: 6 })
    }
    else if (symptoms && traveled && contacted) {
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
              {this.state.answer == 3 ? "Estamos frente a un caso sospechoso" : null}
              {this.state.answer == 4 ? "No te preocupes, no hay indicios para sospechar que estes infectado del coronavirus" : null}
              {this.state.answer == 5 ? "Estamos frente a un caso sospechoso" : null}
              {this.state.answer == 6 ? "No te preocupes, no hay indicios para sospechar que estes infectado del coronavirus" : null}
              {this.state.answer == 7 ? "Estamos frente a un caso sospechoso" : null}

            </span>
          </div>

          
            {this.state.answer == 0 ?
            <div id="card-body-disclaimer">
              <br/>
              <span className="disclaimer-text">
                Dado que:
                </span><br/>
              <span className="disclaimer-text">
              &emsp;&emsp;No has estado en ninguna zona con evidencia de transmisión comunitaria
                </span><br/>
                <span className="disclaimer-text">
                &emsp;&emsp;No has estado en contacto con ningún caso sospechoso o confirmado
                </span><br/>
                <span className="disclaimer-text">
                &emsp;&emsp;No tienes síntomas
                </span><br/>
              <span className="disclaimer-text">
                Sigue los consejos de prevención:
                </span><br/>
              <span className="disclaimer-text">
              •Lávate las manos frecuentemente (con agua y jabón o soluciones alcohólicas 70%), especialmente después del contacto directo con personas enfermas o su entorno.
                </span><br/>
              <span className="disclaimer-text">
              •Tápate la boca y la nariz con pañuelos desechables o con la cara interna del codo en el momento de toser o estornudar y lava las manos enseguida (con soluciones alcohólicas 70% o con agua y jabón).
                </span><br/>
                <span className="disclaimer-text">
                •Evita el contacto cercano (menos una distancia de dos metros) con personas que padecen infecciones respiratorias agudas y presentan tos, estornudos o expectoraciones, y no compartas las pertenencias personales.
                </span><br/>
                <span className="disclaimer-text">
                •Evita compartir comida y utensilios (cubiertos, vasos, servilletas, pañuelos, etc.) y otros objetos sin limpiarlos debidamente.
                </span><br/>
                </div>
              : null}
            {this.state.answer == 1 ?
              <div id="card-body-disclaimer">
                <br/>
              <span className="disclaimer-text">

                Dado que:
                </span><br/>
                <span className="disclaimer-text">
                &emsp;&emsp;No has estado en ninguna zona con evidencia de transmisión comunitaria
                </span><br/>
                <span className="disclaimer-text">
                &emsp;&emsp;No has estado en contacto con ningún caso sospechoso o confirmado
                </span><br/>
                <span className="disclaimer-text">
                &emsp;&emsp;Si lo crees necesario, llama al 061 Salud Responde para que valoren los síntomas que presentas.
                </span><br/>
                <span className="disclaimer-text">

                Sigue los consejos de prevención:
                </span><br/>
                <span className="disclaimer-text">
                •Lávate las manos frecuentemente (con agua y jabón o soluciones alcohólicas 70%), especialmente después del contacto directo con personas enfermas o su entorno.
                </span><br/>
                <span className="disclaimer-text">
                •Tápate la boca y la nariz con pañuelos desechables o con la cara interna del codo en el momento de toser o estornudar y lava las manos enseguida (con soluciones alcohólicas 70% o con agua y jabón).
                </span><br/>
                <span className="disclaimer-text">
                •Evita el contacto cercano (menos una distancia de dos metros) con personas que padecen infecciones respiratorias agudas y presentan tos, estornudos o expectoraciones, y no compartas las pertenencias personales.
                </span><br/>
                <span className="disclaimer-text">
                •Evita compartir comida y utensilios (cubiertos, vasos, servilletas, pañuelos, etc.) y otros objetos sin limpiarlos debidamente.
                </span><br/>
            
            </div>
              : null}
            {this.state.answer == 2 ?
              <div id="card-body-disclaimer">
                <br/>
                <span className="disclaimer-text">

                Los próximos 14 días continúa controlando la posible aparición de síntomas y sigue los consejos de prevención:
                </span><br/>
                <span className="disclaimer-text">
                •Lávate las manos frecuentemente (con agua y jabón o soluciones alcohólicas 70%), especialmente después del contacto directo con personas enfermas o su entorno.
                </span><br/> 
                <span className="disclaimer-text">
                •Tápate la boca y la nariz con pañuelos desechables o con la cara interna del codo en el momento de toser o estornudar y lava las manos enseguida (con soluciones alcohólicas 70% o con agua y jabón).
                </span><br/>
                <span className="disclaimer-text">
                •Evita el contacto cercano (menos una distancia de dos metros) con personas que padecen infecciones respiratorias agudas y presentan tos, estornudos o expectoraciones, y no compartas las pertenencias personales.
                </span><br/>
                <span className="disclaimer-text">
                •Evita compartir comida y utensilios (cubiertos, vasos, servilletas, pañuelos, etc.) y otros objetos sin limpiarlos debidamente.
                </span><br/>
            
            </div>
              : null}

            {this.state.answer == 3 ?
              <div id="card-body-disclaimer">
                <br/>
                <span className="disclaimer-text">
                En base a tus respuestas, recomendamos que realices una consulta a un profesional de la salud en tu país. Mientras tanto, te pedimos que evites el contacto con otras personas y extremes las medidas de prevención.
                </span><br/>
              </div>
              : null}

            {this.state.answer == 4 ?
              <div id="card-body-disclaimer">
                <br/>
                <span className="disclaimer-text">
                Los próximos 14 días continúa controlando la posible aparición de síntomas y sigue los consejos de prevención:
                </span><br/>
                <span className="disclaimer-text">
                •Lávate las manos frecuentemente (con agua y jabón o soluciones alcohólicas 70%), especialmente después del contacto directo con personas enfermas o su entorno.
                </span><br/>
                <span className="disclaimer-text">
                •Tápate la boca y la nariz con pañuelos desechables o con la cara interna del codo en el momento de toser o estornudar y lava las manos enseguida (con soluciones alcohólicas 70% o con agua y jabón).
                </span><br/>
                <span className="disclaimer-text">
                •Evita el contacto cercano (menos una distancia de dos metros) con personas que padecen infecciones respiratorias agudas y presentan tos, estornudos o expectoraciones, y no compartas las pertenencias personales.
                </span><br/>
                <span className="disclaimer-text">
                •Evita compartir comida y utensilios (cubiertos, vasos, servilletas, pañuelos, etc.) y otros objetos sin limpiarlos debidamente.
                </span><br/>
             
              </div>
              : null}
            {this.state.answer == 5 ?
              <div id="card-body-disclaimer">
                <br/>
                <span className="disclaimer-text">
                En base a tus respuestas, recomendamos que realices una consulta a un profesional de la salud en tu país. Mientras tanto, te pedimos que evites el contacto con otras personas y extremes las medidas de prevención.
                </span><br/>
              </div>
              : null}
            {this.state.answer == 6 ?
              <div id="card-body-disclaimer">
                <br/>
                <span className="disclaimer-text">
                Los próximos 14 días continúa controlando la posible aparición de síntomas y sigue los consejos de prevención:
                </span><br/>
                <span className="disclaimer-text">
                •Lávate las manos frecuentemente (con agua y jabón o soluciones alcohólicas 70%), especialmente después del contacto directo con personas enfermas o su entorno.
                </span><br/>
                <span className="disclaimer-text">
                •Tápate la boca y la nariz con pañuelos desechables o con la cara interna del codo en el momento de toser o estornudar y lava las manos enseguida (con soluciones alcohólicas 70% o con agua y jabón).
                </span><br/>
                <span className="disclaimer-text">
                •Evita el contacto cercano (menos una distancia de dos metros) con personas que padecen infecciones respiratorias agudas y presentan tos, estornudos o expectoraciones, y no compartas las pertenencias personales.
                </span><br/>
                <span className="disclaimer-text">
                •Evita compartir comida y utensilios (cubiertos, vasos, servilletas, pañuelos, etc.) y otros objetos sin limpiarlos debidamente.
                </span><br/>
             
              </div>
              : null}
            {this.state.answer == 7 ?
              <div id="card-body-disclaimer">
                <br/>
                <span className="disclaimer-text">
                En base a tus respuestas, recomendamos que realices una consulta a un profesional de la salud en tu país. Mientras tanto, te pedimos que evites el contacto con otras personas y extremes las medidas de prevención.
                </span><br/>

              </div>
              : null}

          


        </div>

      </div>

    )
  }


}

export default Result;

