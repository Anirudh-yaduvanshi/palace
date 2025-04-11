import React from "react";
import engagement from "/gallery/5.png";
import shadi from "/gallery/21.png";
import Ring from "/gallery/18.png";
import thank from "/gallery/20.png";
import hwd from "/gallery/9.png";
import HBD from "/gallery/8.png";
import party from "/gallery/17.png";
import celbbdy from "/gallery/3.png";
import cake from "/gallery/2.png";
import haldi from "/gallery/6.png";
import haldiw from "/gallery/7.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Homeextendmore = () => {

  
  
  useGSAP(() => {
    gsap.from(".wedgrid .part", {
      scale: 0.5,
      stagger: true,
      scrollTrigger: {
        trigger: ".weddingsss",
        scroller: "body",
        // markers:true,
        start: "top 50%",
        end: "top 20%",
        scrub: true
      },
    });
    gsap.from(".bdygrid .part", {
      scale: 0.5,
      stagger: true,
      scrollTrigger: {
        trigger: ".birthdayss",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "top 20%",
        scrub: true,
      },
    });
 })

  return (
    <div className="part2  mx-auto  mt-20  w-11/12 md:max-w-screen min-h-screen">
      <div className="weddingsss ">
        <div className="wedheader m-0 z-30  flex w-full">
          <p className="   bg-white w-full flex items-center justify-center h-40 z-20 text-3xl md:text-6xl text-gray-600 font-medium  ">
            Wedding Specials
          </p>
        </div>

        <div className="grid  w-full py-4 mx-auto my-4 gap-x-0 gap-y-5 justify-center items-center md:grid-cols-2 min-h-screen wedgrid  z-10">
          <div  className="bg-gray-400 mx-auto rounded-lg overflow-hidden  w-5/6  part">
            <img
              src={engagement}
              className="bg-center bg-cover"
              alt="engagement"
            />
          </div>
          <div  className="bg-gray-400 overflow-hidden mx-auto flex justify-center items-center flex-col p-4 rounded-lg w-5/6 h-full  part">
            <img src={Ring} alt="ring" className="text-center h-40 " />

            <div className="text-white p-2">Engagement ring</div>
            <div className="text-white text-center w-3/4 p-2 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam quaerat aspernatur libero asperiores fugit? A!
            </div>
          </div>
          <div  className=" justify-center items-center hidden md:flex bg-gray-400  mx-auto rounded-lg w-5/6 h-full part">
            <div className="flex justify-center items-center flex-col w-3/4 mx-auto p-4  h-3/4 ">
              <img src={haldiw} alt="halad" className="text-center h-30" />
              <div className="text-white p-2">Engagement haldiL</div>
              <div className="text-white text-center w-3/4 p-2 ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laboriosam quaerat aspernatur libero asperiores fugit? A!
              </div>
            </div>
          </div>
          <div  className="bg-gray-400 mx-auto overflow-hidden rounded-lg  w-5/6 hidden md:flex part">
            <img src={haldi} className="bg-center bg-cover" alt="haldi" />
          </div>
          <div  className="bg-gray-400 mx-auto overflow-hidden rounded-lg  w-5/6  md:hidden part">
            <img src={haldi} className="bg-center bg-cover" alt="haldi" />
          </div>
          <div  className=" justify-center items-center  md:hidden bg-gray-400  mx-auto rounded-lg w-5/6 h-full part">
            <div className="flex justify-center items-center flex-col w-3/4 mx-auto p-1 my-3 h-3/4 ">
              <img src={haldiw} alt="halad" className="text-center h-30" />
              <div className="text-white p-1">Engagement haldim </div>
              <div className="text-white text-center w-3/4 p-1 ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laboriosam quaerat aspernatur libero asperiores fugit? A!
              </div>
            </div>
          </div>
          <div  className="bg-gray-400 mx-auto overflow-hidden rounded-lg w-5/6 h-full part5">
            <img src={shadi} className="bg-center bg-cover" alt="shadi" />{" "}
          </div>
          <div  className="bg-gray-400 mx-auto rounded-lg  w-5/6 h-full part flex justify-center items-center">
            <div className="flex justify-center items-center flex-col w-3/4 h-3/4 ">
              <img src={hwd} alt="halad" className="text-center h-40" />
              <div className="text-white p-2">Engagementwedd</div>
              <div className="text-white text-center w-3/4 p-2 ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laboriosam quaerat aspernatur libero asperiores fugit? A!
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="birthdayss ">
        <div className="bdyheader m-0 z-30  flex w-full">
          <p className="   bg-white w-full flex items-center justify-center h-40 z-20 text-3xl md:text-6xl text-gray-600 font-medium  ">
            Birthday Specials
          </p>
        </div>

        <div className="grid  w-full py-4 mx-auto my-4 gap-x-0 gap-y-5 justify-center items-center md:grid-cols-3 min-h-screen bdygrid  z-10">
          <div className=" mx-auto rounded-lg overflow-hidden  w-5/6  part">
            <img
              src={HBD}
              className="bg-center bg-cover"
              alt="happy birthday "
            />
          </div>
          <div className=" overflow-hidden mx-auto flex justify-center items-center  rounded-lg w-5/6 h-full part">
            <img src={cake} className="bg-center bg-cover" alt="cake" />
          </div>
          <div className="flex justify-center items-center    mx-auto rounded-lg w-5/6 h-full part">
            <img
              src={celbbdy}
              className="bg-center rounded-lg  bg-cover"
              alt="bdy celebration"
            />
          </div>
          <div  className=" mx-auto overflow-hidden rounded-lg  w-5/6  part">
            <img
              src={party}
              className="bg-center rounded-lg  bg-cover"
              alt="bdy celebration"
            />
          </div>
          <div  className=" mx-auto overflow-hidden rounded-lg  w-5/6  part">
            <img
              src={thank}
              className="bg-center rounded-lg  bg-cover"
              alt="bdy celebration"
            />
          </div>
          <div  className=" mx-auto overflow-hidden rounded-lg  w-5/6  part">
            <img
              src={party}
              className="bg-center rounded-lg  bg-cover"
              alt="bdy celebration"
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Homeextendmore;
