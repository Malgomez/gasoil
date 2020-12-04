import './App.css';
import Login from './components/pages/Login';
import {Router, Switch, Route} from 'react-router-dom';
import Menu from './components/pages/Menu';
import history from "./routing/history";


function App() {
  return (
    <>
        <Router history={history}>
          <Switch>
            <Route exact path = "/" component={Login}/>
            <Route exact path = "/menu" component={Menu}/>
          </Switch>
        </Router>
    </>
  );
}

export default App;
