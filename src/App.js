import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import { Link} from 'react-router-dom'

import Routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/wizard"></Link>
        
        <Header />
        <Routes />
        
        
        
      </div>

    );
  }
}

export default App;
