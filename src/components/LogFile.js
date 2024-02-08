import React from 'react';
import Log from './Log';

const LogFile = ({ item,func}) => {
    return (
        <div className='settings settings-pad'>
            <div className='settings-scroll'>
                {item && item.map((e) => (
                    <Log key={e.id} val={e}></Log>
                ))}
            </div>
        </div>
    );
}

export default LogFile;