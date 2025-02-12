import React, { useRef } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import GoTop from "../components/GoTop"; // ✅ Import the button!

const MainLayout = () => {
  const refScrollUp = useRef();

  return (
    <>
      <div ref={refScrollUp}></div>
      <Navbar />
      <Outlet />
      <GoTop /> {/* ✅ Add the button here */}
    </>
  );
};

export default MainLayout;
