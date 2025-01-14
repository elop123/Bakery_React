import React, { useEffect, useState } from 'react'
import slide1 from '../../assets/images/Billeder/br├©d/slide1.jpg'
import slide2 from '../../assets/images/Billeder/br├©d/slide2.jpg'
import slide3 from '../../assets/images/Billeder/br├©d/slide3.jpg'
import pill from '../../assets/images/Billeder/br├©d/chevron.png'

import style from './Slider.module.scss'


export const Slider = () => {
const imageArray = [slide1, slide2, slide3]
const[currentIndex, setCurrentIndex] = useState(0)

//updates the index nr with 1 that is used to show th
function nextIndex () {
    if (currentIndex === imageArray.length - 1){
        setCurrentIndex(0);
    }
    else{
        setCurrentIndex(currentIndex + 1);
    }
   
}

function previousIndex () {
    if (currentIndex=== 0){
        setCurrentIndex(imageArray.length - 1);
    }
    else{
        setCurrentIndex(currentIndex - 1);
    }
   
}

useEffect(() => {
    let timeout=setInterval(() => {
      nextIndex();
    //setCurrentIndex(currentIndex+1);
    console.log(currentIndex)
    }, 2000);
    return() => clearInterval(timeout);
},[currentIndex]);

  return (
    <header className={style.slider}>
        <img src={imageArray[currentIndex]} alt="slide1" />
        <h2 className={style.text}>Vi elsker at lave brød</h2>
        <button className={style.pill} onClick={() => previousIndex()}>
        <img src={pill} alt="Previous" />
    </button>
    <button className={style.pill1} onClick={() => nextIndex()}>
        <img src={pill} alt="Next" />
    </button>
        <div className={style.dots}>
        <div onClick={()=>{setCurrentIndex(0)}}></div>
        <div onClick={()=>{setCurrentIndex(1)}}></div>
        <div onClick={()=>{setCurrentIndex(2)}}></div>
        </div>
    </header>
  )
}
