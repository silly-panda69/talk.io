import React,{useEffect} from 'react';

const Drop = ({drop,children,height,func,title}) => {
    return (
        <div className={`drop ${drop ? "drop-on": "drop-off"} ${title==="Settings" ? "":"settings-children"}`} style={{height: height}}>
             <div className="settings-title">
                <p>{title}</p>
                <button onClick={func}>x</button>
            </div>
            <div className={`${title==="Settings" ? "settings-children1":"settings-children2"}`}>
                {children}
            </div>
        </div>
    );
}
 
export default Drop;