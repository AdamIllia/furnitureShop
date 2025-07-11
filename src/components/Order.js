import React, { Component } from 'react'
import { AiFillDelete } from "react-icons/ai";
export class Order extends Component {
  render() {
    return (
      <div className='item'>
        <img alt='' src={'./img/' + this.props.item.img}/>
        <h2>{this.props.item.title}</h2>
        
        <b>{this.props.item.price}zl</b>
        <AiFillDelete className='delete-icon' onClick={()=> this.props.onDelete(this.props.item.id)}/>
      </div>
    )
  }
}

export default Order