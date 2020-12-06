import React from 'react';
import { Auth } from "../../objects/Auth";
import HeaderLogin from './HeaderLogin';
import { Component } from "react";
import { Apiurl } from '../services/apirest';
import axios from 'axios';

class CrearUsuario extends Component {
    state = {
        form: {
            "usuario": '',
            "password": ''
            
        }
    }
    constructor(props) {
        super(props);
        if (Auth.auth.getToken() !== "") {
            console.log(Auth.auth.getToken());
            console.log(Auth.auth.getUsername());
        }else{
            window.location.href = './';
        }
    }

    handleSubmit = e => {
        e.preventDefault();
    }

    handleOnChange = async e => {
        await this.setState({
            ...this.state.form,
            [e.target.name]: e.target.value,
            [e.target.password]: e.target.value
        })
    }

    handleOnClick = () => {
        let url = Apiurl + "/users";
        let body = {
            usuario: this.state.form.usuario,
            password: this.state.form.password,
        }
        axios.post(url, body);
    }
    render() {
        return (
            <>
            <HeaderLogin/>
            <React.Fragment>
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" className="fadeIn second" name="usuario" placeholder="Usuario" onChange={this.handleOnChange} />
                            <input type="password" className="fadeIn third" name="password" placeholder="Password" onChange={this.handleOnChange} />
                            <input type="submit" className="fadein fourth" value="Crear" onClick={this.handleOnClick} />
                            <h2>{this.erroneas}</h2>
                        </form>
                    </div>
                </div>
            </React.Fragment>
            </>
        );
    }
}

export default CrearUsuario;