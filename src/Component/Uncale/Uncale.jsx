import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Gandpa/Gandpa';

const Uncale = () => {
    const [money,setMoney]= useContext(MoneyContext);
    return (
        <div>
            <h2>uncale</h2>
            <p>gandpa Money :{money}</p>
            <button onClick={()=>setMoney(money + 1000)}>Sent 1000tk</button>
            <section className='flex'>
                <Cousin>Nabim</Cousin>
                <Cousin>Naibur</Cousin>
                <Cousin>Arafat</Cousin>
            </section>
        </div>
    );
};

export default Uncale;