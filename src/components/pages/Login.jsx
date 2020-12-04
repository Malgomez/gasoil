import React, {createContext, useState} from 'react';
import '../css/Login.css';
import logo from '../imagenes/persax.png';
import Image from 'react-image-resizer';
import { Apiurl } from '../services/apirest';
import axios from 'axios';
import LoggedUserContext from '../services/useUserLogin';
import Menu from './Menu';
import { Auth } from "../../objects/Auth";
import history from "../../routing/history";


class Login extends React.Component {
    //history = useHistory();
    constructor(props) {
        super(props);
    }
    state = {
        form: {
            "usuario": '',
            "password": ''
        },
        error: false,
        errorMsh: '',
        token: ''
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
                    console.log(this.state.token)
                    Auth.auth = new Auth(this.state.token)
                    history.push("/menu")
                });
            }, (error) => {
                console.log("Error: ")
                console.log(error);
            });
    }

    render() {
        return (
            <React.Fragment>
                <LoggedUserContext.Provider value={this.state.token}>
                    <div className="wrapper fadeInDown">
                        <div id="formContent">
                            <div className="fadeIn first">
                                <Image src={logo} width={440} height={300} />
                            </div>
                            <form onSubmit={this.handleSubmit}>
                                <input type="text" className="fadeIn second" name="usuario" placeholder="Usuario" onChange={this.handleOnChange} />
                                <input type="password" className="fadeIn third" name="password" placeholder="Password" onChange={this.handleOnChange} />
                                <input type="submit" className="fadein fourth" value="Log In" onClick={this.handleOnClick} />
                            </form>

                            <div id="formFooter">
                                <a className="underLineHover" href="#">Forgot Password?</a>
                            </div>
                        </div>
                    </div>
                    {/* <Menu /> */}
                </LoggedUserContext.Provider>
            </React.Fragment>
        );
    }
}

export default Login;