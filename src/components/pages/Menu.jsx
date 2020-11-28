import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import HeaderLogin from './HeaderLogin';

const cookies=new Cookies();

class Menu extends Component {
    cerrarSesion=()=>{
        const UsuarioLogueado = (props) => {props.logueado};
        const NombreUsuario = (props) => {props.nombreUsuario};
        console.log(props);
        window.location.href='./';
    }

    componentDidMount(){
    }
    render() {
        return (
            <div>
                <HeaderLogin />
                <br />
                <button onClick={()=>this.cerrarSesion()}>Cerrar Sesión</button>
            </div>
        );
    }
}

export default Menu;