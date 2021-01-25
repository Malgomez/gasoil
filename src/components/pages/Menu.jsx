import React from 'react';
import { Auth } from "../../objects/Auth";
import HeaderLogin from './HeaderLogin';
import { Component } from "react";
import history from "../../routing/history";


class Menu extends Component {
  constructor(props){
    super(props);
    if(Auth.auth.getToken() !== ""){
      console.log(Auth.auth.getToken())
      console.log(Auth.auth.getPermiso())
      console.log(Auth.auth.getUsername())
    }else{
      window.location.href = './';
    }
  }
  cerrarSesion = () => {
    window.location.href = './';
  }

  componentDidMount() {
  }

  handleCreateUserOnClick = () => {
    history.push("/crearUsuario");
  }

  handleImportarOnClick = () => {
    history.push("/importarCsv");
  }

  handleMatriculasOnClick = () => {
    history.push('/matriculas');
  }
  render() {
    return (
        <>
          <HeaderLogin/>
          {
            Auth.auth.getPermiso() === "administrador" ?
              <input type ="submit" className = "buttonCenter" value = "Crear Usuario" onClick={this.handleCreateUserOnClick}></input>
            : null
          }
          {
            Auth.auth.getPermiso() === "administrador" ?
              <input type ="submit" className = "buttonCenter" value = "Matriculas" onClick={this.handleMatriculasOnClick}></input>
              : null
          }
          <input type="submit" className="buttonCenter" value = "Tranformar Archívo" onClick={this.handleImportarOnClick}></input>
        </>
    )
  }
}

export default Menu;