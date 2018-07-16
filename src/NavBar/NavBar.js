import React, { Component } from 'react'
import './NavBar.css'
import Clock from '../Clock/Clock'

class NavBar extends Component{
  render(){
    return(
      <div id="header">
        <div id="navItems">
          <span id="title"><a href="https://github.com/sjw787/env-grid-site">View on Github</a></span>
          <img src={this.props.logo} alt="logo" id="Nav-logo"/>
          <Clock id="time"/>
        </div>
      </div>
    )
  }
}

export default NavBar
