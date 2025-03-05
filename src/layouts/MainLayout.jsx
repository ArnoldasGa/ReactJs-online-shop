import React, { useRef , useEffect  } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import GoTop from "../components/GoTop";
import { CartProvider } from "../components/CartContext";
// import FullProduct from './FullProduct'; // Example of FullProduct component
// import MiniCart from './MiniCart'; // ✅ Import the button!


const MainLayout = () => {
  const refScrollUp = useRef();

  return (
    <>
    <CartProvider>
      <div ref={refScrollUp}></div>
      <Navbar />
      <Outlet />
      <GoTop />
    </CartProvider>
    </>
  );
};

export default MainLayout;
