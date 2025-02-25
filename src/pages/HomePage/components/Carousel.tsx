import { useEffect } from "react";
import "@splidejs/splide/dist/css/splide.min.css";
import Splide from "@splidejs/splide";

export const Carousel = () => {
  useEffect(() => {
    const splide = new Splide("#splide", {
      type: "loop",
      perPage: 2,
      autoplay: true,
      interval: 4000,
      arrows: true,
      pagination: true,
      gap: "2rem",
      width: 700,
      height: 600,
      breakpoints: {
        768: { 
          perPage: 1, 
          width: 400, 
          height: 'auto',
          arrows: false
        },
      }
    });

    splide.mount();

    return () => {
      splide.destroy();
    };
  }, []);

  return (
    <div id="splide" className="splide w-[70%]">
      <div className="splide__track">
        <ul className="splide__list relative">
          <li className="splide__slide imgs-carousel-li splide__slide--larger">
            <img
              src="https://res.cloudinary.com/ducw84byb/image/upload/v1739731631/4961c3801f4c07439f27b13468e5e545_txicoy.png"
              alt="Room 1"
              className="w-full h-full  object-cover"
            />
          </li>
          <li className="splide__slide imgs-carousel-li">
            <img
              src="https://res.cloudinary.com/ducw84byb/image/upload/v1739731647/d1b18b523420e79dda1e92951ecde49b_sz3knh.png"
              alt="Room 2"
              className="w-full h-full object-cover"
            />
          </li>
          <li className="splide__slide imgs-carousel-li">
            <img
              src="https://res.cloudinary.com/ducw84byb/image/upload/v1739731676/25a06a33769af9bf5fe8f8ed81ce75d8_j5gxld.png"
              alt="Room 3"
              className="w-full h-full object-cover"
            />
          </li>
          <li className="splide__slide imgs-carousel-li">
            <img
              src="https://res.cloudinary.com/ducw84byb/image/upload/v1739731725/40560e3b59b4fd3c2538107c6fa70736_naqxfk.png"
              alt="Room 4"
              className="w-full h-full object-cover"
            />
          </li>
        </ul>
        <div className="absolute bottom-3 md:bottom-10 left-5  bg-white p-4 rounded-lg shadow-md lg:bottom-32">
          <h3 className="text-base md:text-xl font-semibold">01 — Bed Room</h3>
          <p className="text-sm md:text-lg font-light">Inner Peace</p>
        </div>
      </div>
      
    </div>
  );
};
