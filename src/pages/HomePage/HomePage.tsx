import { Footer } from "../../components/Footer/Footer";
import { NavBar } from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";
import { BrowseRange } from "./components/BrowseRange";

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
            className="flex justify-center items-center uppercase h-[74px] w-[222px] bg-yellow-550 font-bold text-white"
          >
            Buy Now
          </Link>
        </div>
      </section>
      <BrowseRange />
      <section>
        
      </section>
      <Footer />
    </div>
  );
};
