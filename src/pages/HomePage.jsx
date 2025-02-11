import React from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";

function HomePage() {
  return (
    <>
    <Hero/>
      <div class="flex flex-wrap justify-center mt-10 bg-lime-700">
        {/* <Card/>
        <Card/>
        <Card/> */}
      </div>
    </>
  );
}

export default HomePage;
