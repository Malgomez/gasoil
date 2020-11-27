import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import HeaderLogin from './HeaderLogin';

const cookies=new Cookies();

class Menu extends Component {
    cerrarSesion=()=>{
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