import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
