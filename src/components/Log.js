import React from 'react';

const Log = ({val}) => {
    return (
        <div className='log'>
            <p>{val.changedAt}</p>
            <p>{val.changedtxt}</p>
        </div>
    );
}
 
export default Log;