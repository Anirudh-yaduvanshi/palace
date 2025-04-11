import React from "react";
import "../../App.css";
import insta from "/gallery/10.png";
import mail from "/gallery/13.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import Footer from "../Footer";
const Contact = () => {


  useGSAP(() => {

    const tl = gsap.timeline()
    tl.from(".firstfirst ", {
      x: -100,
      duration: 0.5,
      opacity: 0,
      ease: "back.in(1.7)",
    
    } ,"first")
    tl.from(" .secondfirst", {
      x: 100,
      duration: 0.5,
      opacity: 0,
      ease: "back.in(1.7)",
    
    }, "first")
    

    tl.from(
      ".firstsecond ",
      {
        x: -100,
        duration: 0.5,
        opacity: 0,
        ease: "back.in(1.7)",
        
      },
      "second"
    );
    tl.from(
      " .secondsecond",
      {
        x: 100,
        duration: 0.5,
        opacity: 0,
        ease: "back.in(1.7)",
     
      },
      "second"
    );
    



    gsap.from(".header", {
      x: 100,
      scale: 0.3,
      duration: 1,
      opacity: 0,
      
    });
  })

  return (
    <>
      <div className={`md:w-screen call overflow-x-hidden md:h-screen`}>
        <div className="w-full border-b h-30 ">
          <p className="w-fit header   p-4 md:text-5xl text-3xl font-semibold ">
            {" "}
            Contact Us
          </p>
        </div>

        <div className="md:grid-cols-2 grid-cols-1 grid gap-4 w-3/4 py-3 mx-auto ">
          <div className=" firsthalf flex justify-center items-center gap-4 flex-col">
            <div className="firstfirst w-3/4 text-center rounded-lg text-black p-2  bg-gray-200 ">
              <i className="ri-phone-fill text-5xl hover:scale-125 block duration-200 w-fit mx-auto  text-green-500"></i>
              <p className="text-2xl font-medium">Phone </p>
              <div className="bdi">
                <div className=" flex justify-center items-center gap-2 ">
                  <a
                    className="no-underline"
                    href="https://wa.me/+917017138924?text=Hello "
                  >
                    <i className="text-3xl  text-green-300 hover:text-green-800 ri-whatsapp-fill"></i>
                  </a>
                  <a
                    href="tel:+917017138924"
                    className="text-black hover:scale-105 no-underline p-2"
                  >
                    +91-7017138924
                  </a>
                </div>
                <div className=" flex justify-center items-center gap-2 ">
                  <a
                    className="no-underline"
                    href="https://wa.me/+917017138924?text=Hello "
                  >
                    <i className="text-3xl  text-green-300 hover:text-green-800 ri-whatsapp-fill"></i>
                  </a>
                  <a
                    href="tel:+917017138924"
                    className="text-black hover:scale-105 no-underline p-2"
                  >
                    +91-7017138924
                  </a>
                </div>
                <div className=" flex justify-center items-center gap-2 ">
                  <a
                    className="no-underline"
                    href="https://wa.me/+917017138924?text=Hello "
                  >
                    <i className="text-3xl  text-green-300 hover:text-green-800 ri-whatsapp-fill"></i>
                  </a>
                  <a
                    href="tel:+917017138924"
                    className="text-black hover:scale-105 no-underline p-2"
                  >
                    +91-7017138924
                  </a>
                </div>
                <div className=" flex justify-center items-center gap-2 ">
                  <a
                    className="no-underline"
                    href="https://wa.me/+917017138924?text=Hello "
                  >
                    <i className="text-3xl  text-green-300 hover:text-green-800 ri-whatsapp-fill"></i>
                  </a>
                  <a
                    href="tel:+917017138924"
                    className="text-black hover:scale-105 no-underline p-2"
                  >
                    +91-7017138924
                  </a>
                </div>
              </div>
            </div>
            <div className="firstsecond w-3/4 text-center rounded-lg text-black p-2  bg-gray-200">
              <img
                className="hover:scale-200 block duration-200  mx-auto w-1/12 scale-150 "
                src={mail}
                alt=" mail"
              />
              <p className="text-2xl font-medium">G-Mail</p>
              <div className="bdi flex flex-col  items-center md:items-start w-1/2 mx-auto gap-2">
                <a
                  className="text-lg text-black   hover:scale-105 "
                  href="mailto:gyanpalace@gamil.com"
                >
                  gyanpalace@gmail.com
                </a>
                <a
                  className="text-lg text-black   hover:scale-105 "
                  href="mailto:gyanpalace@gamil.com"
                >
                  maddhan@gmail.com
                </a>
                <a
                  className="text-lg text-black   hover:scale-105 "
                  href="mailto:gyanpalace@gamil.com"
                >
                  mayank@gmail.com
                </a>
                <a
                  className="text-lg text-black   hover:scale-105 "
                  href="mailto:gyanpalace@gamil.com"
                >
                  ritesh@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="secondhalf flex justify-center items-center flex-col gap-4">
            <div className=" secondfirst w-3/4 text-center rounded-lg text-black p-2  bg-gray-200">
              <i className="ri-earth-fill text-5xl text-green-500 bg-blue-600 rounded-full  hover:scale-125 block duration-200 w-fit mx-auto"></i>
              <p className="text-2xl font-medium">Address</p>

              <div className="flex flex-col  w-1/2 mx-auto gap-2">
                <a
                  className=" text-lg text-black hover:scale-105 no-underline"
                  href="https://www.google.com/maps/place/Gyan+Palace+@+Guru+Kirpa+Tent+House/@29.8852086,78.1019895,17z/data=!4m14!1m7!3m6!1s0x39094f535fd2e26f:0x619cba034feb39f2!2sGyan+Palace+@+Guru+Kirpa+Tent+House!8m2!3d29.885204!4d78.1045644!16s%2Fg%2F11t3hm66xc!3m5!1s0x39094f535fd2e26f:0x619cba034feb39f2!8m2!3d29.885204!4d78.1045644!16s%2Fg%2F11t3hm66xc?entry=ttu&g_ep=EgoyMDI1MDMyMy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                >
                  <i className="ri-map-pin-line"></i>
                  <address>
                    Gyan Palace, vill & Post: Bahadarpur jatt, Haridwar,
                    Uttrakhand-249404
                  </address>
                </a>
              </div>
            </div>
            <div className=" secondsecond w-3/4 text-center rounded-lg text-black p-2  bg-gray-200">
              <i className="ri-link text-5xl text-blue-500 hover:scale-125 block duration-200 w-fit mx-auto"></i>
              <p className="text-2xl font-medium">Socials</p>

              <div className="flex justify-center w-1/2 mx-auto items-start flex-col gap-3  font-medium text-lg ">
                <div className="flex gap-2 ">
                  <a
                    className=" no-underline px-2 flex justify-center items-center gap-2 text-2xl md:flex-row flex-col hover:scale-110"
                    href="https://www.instagram.com/gyan._.palace/"
                    target="_blank"
                  >
                    <img src={insta} className="h-6 " alt="insta" /> Instagram{" "}
                  </a>
                </div>

                <div className="hover:scale-110">
                  <a
                    className=" no-underline p-2 text-center rounded-full text-2xl  "
                    href="https://www.youtube.com/watch?v=52TD-4BP59s"
                    target="_blank"
                  >
                    <i className="ri-youtube-fill  text-red-600 scale-110"></i>{" "}
                    Youtube
                  </a>
                </div>
                <div className="hover:scale-110">
                  <a
                    className=" text-blue no-underline p-2 text-center rounded-full text-2xl hover:scale-110"
                    href="https://m.facebook.com/profile.php?id=100011074749291&name=xhp_nt__fb__action__open_user"
                    target="_blank"
                  >
                    <i className="ri-facebook-box-fill"></i> Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
