import React from 'react';
import CodeImg from '../assets/code.jpg';

const Tutorial = () => {
  return (
    <div className="xl:mx-32 xl:my-8 md:flex bg-gray-300 rounded-lg p-4">
      <div className="relative h-48 w-64 sm:h-64 sm:w-96 mx-auto md:mx-0">
        <img src={CodeImg}  alt="Some code" className="h-48 w-64 sm:h-64 sm:w-96" />
        <p className="absolute bottom-0 right-0 p-1 m-1 text-white" style={{backgroundColor: 'rgba(0,0,0,0.7)'}}>8:00</p>
      </div>
      <div className="relative sm:ml-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl">Git Tutorial</h2>
        <p>Quick tutorial of how to use Git.</p>
        <p className="absolute bottom-0 left-0">10.9.2019 13:12</p>
      </div>
    </div>
  );
};

export default Tutorial;
