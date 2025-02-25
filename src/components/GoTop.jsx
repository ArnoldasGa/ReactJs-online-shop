import React, { useState, useEffect } from "react";

const GoTop = () => {
  const [showGoTop, setShowGoTop] = useState("goTopHidden");

  const handleVisibleButton = () => {
    if (window.scrollY > 50) {
      setShowGoTop("goTop");
    } else {
      setShowGoTop("goTopHidden");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
    handleVisibleButton();
    return () => {
      window.removeEventListener("scroll", handleVisibleButton);
    };
  }, []);

  return (
    <div
      className={showGoTop}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <button className="goTop">
        <i className="goTop__text fas fa-angle-up"></i>
      </button>
    </div>
  );
};

export default GoTop;
