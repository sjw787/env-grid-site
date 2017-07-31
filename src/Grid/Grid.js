import './Grid.css'
import React, { Component } from 'react'
import GridCell from './GridCell'
const items = [ // Mock Data to render a bunch of items
  {name: "Item 1", value: 5, desc: "Lorem-Ipsum", inc: 1, dec: 1, key: 1},
  {name: "Item 2", value: 5, desc: "Lorem-Ipsum", inc: 1, dec: 1, key: 2},
  {name: "Item 3", value: 5, desc: "Lorem-Ipsum", inc: 1, dec: 1, key: 3},
  {name: "Item 4", value: 5, desc: "Lorem-Ipsum", inc: 1, dec: 1, key: 4},
  {name: "Item 5", value: 5, desc: "Lorem-Ipsum", inc: 1, dec: 1, key: 5},
  {name: "Item 6", value: 5, desc: "Lorem-Ipsum", inc: 1, dec: 1, key: 6}
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
        name={item.name}
        desc={item.desc}
        parent={this}/>
    )
  }

  addCell(){
    this.setState(function(prevState, props){
      let newBody = items
      let length = newBody.length
      newBody.push({
          name: this.state.title || "Default Title",
          desc: this.state.desc || "Lorem Ipsum",
          key: {length}

      });

      return {
        body: this.mapCells(newBody)
      }
    })
  }

  removeCell(index){
    this.setState(function(prevState, props){
      let newBody = items
      newBody.splice(index, 1)
      return {
        body: this.mapCells(newBody)
      }
    })
  }

  hideForm(){
    this.setState((prevState, props) => ({
      form: <div></div>
    }))

    this.setState(() => ({title: "", desc: ""}))

  }

  updateItems(){
    this.addCell()
    this.hideForm()
  }

  titleInputChange(e){
    this.setState({title: e.target.value})
    console.log(this.state)
  }

  descInputChange(e){
    this.setState({desc: e.target.value})
    console.log(this.state)
  }

  showForm(){
    this.setState((prevState, props) => ({
      form: (<div id="Grid-form-container" onClick={() => this.hideForm()}>
              <div id="Grid-form-content" onClick={(e) => e.stopPropagation()}>
                <span id="Grid-form-title">Add A Story</span>
                <div id="Form-inputs">
                  <div id="Form-title">
                    <span id="Form-cell-title">Story Title</span>
                    <input id="Grid-form-input" onChange={(e) => this.titleInputChange(e)}></input>
                  </div>
                  <div id="Form-desc">
                    <span id="Form-cell-desc">Story Desciption</span>
                    <textarea rows="4" cols="50" id="Form-desc-input" onChange={(e) => this.descInputChange(e)}></textarea>
                  </div>
                </div>
                <button id="Grid-ok-button" onClick={() => this.updateItems()}>OK</button>
                <button id="Grid-cancel-button" onClick={() => this.hideForm()}>Cancel</button>
              </div>
             </div>)
    }))
  }

  render(){
    return (
      <div>
        {this.state.form}
        <div id="Grid-container">
          <div>
            <div id="Grid-controls">
              <button id="Grid-add-button" onClick={() => this.showForm()}>Click To Add a Story</button>
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
      </div>
    )
  }
}
export default Grid
