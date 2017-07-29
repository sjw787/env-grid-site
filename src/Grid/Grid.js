import './Grid.css'
import React, { Component } from 'react';
import GridHeader from './GridHeader'
import GridCell from './GridCell'
const items = [
  {
    name: "Item 1",
    value: 5,
    inc: 1,
    dec: 1,
    key: 1
  },
  {
    name: "Item 2",
    value: 5,
    inc: 1,
    dec: 1,
    key: 2
  },
  {
    name: "Item 3",
    value: 5,
    inc: 1,
    dec: 1,
    key: 3
  },
  {
    name: "Item 4",
    value: 5,
    inc: 1,
    dec: 1,
    key: 4
  },
  {
    name: "Item 5",
    value: 5,
    inc: 1,
    dec: 1,
    key: 5
  },
  {
    name: "Item 6",
    value: 5,
    inc: 1,
    dec: 1,
    key: 6
  }
]
class Grid extends Component{
  constructor(props){
    super(props)
    console.log("props", props);
    const cells = items.map((item, index) =>
      <GridCell key={index} name={item.name} value={item.value} inc={item.inc} dec={item.dec}/>
    )
    this.state = {body: cells}
  }

  render(){
    console.log((this.state.body));
    return (
      <div id="Grid-container">
        <GridHeader/>
        <div id="Grid-content">
          {this.state.body}
        </div>
      </div>
    )
  }
}
export default Grid;
