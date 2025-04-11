import React, { useEffect, useRef } from "react";
import congratulation from "/gallery/4.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Homeextender = () => {
  const sectionRef = useRef();

  useEffect(() => {
    const sections = sectionRef.current.querySelectorAll(".animate");

    sections.forEach((section) => {
      
      let mm = gsap.matchMedia();
      // Desktop viewport  
      mm.add("(min-width: 1024px)", () => {
        gsap.fromTo(
          section,
          { opacity: 0, scale: 0.7, x: 50 },
          {
            opacity: 1,
            scale: 1,
            x: 0,
            duration: 0.5,
            scrollTrigger: {
              trigger: section,
              scroller: "body",
              start: " 85%",
              end: " 49%",
              scrub: true,
            },
          }
        );
      }),
        // Mobile viewport
        mm.add("(max-width: 800px)", () => {
        gsap.fromTo(
          section ,
          { opacity: 0.2, scale: 0.2,  },
          {
            opacity: 1,
            scale: 1,
            
            duration: 1.2,
           
          }
        );
        })
  });
  }, []);

  return (
    <>
      <div
        ref={sectionRef}
        className="md:h-screen block md:m-3  md:p-5 md:w-screen Homeextender"
      >
        <div className="container   grid h-1/2 md:p-2 md:gap-4 grid-cols-4 animate">
          <div className="half1a1 flex flex-col col-span-3 md:w-full">
            <h1 className="py-3 md:py-5">What Are We</h1>
            <p className="font-semibold hidden md:block text-xl md:w-full text-wrap p-4   md:py-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, a? ipsum dolor sit amet consectetur adipisicing elit.
              Alias, numquam! ipsum dolor sit amet consectetur, adipisicing
              elit. Veniam, voluptate. ipsum, dolor sit amet consectetur
              adipisicing elit. Accusamus dolorum exercitationem ipsa! ipsum,
              dolor sit amet consectetur adipisicing elit. Officiis provident
              eius quidem! ipsum dolor sit amet consectetur, adipisicing elit.
              Cum quod dolorum amet inventore nobis u
            </p>
            <p className="font-semibold w-screen md:hidden text-xl md:w-full text-wrap p-4   md:py-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, a? ipsum dolor sit amet consectetur adipisicing elit.
              Alias, numquam! ipsum dolor sit amet consectetur, adipisicing
              elit. Veniam, voluptate. ipsum, dolor sit amet consectetur phoner
            </p>
          </div>

          <div className="half2 bg-red-300 h-fit  md:h-full md:p-2 md:w-full">
            <img
              src={congratulation}
              className="bg-cover md:h-full bg-center"
              alt="congrats"
            />
          </div>
        </div>

        <div className="container   grid h-1/2 md:p-2 md:gap-4 grid-cols-4 animate">
          <div className="half2  h-fit   md:h-full md:p-2  md:w-full">
            <img
              src={congratulation}
              className="bg-cover md:h-full bg-center"
              alt="congrats"
            />
          </div>
          <div className="half1a1 flex flex-col col-span-3  md:w-full">
            <h1 className="p-4  md:py-5">Why Are We</h1>

            {/* pc visible */}
            <p className="font-semibold  hidden md:block text-xl md:w-full text-wrap p-4   md:py-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, a? ipsum dolor sit amet consectetur adipisicing elit.
              Alias, numquam! ipsum dolor sit amet consectetur, adipisicing
              elit. Veniam, voluptate. ipsum, dolor sit amet consectetur
              adipisicing elit. Accusamus dolorum exercitationem ipsa! ipsum,
              dolor sit amet consectetur adipisicing elit. Officiis provident
              eius quidem! ipsum dolor sit amet consectetur, adipisicing elit.
              Cum quod dolorum amet inventore nobis u
            </p>
            {/* mobile visible  */}
          </div>
            <p className="font-semibold w-screen  md:hidden text-xl  trans text-wrap p-4   md:py-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, a? ipsum dolor sit amet consectetur adipisicing elit.
              Alias, numquam! ipsum dolor sit amet consectetur, adipisicing
              elit. Veniam, voluptate. ipsum, dolor sit amet consectetur phoner
            </p>
        </div>
      </div>
    </>
  );
};

export default Homeextender;
