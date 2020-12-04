import React from 'react';
import '../css/Login.css';
import imagenes from '../imagenes';
import Image from 'react-bootstrap/Image';
import { Apiurl } from '../services/apirest';
import axios from 'axios';
import { Auth } from "../../objects/Auth";
import history from "../../routing/history";

class Login extends React.Component {
    state = {
        form: {
            "usuario": '',
            "password": ''
        },
        error: false,
        errorMsh: '',
        token: '',
        username: '',
        alert: '',
    }
    handleSubmit = e => {
        e.preventDefault();
    }

    handleOnChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
                [e.target.password]: e.target.value
            }
        })
    }

    handleOnClick = () => {
        let url = Apiurl + "/users/login";
        let body = {
            usuario: this.state.form.usuario,
            password: this.state.form.password,
        }
        axios.post(url, body)
            .then((response) => {
                this.setState({ token: response.data.token }, ()=> {
                    Auth.auth = new Auth(this.state.token, this.state.username);
                    history.push("/menu");
                });
            }, (error) => {
                console.log("credenciales");
                this.setState({alert: "Credenciales Erroneas"});
                window.location.href = './';
            });
    }

    render() {
        return (
            <React.Fragment>
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <div className="fadeIn first">
                            <Image src={imagenes.persax} className="imgPersaxLogin" />
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" className="fadeIn second" name="usuario" placeholder="Usuario" onChange={this.handleOnChange} />
                            <input type="password" className="fadeIn third" name="password" placeholder="Password" onChange={this.handleOnChange} />
                            <input type="submit" className="fadein fourth" value="Log In" onClick={this.handleOnClick} />
                            <br></br>
                            <h2>{this.alert}</h2>
                            <h2>hola</h2>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Login;