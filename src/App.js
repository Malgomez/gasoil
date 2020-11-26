import './App.css';
import Login from './components/pages/Login';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Menu from './components/pages/Menu';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = "/" component={Login}/>
        <Route exact path = "/menu" component={Menu}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
