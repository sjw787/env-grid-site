import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from '../NavBar/NavBar'
import Grid from '../Grid/Grid'
class App extends Component {
  constructor(props){
    super(props);
    console.log("props are mate - ", props);
  }

  // var props = {name, sackHole}
  render() {
    return (
      <div className="App">
        <NavBar logo={logo}/>
        <Grid/>
      </div>

    );
  }
}

export default App;
