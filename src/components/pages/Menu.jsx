import React, { Component, useState } from 'react';
import { Auth } from "../../objects/Auth";
// import HeaderLogin from './HeaderLogin';


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
    const user = this.context
    console.log(user)
    //const userName = useUserLogin.userNameLogin;
  }
  render() {
    const nombre = useState[0];
    return (
        <>
          <h1>Hi I'm Osman and this is my album of the week:</h1>
        </>
    )
  }
}

export default Menu;