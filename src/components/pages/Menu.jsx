import React from 'react';
import { Auth } from "../../objects/Auth";
import HeaderLogin from './HeaderLogin';
import { Component } from "react";
import Button from 'react-bootstrap/Button';
import history from "../../routing/history";


class Menu extends Component {
  constructor(props){
    super(props)
    this.state = {
      permiso: false,
    }
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

  handleCreateUserOnClick = () => {
      history.push("/crearUsuario");
  }

  componentDidMount() {
  }
  render() {
    return (
        <>
          <HeaderLogin/>
          if(user) {
            <Button variant="primary" className="buttonHeaderLeft" onClick={this.handleCreateUserOnClick}>Crear Usuario</Button>
          }
          <Button variant="primary" className="buttonHeader">Importar CSV</Button>{' '}
          <Button variant="primary" className="buttonHeader">Exportar CSV</Button>{' '}
        </>
    )
  }
}

export default Menu;