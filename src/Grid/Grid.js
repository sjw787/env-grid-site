import './Grid.css'
import React, { Component } from 'react';
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
    this.state = {body: this.mapCells(items)}
  }

  mapCells(items){
    return items.map((item, index) =>
      <GridCell
        key={index}
        index={index}
        name={item.name}
        value={item.value}
        inc={item.inc}
        dec={item.dec}
        parent={this}/>
    )
  }

  addCell(e){
    e.preventDefault();
    this.setState(function(prevState, props){
      let newBody = items;
      newBody.push({
          name: "newItem",
          value: 5,
          inc: 1,
          dec: 1,
          key: 6
      });

      return {
        body: this.mapCells(newBody)
      };
    });
  }

  removeCell(index){
    this.setState(function(prevState, props){
      let newBody = items
      return {
        body: this.mapCells(newBody)
      };
    });
  }


  render(){
    console.log((this.state.body));
    return (
      <div id="Grid-container">
        <div>
          <div id="Grid-controls">
            <button id="Grid-add-button" onClick={this.addCell.bind(this)}>Click To Add a Story</button>
          </div>
          <div id="GridHeader-container">
            <div className="GridHeader-item GH-item-border-right">Queued</div>
            <div className="GridHeader-item GH-item-border-right GH-item-border-left">QA-1</div>
            <div className="GridHeader-item GH-item-border-right GH-item-border-left">QA-2</div>
            <div className="GridHeader-item GH-item-border-left">QA-3</div>
          </div>
        </div>
        <div id="Grid-content">
          {this.state.body}
        </div>
      </div>
    )
  }
}
export default Grid;
