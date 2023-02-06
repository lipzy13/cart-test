import { React, createContext, useState } from 'react';

export const ShoeContext = createContext();

export const ShoeProvider = (props) => {
    const [cart, setCart] = useState([]);
    
    const addToCart = (item) => {

        //checking items if there is already in the cart and changing the quantity
        for(let i = 0; i < cart.length; i++){
            if(item.image === cart[i].image){
                let newCart = [...cart];
                newCart[i].qty += 1;
                setCart(newCart);
                return;
            }
        }
        setCart([...cart, 
            {
                id: cart.length + 1,
                price: item.price,
                image: item.image,
                qty: 1
            }
            ])
    }

    const addQty = (item) => {
        let newCart = [...cart];
        for(let i = 0; i < cart.length; i++){
            if(item.image === cart[i].image){
                newCart[i].qty += 1;
                setCart(newCart);
                return;
            }
        }
    }


    const removeQty = (item) => {
        let newCart = [...cart];
        for(let i = 0; i < cart.length; i++){
            if(item.image === cart[i].image){
                newCart[i].qty -= 1;
                if(newCart[i].qty === 0){
                    newCart.splice(i, 1);
                }
                setCart(newCart);
                return;
            }
        }
    }


    
    return (
        <ShoeContext.Provider value={[cart, addToCart, addQty, removeQty]}>
        {props.children}
        </ShoeContext.Provider>
    )
    }