import React, { useEffect, useState } from 'react'
import ComponentB from './ComponentB';

const ComponentA = () => {

    const [user, setUser] = useState("siva");

    return (
        <>
            <div className='py-5 border border-green-500'>
                <div>ComponentA</div>
                <ComponentB data={user} />
            </div>

        </>
    );
};

export default ComponentA;