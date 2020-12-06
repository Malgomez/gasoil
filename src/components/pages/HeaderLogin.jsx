import React, { Component } from 'react';
import imagenes from '../imagenes';
import Image from 'react-bootstrap/Image';
import '../css/persax.css';
import Button from 'react-bootstrap/Button';
import { Auth } from "../../objects/Auth";
import history from "../../routing/history";

class HeaderLogin extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.token);
        console.log(Auth.auth.getToken());
        Auth.auth = new Auth(this.props.token);
        console.log(this.props.token);
    }
    handleCreateUserOnClick = () => {
        history.push("/crearUsuario");
    }
    render() {
        return (
            <>
                <div className= "imgPersaxPosition">
                    <Image src={imagenes.persax} className="imgPersax"></Image>
                     <Button variant="primary" className="buttonHeaderLeft" onClick={this.handleCreateUserOnClick}>Crear Usuario</Button>{' '}
                     <Button variant="primary" className="buttonHeader">Importar CSV</Button>{' '}
                     <Button variant="primary" className="buttonHeader">Exportar CSV</Button>{' '}
                </div>
            </>
        );
    }
}

export default HeaderLogin;