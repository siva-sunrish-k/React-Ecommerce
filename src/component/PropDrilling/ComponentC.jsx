import React from 'react'

const ComponentC = ({ user }) => {
    return (
        <>
            <div className='py-5 border border-blue-500'>
                <div>ComponentC</div>
                <p>From ComponentC: {user}</p>

            </div>
        </>
    );
};

export default ComponentC;