import React from 'react';
import Tshirt from '../Tshirt/Tshirt';
import './Cart.css'

const Cart = ({cart,handleRemoveFromCart}) => {
    let message ;
    if(cart.length ===0){
        message=<p>Please add some Product</p>

    }
    else{
        message =
            <div className={cart.length===1 ? 'green':'red'}>
              Thankes for wasting your mony
            </div>
    }
    return (
        <div>
            <h2>Order Summary:{cart.length}</h2>
            {message}
            {
                cart.map(pd =><p 
                    key={pd._id}
                    >{pd.name} <button onClick={()=>handleRemoveFromCart(pd._id)}>X</button></p>)
            }
        </div>
    );
};

export default Cart;
/*
*use if or if else to set a veriable that will contain an element components
*ternary :contition? 'for true':'false'
*logical && :(if the condition is true then the next thing will be displey)
*logical || (if the condition is false then the next thing will be displey)
*/

/** conditional css class
 * 
 * 
*/