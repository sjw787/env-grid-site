import React, {Component} from 'react'

class GridCell extends Component{
  constructor(props){
    super(props)
    this.state = props;
  }

  componentDidMount() {
    console.log("Mounted ;)");
  }

  componentWillUnmount() {
    console.log("Unmounted ;)))");
  }

  addButton(){
    this.setState((prevState, props) => ({
      value: (prevState.value + props.inc)
    }));
  }

  subButton(){
    this.setState((prevState, props) => ({
      value: (prevState.value - props.dec)
    }));
  }

  deleteCell(){
    this.props.parent.removeCell(this.props.index);
  }

  render() {
    return (
      <div id={this.props.name} draggable="true" className="GridCell-content">
        <i className="fa fa-trash-o" onClick={() => this.deleteCell()}>Delete</i>
        <span className="name">{this.props.name}</span>
        <span className="total">Total: {this.state.value}</span>
        <button className="addButton" onClick={() => this.addButton()}>+</button>
        <button className="subButton" onClick={() => this.subButton()}>-</button>
      </div>
    )
  }
}
export default GridCell
