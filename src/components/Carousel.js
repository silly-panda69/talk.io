import React,{useEffect, useState} from 'react';
import talking from '../assets/talking.jpeg'
import guessing from '../assets/guessing.jpeg'
import winning from '../assets/winner.jpg';

const Carousel = () => {
    const carouselData=[
        {title: "Talk",link: talking},
        {title: "Guess the player",link: guessing},
        {title: "Get Points",link: winning}
    ];
    const [num,setNum]=useState(1);
    const [change,setChange]=useState(false);
    const changeNext=()=>{
        setChange(true);
        setTimeout(()=>{
            if(num>=3){
                setNum(1);
            }else{
                setNum(num+1);
            }
        },300)
        setTimeout(()=>{
            setChange(false);
        },500);
    }
    const changePrev=()=>{
        setChange(true);
        setTimeout(()=>{
            if(num<=1){
                setNum(3);
            }else{
                setNum(num-1);
            }
        },300);
        setTimeout(()=>{
            setChange(false);
        },500);
    }
    return (
        <div className='carousel-page'>
            <p className='carousel-title'>How to play ?</p>
            <div className='carousel-grp'>
                <button onClick={changePrev}>{"<-"}</button>
                <div className={`carousel ${change? "img-on" : "img-off"}`} >
                    <div className='img-carousel'>
                        <img src={carouselData[num-1].link} alt="" loading='eager'/>
                    </div>
                    <div className='img-title'>
                        <p>{carouselData[num-1].title}</p>
                    </div>
                </div>
                <button onClick={changeNext}>{"->"}</button>
            </div>
        </div>
    );
}
 
export default Carousel;