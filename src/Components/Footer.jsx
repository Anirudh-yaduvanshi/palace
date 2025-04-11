import React from 'react'
import logo from "/gallery/11.png";
import { useGSAP } from '@gsap/react';
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Timeline } from 'gsap/gsap-core';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {

  useGSAP(() => {

    let mm = gsap.matchMedia();
    mm.add("(min-width: 900px)", () => {
      gsap.from(".halffirst", {
        scale:0.4,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
          trigger: ".footer",
          start: "top 80%",
          
          
        },
      });
    })
    gsap.from(".halfsecond", {
      scale: 0.4,
      duration: 1,
      opacity: 0,

     
    });
      
    
    // Mobile viewport
    mm.add("(max-width: 700px)", () => {
     
      let tl=  gsap.timeline()
      tl.fromTo(".halffirst", {
        x: -100,
        duration: 1.5,
        opacity: 0,
      }, {
        x: 0,
        opacity: 1,
      }

      )

      tl.fromTo(
        ".halfsecond",
        {
          x: -100,
          scale:0.1,
          duration: 1.5,
          opacity: 0,
        },
        {
          x: 0,
          scale:1,
          opacity: 1,
        }
      );
    })
  })
  
  

  return (
    <div className="footer border-t p-4">
      <div className="container grid md:grid-cols-2 grid-cols-1 ">
        <div className="halffirst flex items-center p-5 gap-2 md:border-r-2  flex-col">
          <img
            src={logo}
            alt="logo"
            className=" border-2  border-pink-400 w-1/4  md:w-2/12 rounded-full"
          />
          <p className="text-5xl font-semibold text-center">Gyan Palace</p>
        </div>

        <div className="halfsecond md:px-5 md:pt-5 md:pb-0  flex items-center flex-col">
          <p className="p-1 text-center">
            <a
              className=" text-2xl text-center no-underline"
              href="https://www.google.com/maps/place/Gyan+Palace+@+Guru+Kirpa+Tent+House/@29.8852086,78.1019895,17z/data=!4m14!1m7!3m6!1s0x39094f535fd2e26f:0x619cba034feb39f2!2sGyan+Palace+@+Guru+Kirpa+Tent+House!8m2!3d29.885204!4d78.1045644!16s%2Fg%2F11t3hm66xc!3m5!1s0x39094f535fd2e26f:0x619cba034feb39f2!8m2!3d29.885204!4d78.1045644!16s%2Fg%2F11t3hm66xc?entry=ttu&g_ep=EgoyMDI1MDMyMy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
            >
              <i className="ri-map-pin-line"></i>
              Gyan Palace, Bahadarpur jatt, Haridwar-249404
            </a>
          </p>
          <div className="parts  w-3/4 grid md:grid-cols-2 grid-cols-1">
            <div className="part1 md:text-center w-full md:border-r-2 flex-col flex no-underline border-gray-400 ">
              <i className="ri-cellphone-fill text-blue-500 w-fit mx-auto ">
                {" "}
              </i>
              <a className="no-underline text-center" href="tel:+917017138924">
                +91 7017138924
              </a>
            </div>
            <div className="part2 md:text-center w-full flex flex-col no-underline text-center ">
              <i className="ri-mail-fill text-blue-500"> </i>
              <a
                className="no-underline text-center"
                href="mailto:ydvanirudh@yahoo.com"
              >
                ydvanirudh@yahoo.com
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3  my-4 h-full text-center  w-3/4 font-medium text-xl">
            <div>
              <a
                className="md:bg-slate-400 text-white  no-underline p-2  text-center rounded-full text-2xl hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black hover:ease-in-out hover:duration-700"
                href="https://www.instagram.com/gyan._.palace/"
                target="_blank"
              >
                <i className="hover:text-black ri-instagram-fill"></i>
              </a>
            </div>
            <div>
              <a
                className=" md:bg-slate-400  text-white   no-underline p-2 text-center rounded-full text-2xl hover:bg-red-800 hover:text-black hover:ease-in-out hover:duration-500"
                href="https://www.youtube.com/watch?v=52TD-4BP59s"
                target="_blank"
              >
                <i className=" hover:text-black ri-youtube-fill"></i>
              </a>
            </div>
            <div>
              <a
                className="md:bg-slate-400  text-white   no-underline p-2 text-center rounded-full text-2xl hover:bg-blue-800 hover:text-black hover:ease-in-out hover:duration-500"
                href="https://m.facebook.com/profile.php?id=100011074749291&name=xhp_nt__fb__action__open_user"
                target="_blank"
              >
                <i className=" hover:text-black ri-facebook-box-fill"></i>
              </a>
            </div>
          </div>

          <div className="flex items-center absolute justify-center text-sm pt-2 bottom-0 ">
            <span>
              {" "}
              <i className="ri-copyright-line mt-2"></i>{" "}
            </span>
            <span>all rights reserved 2018</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer