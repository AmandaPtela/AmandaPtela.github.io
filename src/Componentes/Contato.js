import React from "react";
import './Contato.css';

class Contato extends React.Component {
  render() {
    return (
      <div id="contato">
        <section id="icones">
            <p id="contato-ti"> Contato </p>
            <a href="https://instagram.com/manda1_6"><img  alt="" height="10px" width="10px" id="rede-1"
                 src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white"
                target="_blank"/></a>
            <a href="https://github.com/AmandaPtela"><img alt="" height="10px" width="10px" id="rede-4"
                src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
                target="_blank"/></a>
            <a href="https://www.linkedin.com/in/amandaptela/"><img alt="" id="rede-2"
                src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white"
                 target="_blank"/></a>
            <a href="mailto:mandaptela@gmail.com"><img alt="" height="10px" width="10px" id="rede-3"
                src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=red"
                target="_blank"/></a>
        </section>
    </div>
    )
  }
}
export default Contato;

