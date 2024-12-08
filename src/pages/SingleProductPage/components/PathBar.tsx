import { IoIosArrowForward } from "react-icons/io";

type PathBarProps ={
    nameProduct: string
}
export const PathBar:React.FC<PathBarProps> = ({nameProduct}) => {
  return (
    <div className="h-[100px] bg-yellow-70 flex items-center pl-24">
        <div className="flex items-center border-r-[2px]  border-gray-350">
          <p className="text-gray-350">Home</p>
          <span className="ml-4 mr-6">
            <IoIosArrowForward />
          </span>
          <p className="text-gray-350">Shop</p>
          <span className="ml-4 mr-6">
            <IoIosArrowForward />
          </span>
        </div>
        <div className="ml-6">
          <p>{nameProduct}</p>
        </div>
      </div>
  )
}
