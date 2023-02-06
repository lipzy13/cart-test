import React from 'react'
import { ShoeContext } from '../shoeContext.js';
import CartItems from './CartItems.js';


function Cart(props) {

  const [cart, addToCart] = React.useContext(ShoeContext);

  console.log(cart)

  return (
    <div className='fixed z-10 w-full bg-slate-300 rounded-md max-w-sm' style={{display : props.visibility ? 'block' : 'none'}}>
        {cart.length === 0 ? <h1 className='text-center font-openSans py-2'>Cart is Empty</h1> : 
        cart.map((item)=> {
          return <CartItems key={item.id}  price={item.price} image={item.image} qty={item.qty}/>
        })
        }

        <div className='flex-row justify-between px-5 items-center py-3 rounded-md' style={{display : cart.length === 0 ? 'none' : 'flex'}}>
          <h1 className='text-center font-openSans'>Total: ${
                      cart.reduce((total, item)=> {
            return total + item.qty * item.price
          }, 0)
          }</h1>
          <button className='bg-slate-500 text-white font-openSans px-5 py-2 rounded-md'>Checkout</button>
        </div>
        
    </div>
  )
}

export default Cart