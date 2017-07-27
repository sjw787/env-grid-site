import React, { Component } from 'react';
import './NavBar.css'
import Clock from '../Clock/Clock'

class NavBar extends Component{
  constructor(props){
    super(props);
    console.log("props are mate - ", props);
  }



  render(){
    return(
      <div id="header">
        <div id="navItems">
          <span id="title">Welcome.com</span>
          <img src={this.props.logo} id="Nav-logo"/>
          <Clock id="time"/>
        </div>
      </div>
    )
  }
}

export default NavBar
