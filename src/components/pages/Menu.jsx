import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import HeaderLogin from './HeaderLogin';

const cookies=new Cookies();

class Menu extends Component {
    cerrarSesion=()=>{
        cookies.remove('id', {path:"/"});
        cookies.remove('primer_apellido', {path:"/"});
        cookies.remove('segundo_apellido', {path:"/"});
        cookies.remove('nombre', {path:"/"});
        cookies.remove('username', {path:"/"});
        window.location.href='./';
    }

    componentDidMount(){
        if(!cookies.get('username')){
            window.location.href="./";
        }
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