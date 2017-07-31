import React, {Component} from 'react'
import 'font-awesome/css/font-awesome.css'

class GridCell extends Component{
  constructor(props){
    super(props)
    this.state = props
  }

  componentDidMount() {}

  componentWillUnmount() {}

  addButton(){
    this.setState((prevState, props) => ({
      value: (prevState.value + props.inc)
    }))
  }

  subButton(){
    this.setState((prevState, props) => ({
      value: (prevState.value - props.dec)
    }))
  }

  deleteCell(){
    this.props.parent.removeCell(this.props.index)
  }

  render() {
    return (
      <div id={this.props.name} draggable="true" className="GridCell-content">
        <span className="name">{this.props.name}</span>
        <i className='GridCell-icon fa fa-trash-o' onClick={() => this.deleteCell()}></i>
        <span className="total">Total: {this.state.value}</span>
        <span className="name">Description: </span>
        <p>{this.props.desc}</p>
        <button className="addButton" onClick={() => this.addButton()}>+</button>
        <button className="subButton" onClick={() => this.subButton()}>-</button>
      </div>
    )
  }
}
export default GridCell
