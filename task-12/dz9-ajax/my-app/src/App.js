import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import News from './components/news/News.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Home work, news API</h1>
        </header>

        <News />
      </div>
    );
  }
}

export default App;