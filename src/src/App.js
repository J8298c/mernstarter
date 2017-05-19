import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  componentWillMount(){
    axios.get('http://localhost:8080')
      .then(response =>{
        console.log(response)
      }).catch(error =>{
        console.log(error);
      });
  }
  render() {
    return (
      <h1>Check Console</h1>
    );
  }
}

export default App;
