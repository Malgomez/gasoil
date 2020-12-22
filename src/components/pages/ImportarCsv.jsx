import React from 'react';
import { Auth } from "../../objects/Auth";
import HeaderLogin from './HeaderLogin';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/persax.css';
import history from "../../routing/history";

class ImportarCsv extends React.Component {
  constructor(props) {
    super(props);
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

  handleConvertirOnClick = () => {

  }
  componentDidMount() {
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
                <select className="form-control" id="delegaciones">
                  <option>PALENCIA</option>
                  <option>SEVILLA</option>
                  <option>VILLENA</option>
                  <option>ZARAGOZA</option>
                </select>
                <label htmlFor="selecciona">Seleccionar archivo</label>
                <input type="file" className="form-control-file" id="selecciona" onChange={(e) => {
                  e.preventDefault();
                  console.log(e.target.files)
                  Array.from(e.target.files)
                  .filter((file) => file.type === "application/vnd.ms-excel")
                  .forEach(async (file) => {
                    //const text = await file.text();
                    console.log(file);
                  })
                }}></input>
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