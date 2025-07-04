import React from 'react'
import { useState } from 'react'
import {FaAlignJustify} from 'react-icons/fa'
import Order from './Order';


   const showOrders =(props) => {
    let summa = 0; 
    props.orders.forEach(el => summa+= Number.parseFloat(el.price));
   return(
     <div>
    {props.orders.map(el => (
      <Order onDelete={props.onDelete} key={el.id} item={el}/>
    ))}
    <p className='summa'>Sum:{Intl.NumberFormat().format(summa)}zl</p>
    </div>
   );
  };


   const showNoting =  ()=> {
      return(
        <div className='empty'>
          <h2>No goods</h2>
        </div>
      )
   };
export default function Headers(props) {
  let [cartOpen, setCartOpen]= useState(false); 
  return (
    <header>
        <div>
            <span className='logo'>
                House Stuff
            </span>
            <ul className='nav'>
            <li>About us</li>
            <li>Contacs</li>
            <li>Cabinet</li>
            </ul>
            <FaAlignJustify onClick={()=>setCartOpen(cartOpen=!cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>
            {cartOpen && (
              <div className='shop-cart'>
                {props.orders.length > 0 ? 
                showOrders(props) : showNoting()}
              </div>
            )}
        </div>

        <div className='presentation'>

        </div>
    </header>
  )
}
