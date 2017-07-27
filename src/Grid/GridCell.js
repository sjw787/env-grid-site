import React, {Component} from 'react'

class GridCell extends Component{
  constructor(props){
    super(props)
    console.log("Cell Props are", this.props);
  }

  render() {
    return (
      <div id={this.props.item.name} className="GridCell-content">{this.props.item.name}</div>
    )
  }
}
export default GridCell
