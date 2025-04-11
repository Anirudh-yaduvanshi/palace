import React from "react";
import merrige from "/gallery/14.png";
import "../App.css";
const Lannding = () => {
  return (
    <>
      <div className="md:h-4/5  w-11/12 flex mx-auto  h-60">
       
        <img 
          src={merrige}
          className=" border-b-1 pb-1 md:pb-0  bg-center  mx-auto bg-no-repeat bg-contain"
          alt="shadi"
        />
        
        
      </div>
    </>
  );
};

export default Lannding;
