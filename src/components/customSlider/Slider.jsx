import React , {useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import Arrows from "./Arrows";
import sliderImage from "./sliderImage";
import "./slider.css";

const len = sliderImage.length - 1;

function Slider(props) {
    const [activeIndex, setActionIndex] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setActionIndex(activeIndex === len ? 0 : activeIndex + 1);
        }, 5000);
        return() => clearInterval(interval);
    }, [activeIndex]);

    return (
        <div className="slider-container">
            <SliderContent activeIndex={activeIndex} sliderImage={sliderImage}/>
            <Arrows
                prevSilder={() =>
                    setActionIndex(activeIndex < 1 ? len : activeIndex - 1)
                }
                nextSlider={() =>
                    setActionIndex(activeIndex === len ? 0 : activeIndex + 1)
                }
            />
            <Dots
            activeIndex={activeIndex}
            sliderImage={sliderImage}
            onclick={(activeIndex) => setActionIndex(activeIndex)}/>
        </div>
    )
}

export default Slider;