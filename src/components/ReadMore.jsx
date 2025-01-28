import React, { useState } from "react";
 
const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <p className="text">
            {isReadMore ? text.slice(0, 100) : text}
            <span
                onClick={toggleReadMore}
                className="read-or-hide"
                style={{ color: "green" }}
            >
                {isReadMore ? "...read more" : " show less"}
            </span>
        </p>
    );
};
 
const Content = (description) => {
    return (
        <div className="container">
            {/* <h2> */}
                <ReadMore>
                    {description}
                </ReadMore>
            {/* </h2> */}
        </div>
    );
};
 
export default Content;