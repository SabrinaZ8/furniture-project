import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

type PathBarProps = {
  nameProduct: string;
};
export const PathBar: React.FC<PathBarProps> = ({ nameProduct }) => {
  return (
    <div className="h-[100px] bg-yellow-70 flex items-center max-sm:px-4 sm:pl-24">
      <div className="flex items-center border-r-[2px]  border-gray-350">
        <Link to={"/"}>
          <p className="text-gray-350">Home</p>
        </Link>
        <span className="ml-4 mr-6">
          <IoIosArrowForward />
        </span>
        <Link to={'/shop'}>
        <p className="text-gray-350">Shop</p>
        </Link>
        <span className="ml-4 mr-6">
          <IoIosArrowForward />
        </span>
      </div>
      <div className="ml-6">
        <p>{nameProduct}</p>
      </div>
    </div>
  );
};
