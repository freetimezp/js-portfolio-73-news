import React from 'react';
import './sci.css';

import { scis } from '@/data/data';

const Sci = () => {
    return (
        <>
            {scis.map(sci => (
                <a href={sci.link} key={sci.id} className='mx-2'>
                    <span className={sci.icon}></span>
                </a>
            ))}
        </>
    );
}

export default Sci;
