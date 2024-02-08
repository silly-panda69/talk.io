import React, { useEffect, useState ,useRef} from 'react';
import { Link } from 'react-router-dom';
import Drop from '../components/Drop';
import LogFile from '../components/LogFile';
import Settings from '../components/Settings';

const Home = () => {
    const [drop1,setdrop1]=useState(false);
    const [drop2,setdrop2]=useState(false);
    const dropRef=useRef(null);
    const btnRef=useRef(null);
    const handleClick1=()=>{
        setdrop2(false);
        setdrop1(!drop1);
    }
    const handleClick2=()=>{
        setdrop1(false);
        setdrop2(!drop2);
    }
    const handleClick3=()=>{
        setdrop1(false);
        setdrop2(false);
    }
    const handleOutside=(e)=>{
        if(dropRef.current && !dropRef.current.contains(e.target)){
            handleClick3();
        }
    }
    const item=[
        {changedAt: "July 2nd 2021",changedtxt: "Changed Title" , id: 1},
        {changedAt: "July 3rd 2021",changedtxt: "Changed Title" , id: 2},
        {changedAt: "July 4th 2021",changedtxt: "Changed Title" , id: 3},
        {changedAt: "July 2nd 2021",changedtxt: "Changed Title" , id: 4},
        {changedAt: "July 3rd 2021",changedtxt: "Changed Title" , id: 5},
        {changedAt: "July 4th 2021",changedtxt: "Changed Title" , id: 6}
    ];
    useEffect(()=>{
        document.addEventListener("mousedown",handleOutside);
        return () => {
            document.removeEventListener('mousedown',handleOutside);
        };
    },[]);
    return (
        <div className='home'>
            <div className='title'>
                <h1>talk.io</h1>
                <div className='title-btn'>
                    <button><Link to={'/join'}>Join Game</Link></button>
                    <button><Link to={'/new'}>New Game</Link></button>
                </div>
            </div>
            <div className='title-bottom'>
                <div className='footer'>
                    <div className='left-foot' ref={dropRef}>
                        <button className='left-button' onClick={handleClick2}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-journal-code" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8.646 5.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 0 1 0-.708m-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 8l1.647-1.646a.5.5 0 0 0 0-.708" />
                                <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
                                <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
                            </svg>
                        </button>
                        <button ref={btnRef} className='left-button' onClick={handleClick1}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
                                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
                                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
                            </svg>
                        </button>
                        <Drop drop={drop1}  title={"Settings"} func={handleClick3}>
                            <Settings func={handleClick3}></Settings>
                        </Drop>
                        <Drop drop={drop2} title={"Change Log"} func={handleClick3} height="200px">
                            <LogFile item={item} func={handleClick3}></LogFile>
                        </Drop>
                    </div>
                    {/* <div className='right-foot'>
                        <button>S</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Home;