import { Footer } from "../../components/Footer/Footer";
import { NavBar } from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";
import { BrowseRange } from "./components/BrowseRange";
import { ShowProducts } from "../../components/ShowProducts/ShowProducts";

export const HomePage = () => {
  return (
    <div>
      <NavBar />
      <section className="flex justify-end items-center bg-bg-intro bg-bottom bg-fixed h-[calc(100vh-100px)] bg-no-repeat bg-cover">
        <div className="bg-yellow-40 h-[443px] w-[643px] p-10 rounded-md mx-[60px]">
          <span className="text-gray-333 font-semibold tracking-[3px] ">
            New Arrival
          </span>
          <h1 className="font-bold text-[52px] leading-[65px] text-yellow-550">
            Discover Our
            <br />
            New Collection
          </h1>
          <p className="text-gray-333 text-lg font-medium my-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <Link
            to="shop"
            className="flex justify-center items-center uppercase h-[74px] w-[222px] bg-yellow-550 font-bold text-white btn-transparent "
          >
            Buy Now
          </Link>
        </div>
      </section>
      <BrowseRange />
      <div className="my-[60px] flex justify-center flex-col items-center">
        <h2 className="font-bold text-gray-750 text-[40px] text-center">Our Products</h2>
        <ShowProducts limit={8} category={""} />
      </div>
      <section>
        <div>
          <h2>50+ Beautiful rooms inspiration</h2>
          <p>
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <Link
            to="#"
            className="flex justify-center items-center bg-yellow-550 text-white w-44 h-12"
          >
            Explore More
          </Link>
        </div>
        <div className="flex overflow-hidden w-[1000px]">
          <img
            src="../../../src/assets/images-carousel/image-carousel-1.png"
            alt=""
            className="w-[500px] h-[500px] min-w-[500px] min-h-[500px]"
          />
          <img
            src="../../../src/assets/images-carousel/images-carousel-2.png"
            alt=""
            className="w-[500px] h-[500px] min-w-[500px] min-h-[500px]"
          />
          <img
            src="../../../src/assets/images-carousel/images-carousel-3.png"
            alt=""
            className="w-[500px] h-[500px] min-w-[500px] min-h-[500px]"
          />
          <img
            src="../../../src/assets/images-carousel/images-carousel-4.png"
            alt=""
            className="w-[500px] h-[500px] min-w-[500px] min-h-[500px]"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};
