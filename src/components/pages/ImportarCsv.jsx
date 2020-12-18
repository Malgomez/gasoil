import React from 'react';
import { Auth } from "../../objects/Auth";
import HeaderLogin from './HeaderLogin';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/persax.css';

class ImportarCsv extends React.Component {
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
    render() {
        return (
            <>
                <HeaderLogin/>
            </>
        );
    }
}

export default ImportarCsv;