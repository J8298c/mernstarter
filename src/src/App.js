import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
let workoutObject;

class App extends Component {
  componentWillMount(){
    axios.get('http://localhost:8080')
      .then(response =>{
        console.log(response.data)
        const {name, key} = response.data; 
      }).catch(error =>{
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        {workoutObject}
      </div>
    );
  }
}

export default App;
