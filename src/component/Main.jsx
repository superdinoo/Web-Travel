import React from "react";

const Main = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
          <p>All Inclusive</p>
          <h1 className="font-bolt text-5xl md:text-7xl drop-shadow-2xl">
            Private Beach & Getways
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Quo ut quis
            est, id consequuntur sequi ipsum vitae sit non exercitationem.
          </p>
          <button className="bg-white text-black">Reserve Now</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
