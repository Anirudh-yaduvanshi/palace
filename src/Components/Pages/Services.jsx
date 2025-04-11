import React from "react";
import Footer from "../Footer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import wedding from "/gallery/21.png";
import HBD from "/gallery/8.png";
import bahjan from "/gallery/1.png";
import { useNavigate } from "react-router";

const Services = () => {
  useGSAP(() => {
    gsap.from(".header", {
      x: -100,
      scale: 0.3,
      duration: 1,
      opacity: 0,
    });

    // .circle1 .circle2 .circle3
    gsap.from(".bdi .circle ", {
      x: -100,
      scale: 0.6,
      duration: 1,
      opacity: 0,
      stagger: {
        each: 0.2,
        amount: 1,
      },
    });
  });

  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen ">
        <h1 className="header border-b  p-4">Services</h1>

        <div className="w-11/12 p-4 my-2  bdi mx-auto h-1/4 bg-gray-100 gap-8 grid md:grid-cols-3">
          <div className="circle outline-none  w-full h-full flex  items-center justify-between flex-col ">
            <div className="   overflow-hidden">
              {" "}
              <img className="bg-center" src={wedding} alt="wedding" />{" "}
            </div>
            <div className="  foot font-medium h-1/5  text-3xl p-4">
              Weddings{" "}
            </div>
          </div>
          <div className="circle  outline-none  w-full h-full flex  items-center justify-between flex-col ">
            <div className="   overflow-hidden">
              {" "}
              <img className="bg-center h-11/12 " src={HBD} alt="jagran" />{" "}
            </div>
            <div className=" foot font-medium h-1/5  text-3xl p-4">
              {" "}
              Birthdays{" "}
            </div>
          </div>
          <div className="circle  outline-none  w-full h-full flex items-center justify-between flex-col ">
            <div className="  overflow-hidden">
              <img className="bg-center" src={bahjan} alt="birthday" />{" "}
            </div>
            <div className=" foot font-medium h-1/5 text-center text-3xl p-4">
              Devotional Functions{" "}
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            navigate("/contact");
          }}
          className="cursor-pointer text-wrap m-3 p-3 text-center hover:text-blue-500 hover:scale-105 h-1/2"
        >
          NOTE: For any other type of function please Contact us.
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
