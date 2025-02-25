import React from "react";

function Arrows({ prevSilder, nextSlider }) {
    return (
        <div className="arrows">
            <span className="prev" onClick={prevSilder}>
                &#10094;
            </span>
            <span className="next" onClick={nextSlider}>
                &#10095;
            </span>
        </div>
    );
}

export default Arrows;