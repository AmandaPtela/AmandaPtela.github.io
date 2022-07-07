import React from "react";
import './SobreMim.css';

class SobreMim extends React.Component {
  render() {
    return (
      <div id="sobre">
        <section id="secao-sobre">
            <span id="sobre-ti"> Sobre </span>
            <p id="sobre-texto"><strong>Piauiense</strong>
            <p>Estudante de Desenvolvimento Web na 
            <strong> Trybe</strong></p>
            Adoro: <strong>música, gatos e documentários</strong> aleatórios <br/>
            e jogos como <em>Don't Starve Together</em>, <em>Minecraft</em> e <em>Wild Rift</em>.
            </p>
        </section>
    </div>
    )
  }
}
export default SobreMim;