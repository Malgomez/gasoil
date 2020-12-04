import React from 'react';
import { Auth } from "../../objects/Auth";
import HeaderLogin from './HeaderLogin';
import { Component } from "react";


class Menu extends Component {
  constructor(props){
    super(props)
    if(Auth.auth.getToken() !== ""){
      console.log(Auth.auth.getToken())
    }else{
      window.location.href = './';
    }
  }
  cerrarSesion = () => {
    window.location.href = './';
  }

  componentDidMount() {
  }
  render() {
    return (
        <>
          <HeaderLogin/>
        </>
    )
  }
}

export default Menu;