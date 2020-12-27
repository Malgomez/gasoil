import React from 'react';
import { Auth } from "../../objects/Auth";
import HeaderLogin from './HeaderLogin';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/persax.css';
import history from "../../routing/history";
import { parse } from "papaparse";
import { Apiurl } from '../services/apirest';
import axios from 'axios';

class ImportarCsv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileContent: [],
      numeroDelegacion: 0,
      nombreDelegacion: "",
      nombreArchivo: ""
    }
    if (Auth.auth.getToken() !== "") {
      console.log(Auth.auth.getToken())
      console.log(Auth.auth.getPermiso())
      console.log(Auth.auth.getUsername())
    } else {
      window.location.href = './';
    }
  }

  cerrarSesion = () => {
    window.location.href = './';
  }

  handleMenuOnClick = () => {
    history.push("/menu");
  }

  handleFileOnchange = (e) => {
    e.preventDefault();
    Array.from(e.target.files)
      .filter((file) => file.type === "application/vnd.ms-excel")
      .forEach(async (file) => {
        const text = await file.text();
        let result = parse(text);
        this.setState({
          fileContent: result.data
        })
      })
  }
  handleDelegacionesOnChange = (e) => {
    document.ready = document.getElementById("delegaciones").value;
    switch (document.ready) {
      case 1:
        this.setState({
          nombreDelegacion: "PALENCIA"
        });
        break;
      case 2: 
        this.setState({
          nombreDelegacion: "SEVILLA"
        });
        break;
      case 3:
        this.setState({
          nombreDelegacion: "VILLENA"
        });
        break;
      case 4:
        this.setState({
          nombreDelegacion: "ZARAGOZA"
        });
        break;
      default:
        this.setState({
          nombreDelegacion: ""
        });
    }
    this.setState({
      nombreArchivo: this.state.nombreDelegacion + new Date().getFullYear() + ".txt"
    });
  }
  componentDidMount() {
  }

  handleConvertirOnClick = (e) => {
    if (document.ready > 0) {
      var textToWrite = "";
      this.state.fileContent.forEach(element => {
        element[0] = element[0].replace("0000000000000", new Date().getFullYear() + document.ready + "00000000");
        element[6] = element[6].replace(",", ".");
        let url = Apiurl + "/listado";
        let body = {
          delegacion: document.ready,
          numerolinea: element[0],
          deposito: element[1],
          fecha: element[2],
          hora: element[3],
          matricula: element[4],
          surtidor: element[5],
          litros: element[6]
        }
        axios.post(url, body).then(async (response) => {
          console.log("ok");
        }).catch(function (error) {
          console.log(error);
        });
        textToWrite += element[0] + ";" + element[1] + ";" + element[2] + ";" + element[3] + ";" + element[4] + ";" + element[5] + ";" + element[6].replace(".", ",") + "<br/>";
      });
      let url = Apiurl + "/listado/guardarArchivo";
      let body = textToWrite;
      axios.get(url, body);
      console.log(this.state.fileContent);
      console.log(document.ready);
      console.log(textToWrite);
    }
  }
  render() {
    return (
      <>
        <HeaderLogin />
        <React.Fragment>
          <div>
            <form>
              <div className="selectDelegaciones">
                <label htmlFor="delegaciones">Delegación</label>
                <select className="form-control" id="delegaciones" onChange={this.handleDelegacionesOnChange}>
                  <option value="0">Selecciona Delegación</option>
                  <option value="1">PALENCIA</option>
                  <option value="2">SEVILLA</option>
                  <option value="3">VILLENA</option>
                  <option value="4">ZARAGOZA</option>
                </select>
                <label htmlFor="selecciona">Seleccionar archivo</label>
                <input type="file" className="form-control-file" id="selecciona" onChange={this.handleFileOnchange}></input>
              </div>
            </form>
            <input type="submit" className='buttonCenter' value="Convertir" onClick={this.handleConvertirOnClick} />
            <input type="submit" className='buttonCenter' value="Menu" onClick={this.handleMenuOnClick} />
          </div>
        </React.Fragment>
      </>
    );
  }
}

export default ImportarCsv;