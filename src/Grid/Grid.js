import './Grid.css'
import React, { Component } from 'react';
import GridHeader from './GridHeader'
import GridCell from './GridCell'
import createAbsoluteGrid from 'react-absolute-grid';

const displayProps = {
                    dragEnabled: true,
                    responsive: true
                  };

const AbsGrid = createAbsoluteGrid(GridCell, displayProps);

console.log("AbsGrid", AbsGrid);

var sampleItems = [
 {key: 1, name: 'Test', sort: 0, filtered: 0},
 {key: 2, name: 'Test 1', sort: 1, filtered: 0},
];

class Grid extends Component{

  render(){
    return (
      <div id="Grid-container">
        <GridHeader/>
        <AbsGrid items={sampleItems}/>
      </div>
    )
  }
}
export default Grid;
