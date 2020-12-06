import './App.css';
import Login from './components/pages/Login';
import {Router, Switch, Route} from 'react-router-dom';
import Menu from './components/pages/Menu';
import history from "./routing/history";
import CrearUsuario from './components/pages/CrearUsuario';


function App() {
  return (
    <>
        <Router history={history}>
          <Switch>
            <Route exact path = "/" component={Login}/>
            <Route exact path = "/menu" component={Menu}/>
            <Route exact path = "/crearUsuario" component={CrearUsuario}/>
          </Switch>
        </Router>
    </>
  );
}

export default App;
