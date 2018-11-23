import React, { Component } from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import './App.css';
import './style/style.sass';
import Header from './components/header';
import WebPage from './components/left-sidebar';
import allReducers from './script/reducers/allGoods';
import Details from './components/content'

const store = createStore(allReducers);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div className="head">
					<Header />
				</div>
        <div className="all_content">
					<div className="left-sidebar">
						<Provider store={store}>
							<WebPage />
						</Provider>
					</div>
					<div className="content">
					<Provider store={store}>
						<Details />
						</Provider>
					</div>
				</div>
        </header>
      </div>
    );
  }
}

export default App;
