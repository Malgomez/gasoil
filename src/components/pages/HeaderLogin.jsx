import React, { Component } from 'react';
import imagenes from '../imagenes';
import Image from 'react-bootstrap/Image';
import '../css/persax.css';
import Button from 'react-bootstrap/Button';

class HeaderLogin extends Component {
    render() {
        return (
            <>
                <div className= "imgPersaxPosition">
                    <Image src={imagenes.persax} className="imgPersax"></Image>
                     <Button variant="primary" className="buttonHeaderLeft">Crear Usuario</Button>{' '}
                     <Button variant="primary" className="buttonHeader">Importar CSV</Button>{' '}
                     <Button variant="primary" className="buttonHeader">Exportar CSV</Button>{' '}
                </div>
            </>
        );
    }
}

export default HeaderLogin;