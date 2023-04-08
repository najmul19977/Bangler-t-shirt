import React, { useContext } from 'react';
import { MoneyContext } from '../Gandpa/Gandpa';

const Sister = () => {
    const [money] =useContext(MoneyContext);
    return (
        <div>
            <h2>sister</h2>
            <p>Gandpa Money : {money}</p>
        </div>
    );
};

export default Sister;