import React, { Component } from 'react'
import Item from "./Item"
export class items extends Component {
  render() {
    return (
      <main>
        {this.props.items.map(el => (
            <Item key={el.id} item={el} onShowItem={this.props.onShowItem} onAdd={this.props.onAdd}/>
        ))}
      </main>
    )
  }
}

export default items