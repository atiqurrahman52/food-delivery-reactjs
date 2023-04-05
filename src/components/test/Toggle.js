import React from 'react';
import { useState } from 'react';

const Toggle = () => {
    const [toggle, setToggle] =useState(false)
    return (
        <div className='container py-20'>
            <button
            className='border p-2 text-yellow'
            onClick={() => setToggle(!toggle)}
             >
                Toggle
            </button>
            <div
               className={` ${toggle ? "visible":"invisible"}`}
             >
                <p>One</p>
                <p>Two</p>
            </div>
            
        </div>
    );
};

export default Toggle;