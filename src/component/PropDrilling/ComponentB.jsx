import React from 'react'
import ComponentC from './ComponentC';

const ComponentB = ({ data }) => {
    return (
        <>
            <div className='py-5 border border-red-500'>
                <div>ComponentA</div>
                <p>From ComponentB: {data}</p>
                <ComponentC user={data} />
            </div>
        </>
    );
};

export default ComponentB;
