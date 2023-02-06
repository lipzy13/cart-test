import React from 'react'
import { BiMinusCircle,BiPlusCircle } from "react-icons/bi";
import { ShoeContext } from '../shoeContext';

function CartItems(props) {
  
  const [cart, setCart, addQty, removeQty] = React.useContext(ShoeContext);

  return (
    <div className='flex flex-row justify-between px-5 items-center py-3 border-b-2 border-slate-500 rounded-md'>
    <img src={props.image} alt='shoe' className='w-1/3'/>
    <h1 className='font-openSans'> ${props.price * props.qty}</h1>
    <button onClick={
      ()=> {
        removeQty(props)
      }
    }>
    <BiMinusCircle className='text-xl cursor-pointer' />
    </button>
    <p className='text-lg font-openSans'> {props.qty}</p>
    <button onClick={
      ()=> {
        addQty(props)
      }
    }>
    <BiPlusCircle className='text-xl cursor-pointer' />
    </button>
  </div>
  )
}


export default CartItems
