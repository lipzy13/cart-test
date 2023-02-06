import { React, useContext} from 'react'
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from 'react-icons/io5';
import '../Component/Card.css';
import { ShoeContext } from '../shoeContext';

function Card(props) {

  const [cart, addToCart] = useContext(ShoeContext);
  
  return (
    <div className='w-full text-center bg-blue-200 rounded-xl shadow-md px-4 py-5 lg:flex lg:flex-row lg:justify-between'>
        <img src={props.image} alt='shoe' className='object-cover w-3/4 mx-auto lg:w-1/2 lg:mx-0' />
            <p className='lg:text-lg lg:font-openSans lg:font-semibold lg:flex hidden lg:my-auto'>{props.name}</p>
        <div className='flex flex-row items-center justify-between mt-5 lg:flex-col'>
              <IoMdHeartEmpty size={15}/>
            <p className='text-lg font-openSans font-semibold'>${props.price}</p>
            <button type="button" onClick={ ()=> {addToCart(props)}
            }>
            <IoCartOutline size={15}/>
             </button>
        </div>
    </div>
  )
}

export default Card