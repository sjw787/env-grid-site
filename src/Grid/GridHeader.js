import React, {Component} from 'react'

class GridHeader extends Component{
  render(){
    return (
      <div>
        <div id="Grid-controls">
          <button id="Grid-add-button">Click To Add a Story</button>
        </div>
        <div id="GridHeader-container">
          <div className="GridHeader-item GH-item-border-right">Queued</div>
          <div className="GridHeader-item GH-item-border-right">QA-1</div>
          <div className="GridHeader-item GH-item-border-right">QA-2</div>
          <div className="GridHeader-item">QA-3</div>
        </div>
      </div>
    )
  }
}

export default GridHeader
