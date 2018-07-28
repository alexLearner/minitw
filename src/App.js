import React, { Component } from 'react';
import Button from 'antd/lib/button';
import 'antd/lib/button/style/index.css';
import logo from './logo.svg';
import './App.css';
import Router from './routes';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router />
      </div>
    );
  }
}

export default App;
