import { Footer } from "../../components/Footer/Footer";
import { NavBar } from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";

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
      <section className="flex flex-col justify-center items-center text-center text-gray-333 ">
        <div className="my-14">
          <h2 className=" text-3xl font-bold my-2">Browse The Range</h2>
          <p className="text-gray-666 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex">
          <div className="mx-5">
            <img
              src="../../../src/assets/images/productCategory/image-106.png"
              alt="image-106"
              className="img-rd-cover-center"
            />
            <h3 className="text-gray-smb-24">Dining</h3>
          </div>
          <div className="mx-5">
            <img
              src="../../../src/assets/images/productCategory/image-100.png"
              alt="image-100"
              className="img-rd-cover-center"
            />
            <h3 className="text-gray-smb-24">Living</h3>
          </div>
          <div className="mx-5">
            <img
              src="../../../src/assets/images/productCategory/image-101.png"
              alt="image-101"
              className="img-rd-cover-center"
            />
            <h3 className="text-gray-smb-24">Bedroom</h3>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
