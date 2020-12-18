import React, { Component } from 'react';
import imagenes from '../imagenes';
import Image from 'react-bootstrap/Image';
import '../css/persax.css';
import { Auth } from "../../objects/Auth";

class HeaderLogin extends Component {

    render() {
        return (
            <>
            <div className= "imgPersaxPosition">
                <Image src={imagenes.persax} className="imgPersax"></Image>
                <p className = "textRight">Usuario: {Auth.auth.getUsername()}</p>
                <p className = "textRight">Permiso: {Auth.auth.getPermiso()}</p>
            </div>
            </>
        );
    }
}

export default HeaderLogin;