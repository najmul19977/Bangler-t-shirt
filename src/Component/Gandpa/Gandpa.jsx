import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncale from '../Uncale/Uncale';
import Auntry from '../Aunty/Auntry';
import './Gandpa.css'


export const RingContext = createContext('gold');
export const MoneyContext = createContext(0);
const Gandpa = () => {
    const ring = 'diamond';
    const [money, setMoney] = useState(0);


    return (
        <div className='gandpa'>
            <h2>gandpa</h2>
            <p>Has Mony :{money}</p>

            <MoneyContext.Provider value={[money,setMoney]}>

                <RingContext.Provider value='golden ring'>
                    <section className='flex'>
                        <Father ring={ring}></Father>
                        <Uncale></Uncale>
                        <Auntry ring={ring}></Auntry>
                    </section>


                </RingContext.Provider>

            </MoneyContext.Provider>


        </div>
    );
};

export default Gandpa;

/**
 * 1.create context and export
 * 2.create a provider and pass a value
 * 3.use context to recived the value
*/