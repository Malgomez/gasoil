import React from 'react';
import { Auth } from "../../objects/Auth";
import HeaderLogin from './HeaderLogin';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/persax.css';
import history from "../../routing/history";
import { parse } from "papaparse";

class ImportarCsv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileContent: [],
      numeroDelegacion: 0
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
        result.data.forEach(element => {
          element[3] = element[3].replace(",", ".");
          element[0] = element[0].replace("000000000")
        })
        console.log(result.data);
        this.setState({
          fileContent: result.data
        })
      })
  }
  handleDelegacionesOnChange = (e) => {
    document.ready = document.getElementById("delegaciones").value;
  }
  componentDidMount() {
  }

  handleConvertirOnClick = (e) => {
    console.log(this.state.fileContent);
    console.log(document.ready);
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
                <select className="form-control" id="delegaciones" onChange = {this.handleDelegacionesOnChange}>
                  <option value = "0">Selecciona Delegación</option>
                  <option value = "1">PALENCIA</option>
                  <option value = "2">SEVILLA</option>
                  <option value = "3">VILLENA</option>
                  <option value = "4">ZARAGOZA</option>
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