import React, { useRef, useState } from 'react';

const Game = () => {
    const player = [
        { id: "1", name: "aasds" },
        { id: "2", name: "aas" },
        { id: "3", name: "qwerty" },
        { id: "4", name: "pqrs" },
        { id: "5", name: "ploo" },
    ];
    const scrollRef = useRef(null);
    const [msg, setMsg] = useState("");
    const [chat, setChat] = useState([]);
    const sendMessage = (e) => {
        e.preventDefault();
        setChat([...chat, msg]);
        setMsg("");
        setTimeout(() => {
            if (scrollRef.current) {
                scrollRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "end"
                });
            }
        }, [50]);
    }
    return (
        <div className='game-page'>
            <div className="round">
                <div className="round-left">
                    <button>{"<-"}</button>
                </div>
                <div className='round-center'>
                    <h1>4th Round</h1>
                    <div className='round-dot-grp'>
                        <div className='round-dot' style={{ backgroundColor: "blue" }}>
                        </div>
                        <div className='round-dot' style={{ backgroundColor: "blue" }}>
                        </div>
                        <div className='round-dot' style={{ backgroundColor: "blue" }}>
                        </div>
                        <div className='round-dot' style={{ backgroundColor: "blue" }}>
                        </div>
                        <div className='round-dot'>
                        </div>
                    </div>
                    <p>02:37</p>
                </div>
                <div className="round-right">
                    <button>M</button>
                </div>
            </div>
            <div className='playing-ground'>
                <div className="ground-1">
                    <div className='voice-box'>

                    </div>
                </div>
                <div className='ground-2'>
                    <div className='score-ground'>
                        <p className='score-title'>Players</p>
                        <div className='score-board'>
                            {player && player.map((item) => (
                                <div className='score-player'>
                                    <p>{item.id}. {item.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='score-ground'>
                        <p className='score-title'>Chat Box</p>
                        <div className='chat-board' >
                            <div className='chat-area' >
                                <div className='chat-fix'></div>
                                {chat && chat.map((item) => (
                                    <div className='chats-area'>
                                        <p>{item}</p>
                                    </div>
                                ))}
                                <div ref={scrollRef}>
                                </div>
                            </div>
                            <div className='chat-box'>
                                <form onSubmit={sendMessage}>
                                    <input value={msg} onChange={e => setMsg(e.target.value)} type="text" placeholder='Message...' />
                                    <button>Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Game;