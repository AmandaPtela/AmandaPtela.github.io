import React from "react";
import Habilidades from "./Habilidades";
import { Link } from "react-router-dom";
import './content.css';
import SobreMim from "./SobreMim";
import Projetos from "./Projetos";

class Content extends React.Component {

  render() {
    return (
      <div className="geral-conteudo">
        <div className="conteudo">
        <SobreMim />
        <Habilidades />
        </div>
        <div className="projetos">
          <Link to="/contato" class="contato">Projetos</Link>
          <Projetos />
        </div>
      </div>
    )
  }
}
export default Content;