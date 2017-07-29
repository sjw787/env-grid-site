import './Grid.css'
import React, { Component } from 'react';
import GridHeader from './GridHeader'
import GridCell from './GridCell'

class Grid extends Component{

  render(){
    return (
      <div id="Grid-container">
        <GridHeader/>
        <div id="Grid-content">
          <GridCell name="Item 1" value={5} inc={1} dec={1}/>
          <GridCell name="Item 2" value={5} inc={1} dec={1}/>
          <GridCell name="Item 3" value={5} inc={1} dec={1}/>
          <GridCell name="Item 4" value={5} inc={1} dec={1}/>
          <GridCell name="Item 5" value={5} inc={1} dec={1}/>
          <GridCell name="Item 6" value={5} inc={1} dec={1}/>
        </div>
      </div>
    )
  }
}
export default Grid;
