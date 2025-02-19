import { Footer } from "../../components/Footer/Footer";
import { NavBar } from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";
import { BrowseRange } from "./components/BrowseRange";
import { ShowProducts } from "../../components/ShowProducts/ShowProducts";
import { Carousel } from "./components/Carousel";

export const HomePage = () => {
  return (
    <div>
      <NavBar />
      <section className="flex justify-end items-center bg-bg-intro bg-bottom bg-fixed h-[calc(100vh-100px)] bg-no-repeat bg-cover">
        <div className="bg-yellow-40 min-h-[443px] w-[643px] p-10 rounded-md mx-5 lg:mx-[60px]">
          <span className="text-gray-333 font-semibold tracking-[3px] ">
            New Arrival
          </span>
          <h1 className="font-bold text-[44px] leading-[65px] text-yellow-550 lg:text-[52px]">
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
        <h2 className="font-bold text-gray-750 text-center text-3xl md:text-[40px]">Our Products</h2>
        <ShowProducts limit={8} category={""} />
      </div>
      <section className="flex flex-col justify-center items-center bg-yellow-30 py-10 lg:flex-row">
        <div className="w-4/5 mb-10 h-full text-center flex flex-col items-center lg:ml-[100px] lg:w-[40%] lg:items-start lg:text-start lg:mb-0">
          <h2 className="text-3xl text-gray-750 font-bold md:text-[40px]">50+ Beautiful rooms<br/> inspiration</h2>
          <p className="text-gray-250 w-full mt-4 mb-6 font-[600] lg:w-9/12">
            Our designer already made a lot of beautiful<br /> prototipe of rooms that
            inspire you
          </p>
          <Link
            to="/shop"
            className="flex justify-center items-center bg-yellow-550 text-white w-44 h-12 btn-transparent"
          >
            Explore More
          </Link>
        </div>
        <Carousel />
      </section>
      <section className="py-10 flex justify-cente flex-col text-center">
        <span className="font-semibold text-xl text-gray-250">Share your setup with</span>
        <h2 className="font-bold text-3xl text-gray-750 md:text-[40px]">#FuniroFurniture</h2>
        <img src="https://res.cloudinary.com/ducw84byb/image/upload/v1739719469/Images-groups_po5kax.png" alt="group images" className="w-full object-contain" />
      </section>
      <Footer />
    </div>
  );
};
