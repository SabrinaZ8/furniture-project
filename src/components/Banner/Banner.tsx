import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
interface Path {
  path: string;
}
export const Banner = ({ path }: Path) => {
  return (
    <div className="h-[330px] relative flex justify-center items-center ">
      <img
        src="https://res.cloudinary.com/ducw84byb/image/upload/v1739625728/banner-top_ictml2.jpg"
        alt=""
        className=" h-full w-full object-cover opacity-60 blur-[3px]"
      />
      <div className="flex items-center flex-col absolute">
        <img
          src="/logo/furniroLogo.png"
          alt="Logo Furniro"
        />
        <h2 className="text-5xl mt-5 mb-4">{path}</h2>
        <div className="flex items-center">
          <Link to={"/"}>
            <p className="font-semibold">Home</p>
          </Link>
          <IoIosArrowForward className="mx-2 w-5 h-5" />
          <p className="font-light">{path}</p>
        </div>
      </div>
    </div>
  );
};
