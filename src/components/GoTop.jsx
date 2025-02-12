import React, { useState, useEffect } from "react";

const GoTop = () => {
  const [showGoTop, setShowGoTop] = useState("goTopHidden");

  const handleVisibleButton = () => {
    console.log("Scroll position:", window.scrollY); // Debugging log

    if (window.scrollY > 50) {
      setShowGoTop("goTop");
    } else {
      setShowGoTop("goTopHidden");
    }
  };

  useEffect(() => {
    console.log("GoTop component mounted!"); // Debugging log
    window.addEventListener("scroll", handleVisibleButton);
    handleVisibleButton(); // Check visibility immediately

    return () => {
      window.removeEventListener("scroll", handleVisibleButton);
    };
  }, []);

  return (
    <div className={showGoTop} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
      <button className="goTop">
        <i className="goTop__text fas fa-angle-up"></i>
      </button>
    </div>
  );
};

export default GoTop;
