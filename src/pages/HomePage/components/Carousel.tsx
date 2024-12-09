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
          <li className="splide__slide">
            <img
              src="../../../src/assets/images-carousel/image-carousel-1.png"
              alt="Room 1"
              className="w-[372px] h-[486px] object-cover"
            />
          </li>
          <li className="splide__slide">
            <img
              src="../../../src/assets/images-carousel/images-carousel-2.png"
              alt="Room 2"
              className="h-[486px] object-cover"
            />
          </li>
          <li className="splide__slide">
            <img
              src="../../../src/assets/images-carousel/images-carousel-3.png"
              alt="Room 3"
              className="h-[486px] object-cover"
            />
          </li>
          <li className="splide__slide">
            <img
              src="../../../src/assets/images-carousel/images-carousel-4.png"
              alt="Room 4"
              className="h-[486px] object-cover"
            />
          </li>
        </ul>
        <div className="absolute bottom-32 left-5 bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">01 — Bed Room</h3>
          <p className="text-lg font-light">Inner Peace</p>
        </div>
      </div>
      
    </div>
  );
};
