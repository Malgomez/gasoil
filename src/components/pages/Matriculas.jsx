import React from 'react';
import { Auth } from '../../objects/Auth';
import HeaderLogin from './HeaderLogin';
import { Apiurl } from '../services/apirest';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/persax.css';
import history from '../../routing/history';

class Matriculas extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            error: null,
            delegacion: "",
            matricula: "",
            listaMatricula: [],
        };
        if ( Auth.auth.getToken() !=="") {
            console.log(Auth.auth.getToken());
            console.log(Auth.auth.getUsername());
        } else {
            window.location.href = './';
        };
    }
    
    handleSubmit = e => {
        e.preventDefault();
    }

    async componentDidMount() {
        let url = Apiurl + "matriculas/all";
        console.log(url);
        await axios.get(url)
            .then((response) => {
                let matriculas = [];
                response.data.forEach(element => {
                    matriculas.push({ delegacion: element.delegacion, matricula: element.matricula});
                });
                this.setState({listaMatricula: matriculas});
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleMenuOnClick = () => {
        history.push("/menu");
    }

    handleDelegacionesOnChange = (e) => {
        this.setState({delegacion: document.getElementById("delegaciones").value});
    }  
    
    handleMatriculaOnClick = () => {
        if (this.state.delegacion !== "0" && this.state.matricula !== ""){
            let url = Apiurl + "/matricula";
            let body = {
                delegacion: this.state.delegacion,
                matricula: this.state.matricula,
            } 
            axios.post(url, body).then(async (response) => {
                url = Apiurl + "/matricula/all";
                await axios.get(url)
                    .then((response) => {
                        let matriculas = [];
                        response.data.forEach(element => {
                            matriculas.push({delegacion: element.delegacion, matricula: element.matricula});
                        })
                        this.setState({listaMatricula: matriculas, delegacion: null, permiso:null});
                    }).catch(function (error) {
                        console.log(error);
                    });
            }).catch(error => {
                console.log(error)
            });
        }
    }
    render() {
        const { error } = this.state;
        if (error) {
            return <div>
                Error: {error.message}
            </div>
        }
        return (
            <>
                <HeaderLogin />
                <React.Fragment>
                    <div className = 'table-responsive'>
                        <table className = 'table table-stripe'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Delegación</th>
                                    <th>Matricula</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.listaMatricula.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.delegacion}</td>
                                        <td>{item.matricula}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <form onSubmit={this.handleSubmit}> 
                        <div className="selectDelegaciones">
                            <label htmlFor="delegaciones">Delegación</label>
                            <select className="form-control" id="delegaciones" onChange={this.handleDelegacionesOnChange}>
                            <option value="0">Selecciona Delegación</option>
                            <option value="PALENCIA">PALENCIA</option>
                            <option value="SEVILLA">SEVILLA</option>
                            <option value="VILLENA">VILLENA</option>
                            <option value="ZARAGOZA">ZARAGOZA</option>
                            </select>
                            <input type="text" className ="buttonCenter" name ="matricula" placeholder="matricula" onChange={(e) => {
                                this.setState({matricula: e.target.value});
                            }}/>
                        </div>
                        <div>
                            <input type="submit" className="buttonCenter" value="Crear Matricula" onClick={this.handleMatriculaOnClick} />
                            <input type="submit" className="buttonCenter" value= "Menu" onClick={this.handleMenuOnClick}/>
                        </div>
                    </form>
                    
                </React.Fragment>
            </>
        );
    }
}

export default Matriculas;