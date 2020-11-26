import React, { Component } from 'react';
import imagenes from '../imagenes';
import Image from 'react-bootstrap/Image';
import '../css/persax.css';

class HeaderLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    handleClickLogin = () => {

    }
    render() {
        return (
            <>
                <div className= "imgPersaxPosition">
                    <Image src={imagenes.persax} className="imgPersax"></Image>
                </div>
            </>
        );
    }
}

export default HeaderLogin;