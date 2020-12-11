import React from 'react';
import { Auth } from "../../objects/Auth";
import HeaderLogin from './HeaderLogin';
import { Component } from "react";
import { Apiurl } from '../services/apirest';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/persax.css'

class CrearUsuario extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            nombreUsuario: [],
            usuario: "",
            password: ""
            // form: {
            //     usuario: '',
            //     password: ''
            // }
        }
        if (Auth.auth.getToken() !== "") {
            console.log(Auth.auth.getToken());
            console.log(Auth.auth.getUsername());
        } else {
            window.location.href = './';
        }
    }

    handleSubmit = e => {
        e.preventDefault();
    }

    // handleOnChange = async e => {
    //     await this.setState({
    //         ...this.state.form,
    //         [e.target.name]: e.target.value,
    //         [e.target.password]: e.target.value
    //     }, () => {
    //         console.log(this.state)
    //     })
    // }

    async componentDidMount() {
        let url = Apiurl + "/users/all";
        console.log(url);

        console.log(url)
        await axios.get(url)
            .then((response) => {
                //console.log(response)
                let users = [];
                response.data.forEach(element => {
                    users.push({ nombre: element.usuario, contrasenya: element.password });
                })
                this.setState({ nombreUsuario: users });
                //status = response.status;
            })
            .catch(function (error) {
                console.log(error);
            });
        //console.log(body);
    }

    handleOnClick = () => {
        let url = Apiurl + "/users";
        let body = {
            usuario: this.state.usuario,
            password: this.state.password,
        }
        axios.post(url, body).then(async (response) => {
            url = Apiurl + "/users/all";
            await axios.get(url)
                .then((response) => {
                    //console.log(response)
                    let users = [];
                    response.data.forEach(element => {
                        users.push({ nombre: element.usuario, contrasenya: element.password });
                    })
                    this.setState({ nombreUsuario: users, usuario: null, password: null });
                    //status = response.status;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }).catch(error => {
            console.log(error)
        });
    }
    render() {
        const { error, nombreUsuario } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        }
        return (
            <>
                <HeaderLogin />
                <React.Fragment>

                    <div className='table-responsive'>
                        {/* <table className="table table-stripe">
                            <thead>
                                <th>Id</th>
                                <th>Nombre</th>
                            </thead>
                            <tbody>
                                {this.state.nombreUsuario.map(item => (
                                    <tr>
                                        <td>{item}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table> */}
                        <table className="table table-stripe">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Contrasena</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.nombreUsuario.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.nombre}</td>
                                        <td>{item.contrasenya}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='buttonCenter'>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" name="usuario" placeholder="Usuario" onChange={(e) => {
                                this.setState({ usuario: e.target.value });
                            }} />
                            <input type="password" name="password" placeholder="Password" onChange={(e) => {
                                this.setState({ password: e.target.value });
                            }} />
                            <input type="submit" className='buttonCenter' value="Crear" onClick={this.handleOnClick} />
                        </form>
                    </div>
                </React.Fragment>
            </>
        );
    }
}

export default CrearUsuario;