import React, {Component} from 'react'
import { createStore } from 'redux'
import 'font-awesome/css/font-awesome.css'

function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1
  case 'DECREMENT':
    return state - 1
  default:
    return state
  }
}

let store = createStore(counter)

store.subscribe(() =>
  console.log(store.getState())
)

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

store.subscribe(() =>
  console.log(store.getState())
)

class GridCell extends Component{
  constructor(props){
    super(props)
    this.state = props
  }

  componentDidMount() {
    this.setState((prevState, props) => ({
      value: ((prevState.value || 0))
    }))
  }

  componentWillUnmount() {}

  addButton(){
    this.setState((prevState, props) => ({
      value: ((prevState.value || 0) + 1)
    }))
  }

  subButton(){
    this.setState((prevState, props) => ({
      value: ((prevState.value || 0) - 1)
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
