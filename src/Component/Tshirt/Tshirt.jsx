import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirt,handleAddToCart}) => {
    const {name,picture,price} = tshirt
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
           <div className='details'>
           <h4>{name}</h4>
            <p>Price:${price}</p>
            <button onClick={()=>handleAddToCart(tshirt)}>Buy Now</button>
           </div>
        </div>
    );
};

export default Tshirt;