import React from "react";
import Footer from "../Footer";
import "../../App.css";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);
import galleryData from "../../galleryData";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";




const Gallery = () => {
  useGSAP(() => {
    gsap.from(".header", {
      x: -100,
      scale: 0.3,
      duration: 1,
      opacity: 0,
    });
  });

  return (
    <div className="md:min-h-screen ">
      <h1 className="header border-b p-4">Gallery</h1>
      <div className="p-4 grid gap-3  items-center grid-cols-3 w-full">
        {galleryData.map((gallery, idx) => (
          <a href={gallery.src} target="_blank" key={idx}>
            <LazyLoadImage
              src={gallery.src}
              alt={gallery.alt}
              className="photogallery"
              effect="blur" // Adds the blur effect while loading
            />
          </a>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
