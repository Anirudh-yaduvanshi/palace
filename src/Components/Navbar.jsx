import React, { useRef } from "react";
import logo from "/gallery/11.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "../App.css";
import { Link, NavLink, useNavigate } from "react-router";

const Navbar = () => {
  const part1 = useRef();
  const part2 = useRef();
  const part3 = useRef();
  const expand = useRef();
  const navigate = useNavigate(); // Use useNavigate hook

  useGSAP(() => {
    gsap.from(part1.current, {
      y: -80,
      duration: 1,
      opacity: 0,
      stagger: 0.3,
    });
    gsap.from(part2.current, {
      delay: 0.2,
      y: -80,
      duration: 1,
      opacity: 0,
      stagger: 0.9,
    });
    gsap.from(part3.current, {
      delay: 0.2,
      y: -80,
      duration: 1,
      opacity: 0,
      stagger: 0.9,
    });
  });

  const Handlemenu = () => {
    
     if (expand.current.classList.contains("hife")) {
       expand.current.classList.remove("hife");
     } else {
       expand.current.classList.add("hife");
     }

    gsap.to(expand.current, {
      duration: 1,
      opacity: 1,
      x: 0,
      zIndex: 10,
    });
    
  };

  const handlebnd = () => {
    

      
    gsap.to(expand.current, {
      duration: 0.5,
      opacity: 1,
      zIndex: 0,
      x: 155,
       onStart: () => {
        
        if (expand.current.classList.contains("hife")) {
          expand.current.classList.remove("hife");
        } else {
          expand.current.classList.add("hife");
        }
      },
    });
    
  };

  return (
    <>
      <nav className=" flex justify-between z-20 items-center">
        <div
          ref={part1}
          className="part-1 md:w-1/3 w-3/4 flex justify-center items-center"
        >
          <div className="w-1/4">
            <img
              src={logo}
              onClick={() => {
                navigate("/");
              }}
              alt="logo"
              className="cursor-pointer bg-cover"
            />
          </div>
          <h1
            className="cursor-pointer"
            onClick={() => {
              navigate("/"); 
            }}
          >
            Gyan Palace
          </h1>
        </div>
        <div className="part-2 md:block hidden w-3/5">
          <ul ref={part2} className="flex justify-evenly items-center">
            <li>
              <NavLink
                className="text-black font-semibold no-underline"
                to="/about"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-black font-semibold no-underline"
                to="/services"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-black font-semibold no-underline"
                to="/gallery"
              >
                Our Gallery
              </NavLink>
            </li>
          
            <li>
              <NavLink
                className="text-black font-semibold no-underline"
                to="/Contact"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div
          className="cursor-pointer  font-xl w-1/4 h-full text-center  font-bolder md:hidden responsive part-3"
          ref={part3}
          onClick={Handlemenu}
        >
          <i className=" cursor-pointer ri-menu-fill"></i>
        </div>
      </nav>

      <div
        ref={expand}
        className="expand absolute hife top-0 z-20 "
      >
        <i
          onClick={handlebnd}
          className="cursor-pointer block  relative top-3 z-20 left-3 ri-close-large-line"
        ></i>
        <Link
          onClick={handlebnd}
          className="text-white bg-gray-400 flex justify-center items-center a no-underline font-semibold p-1 mb-1"
          to="/"
        >
          Home{" "}
        </Link>
        <Link
          onClick={handlebnd}
          className="text-white bg-gray-400 flex justify-center items-center a no-underline font-semibold p-1 mb-1"
          to="/about"
        >
          About Us
        </Link>

        <Link
          onClick={handlebnd}
          className="text-white bg-gray-400 flex justify-center items-center a no-underline font-semibold p-1 mb-1"
          to="/services"
        >
          Services
        </Link>

        <Link
          onClick={handlebnd}
          className="text-white bg-gray-400 flex justify-center items-center a no-underline font-semibold p-1 mb-1"
          to="/gallery"
        >
          Our Gallery
        </Link>

      

        <Link
          onClick={handlebnd}
          className="text-white bg-gray-400 flex justify-center items-center a no-underline font-semibold p-1 mb-1"
          to="/contact"
        >
          Contact Us
        </Link>
      </div>
    </>
  );
};

export default Navbar;
