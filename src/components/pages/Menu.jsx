import React from 'react';
import { Auth } from "../../objects/Auth";
import HeaderLogin from './HeaderLogin';
import { Component } from "react";
import Button from 'react-bootstrap/Button';
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
  render() {
    return (
        <>
          <HeaderLogin/>
          {
            Auth.auth.getPermiso() === "administrador" ?
              <Button variant="primary" className="buttonHeaderLeft" onClick={this.handleCreateUserOnClick}>Crear Usuario</Button>
            : null
          }
          <Button variant="primary" className="buttonHeader" onClick={this.handleImportarOnClick}>Importar CSV</Button>{' '}
          <Button variant="primary" className="buttonHeader">Exportar CSV</Button>{' '}
        </>
    )
  }
}

export default Menu;