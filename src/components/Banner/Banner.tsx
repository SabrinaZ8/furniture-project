import { IoIosArrowForward } from "react-icons/io";
interface Path {
    path: string;
}
export const Banner = ({ path }: Path) => {
  return (
    <div className="h-[330px] relative flex justify-center items-center" >
      <img
        src="../../../src/assets/images/banners/banner.avif"
        alt=""
        className=" h-full w-full object-cover opacity-60 blur-[3px]"
      />
      <div className="flex items-center flex-col absolute">
        <img
          src="../../../src/assets/images/LogoFurniro/furniroLogo.png"
          alt="Logo Furniro"
        />
        <h2 className="text-5xl mt-5 mb-4">{path}</h2>
        <div className="flex items-center">
          <p className="font-semibold">Home</p>
          <IoIosArrowForward className="mx-2 w-5 h-5"/>
          <p className="font-light">{path}</p>
        </div>
      </div>
    </div>
  );
};
