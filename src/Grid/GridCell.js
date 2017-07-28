import React, {Component} from 'react'

class GridCell extends Component{
  constructor(props){
    super(props)
    console.log("cellProps",props);
  }

  render() {
    return (
      <div id={this.props.item.name} className="GridCell-content">Item {this.props.index} of {this.props.itemsLength}: {this.props.item.name}</div>
    )
  }
}
export default GridCell
