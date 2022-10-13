import React from 'react'; 
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import User from './User.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const Context = React.createContext(null)

ReactDOM.render(
  <Context.Provider value={{
    user: new User()
  }}>
  <App />
  </Context.Provider>,
  document.getElementById('root')
);

