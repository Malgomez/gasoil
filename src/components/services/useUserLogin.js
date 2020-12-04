import React, {createContext} from 'react';
import { getLoggedUser } from "../services/getLoggedUser";

const LoggedUserContext = createContext({name: "alguien"})

class LoggedUserProvider extends React.Component {
    state = {
      name: null
    };
  
    componentDidMount() {
        getLoggedUser().then(res => {
        this.setState({ name: res.data });
      });
    }
  
    render() {
      const { children } = this.props;
      console.log("Hola")
      return (
        <LoggedUserContext.Provider value={this.state.name}>
          {children}
        </LoggedUserContext.Provider>
      );
    }
  }

//const {userNameLogin, setUserNameLogin} = UserNameLogin;
/*const LoggedUserContext = createContext({
    userName: '',
});*/

export default LoggedUserContext;
export { LoggedUserProvider };