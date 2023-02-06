import './App.css';
import { FaShoppingCart } from "react-icons/fa";
import Card from './Component/Card';
import { SiNike } from "react-icons/si";
import { shoeData } from './consts/shoeData';
import Cart from './Component/Cart';
import { useState } from 'react';
import { ShoeProvider } from './shoeContext';



function App() {

  const [visible, setVisible] = useState(false);


  return (

      <ShoeProvider >
    <div className="container-sm mx-5 my-5">
        <div className=''>
        <div className='flex flex-row justify-between my-3'>
        <SiNike size={35}/>
          <button onClick={()=> setVisible(!visible)}>
          <FaShoppingCart size={18} color={'#0284c7'}/>
          </button>
        </div>
          <Cart visibility={visible}/>
        </div>
      <div className='grid grid-cols-2 gap-3'>
        {shoeData.map((shoe)=> {
          return <Card key={shoe.id} name={shoe.name} price={shoe.price} image={shoe.image} />
          
        })}
      </div>
    </div>
      </ShoeProvider>
  );
}

export default App;
