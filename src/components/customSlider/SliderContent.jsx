import React from "react";

function SliderContent ({ activeIndex, sliderImage }) {
    return (
        <section>
            {sliderImage.map((slider, index) => (
                <div
                key={index}
                className={index === activeIndex ? "slides active" : "inactive"}
                >
                    <img className="slide-image" src={slider.urls} alt="" />
                    {/* <h2 className="slider-title">{slider.title}</h2>
                    <h3 className="slider-text">{slider.desciption}</h3> */}
                </div>
            ))}
        </section>
    );
}

export default SliderContent;