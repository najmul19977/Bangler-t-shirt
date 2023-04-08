import React, { useContext } from 'react';
import { RingContext } from '../Gandpa/Gandpa';



const Spacial = ({ring}) => {
    const angti = useContext(RingContext)
    
    return (
        <div>
            <h2>spacial</h2>
            <p><small>ring:{angti}</small></p>
        </div>
    );
};

export default Spacial;