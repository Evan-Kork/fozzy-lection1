import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import packageJson from '../package.json';
import ItemsList from './components/items-list/items-list';

class App extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <div className="App">
        <ItemsList />
      </div>
    );
  }
}

export default App;
