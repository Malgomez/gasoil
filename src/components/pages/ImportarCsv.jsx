import React from 'react';
import { Auth } from "../../objects/Auth";
import HeaderLogin from './HeaderLogin';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/persax.css';
import history from "../../routing/history";

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
  
    handleMenuOnClick = () => {
      history.push("/menu");
    }
    componentDidMount() {
    }
    render() {
        return (
            <>
                <HeaderLogin/>
                <React.Fragment>
                  <div>
                    <input type="submit" className='buttonCenter' value="Menu" onClick={this.handleMenuOnClick}/>
                  </div>
                </React.Fragment>
            </>
        );
    }
}

export default ImportarCsv;