import React from "react";
import Content from "./Content";
import './Header.css';


class Cabecalho extends React.Component {

  render() {
    return (
      <>
        <header id="logo-org">
          <div id="texto-conteiner">
            <h1 id="header-texto">Boas vindas ao meu portfólio</h1>
            <hr/>
            <h2 id="header-sub">Meu nome é Amanda Karoline</h2>
          </div>
        </header>
        <Content />
      </>
    )
  }
}
export default Cabecalho;