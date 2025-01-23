import React from 'react'

const Hero = () => {
  return (
    <div class="flex flex-col justify-center items-center my-16">
    <h1 class="text-5xl font-bold text-gray-800 leading-tight">
      Welcome to My Site
    </h1>
    <p class="text-2xl text-gray-600 mt-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <button class="bg-indigo-600 hover:bg-indigo-700 text-white text-xl mt-8 py-4 px-8 rounded-lg">
      Get Started
    </button>
    </div>
  )
}

export default Hero