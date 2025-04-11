import React from "react";
import palace from "/gallery/16.png";
import mayank from "/gallery/15.jpg";
import madhan from "/gallery/12.png";
import ritesh from "/gallery/19.jpg";
import Footer from "../Footer";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    gsap.from(".header", {
      x: -100,
      scale: 0.3,
      duration: 1,
      opacity: 0,
      
      
    });
    gsap.from(".aboutpage .page", {
      
      scale: 0.6,
      duration: 0.8,
      opacity: 0,
      stagger:0.5,
    });
    gsap.from(" .part", {
      
      duration: 0.8,
      opacity: 0,
      
      scrollTrigger: {
        scroller: "body",
        trigger: ".aboutpage2",
        start: "top 80%",
      //  markers: true,
        
      }
    });
  });

  return (
    <div className="md:min-h-screen">
      <h1 className="header border-b  p-4">About Us</h1>

      <div className=" h-full w-full aboutpage text-xl  font-medium">
        <h2 className="text-center hover:scale-105 duration-300 p-3">Banquet Hall</h2>

        <img
          src={palace}
          alt="palace"
          className="bg-center h-3/4 w-full page inline-block"
        />
        <p className=" p-4  page ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
          repellat error doloribus recusandae iure enim deleniti velit debitis
          veniam. Delectus consequatur beatae necessitatibus asperiores eius
          laudantium tempora facilis incidunt? Asperiores. ipsum dolor sit amet
          consectetur adipisicing elit. Esse, suscipit? ipsum dolor sit amet
          consectetur, adipisicing elit. Ipsam corrupti exercitationem fugit
          alias pariatur itaque possimus odit reiciendis iure? Sit error
          dignissimos quia quasi qui minima assumenda doloribus hic eum libero,
          consequuntur unde maiores molestiae quaerat accusantium sed ad quod
          iste. Magni perferendis voluptatum sit praesentium quibusdam. Minima
          consequatur, delectus asperiores ipsum accusamus et eum dolore ex
          voluptate vitae nam?
          voluptate vitae nam?
        </p>
      </div>
      <div className=" h-full w-full aboutpage2 text-xl  font-medium">
        <h2 className="text-center hover:scale-105 duration-300"> Officials </h2>
        <div className="grid gap-3 p-4 md:grid-cols-3">
          <div className="part rounded-lg overflow-hidden bg-gray-200 hover:scale-105 duration-300 flex flex-col">
            <img src={madhan} alt="thanedar ji" />
            <h3 className="text-center ptr-3" >Madhan Yadav</h3>
            <p className="text-center text-slate-500">Chairman & Director</p>
          </div>
          <div className="part rounded-lg overflow-hidden bg-gray-200 hover:scale-105 duration-300 flex flex-col">
            <img src={ritesh} alt="thanedar ji" />
            <h3 className="text-center ptr-3" >Ritesh Yadav</h3>
            <p className="text-center text-slate-500 ">
              Co-Chairman & Director
            </p>
          </div>
          <div className="part rounded-lg overflow-hidden bg-gray-200 hover:scale-105 duration-300 flex flex-col">
            <img src={mayank} alt="thanedar ji" />
            <h3 className="text-center ptr-3" >Mayank Yadav</h3>
            <p className="text-center text-slate-500 text-wrap">
              Chief Executive Officer & Managing Director
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
