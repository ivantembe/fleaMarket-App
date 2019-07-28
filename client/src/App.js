import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'unistore/react';
import createStore from 'unistore';
import Login from './components/auth/Login';
import Register from './components/auth/Register'
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound'


let store = createStore({ isLogged: false, user: null })

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div style={{ fontFamily: 'Trebuchet MS'}}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login}/ >
            <Route exact path="/register" component={Register} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </Provider>
    
  );
}

export default App;
