import React from 'react';
import Cousin from '../Cousin/Cousin';

const Auntry = ({ring}) => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className='flex'>
                <Cousin>Abir</Cousin>
                <Cousin hasFriend={true} ring={ring}>Niber</Cousin>
                <Cousin>Vabir</Cousin>
            </section>
        </div>
    );
};

export default Auntry;