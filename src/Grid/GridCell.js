import React, {Component} from 'react'

class GridCell extends Component{
  constructor(props){
    super(props)
    this.state = {value: props.value};
    console.log("cellProps",this.state);
  }

  componentDidMount() {
    console.log("Mounted ;)");
  }

  componentWillUnmount() {
    console.log("Unmounted ;)))");
  }

  addButton(){
    this.setState(function(prevState, props) {
      return {
        value: (prevState.value + props.inc)
      }
    });
  }

  subButton(){
    this.setState(function(prevState, props) {
      return {
        value: (prevState.value - props.dec)
      }
    });
  }

  render() {
    return (
      <div id={this.props.name} draggable="true" className="GridCell-content">
        <span className="name">{this.props.name}</span>
        <span className="total">Total:{this.state.value}</span>
        <button className="addButton" onClick={() => this.addButton()}>+</button>
        <button className="subButton" onClick={() => this.subButton()}>-</button>
      </div>
    )
  }
}
export default GridCell
