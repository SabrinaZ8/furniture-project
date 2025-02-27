import { ProductType, CartProductType } from "../../../../src/types/types";
import { IoShareSocial } from "react-icons/io5";
import { GoArrowSwitch } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cart/cartSlice";
import { formatMoney } from "../../../utils/formatMoney";
import { toast } from 'react-toastify'

type ProductProps = {
  product: ProductType;
};

export const Product: React.FC<ProductProps> = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (product: ProductType) => {
    if (product) {
      const productWithQuantity: CartProductType = {
        ...product,
        quantity: 1,
      };
      dispatch(addToCart(productWithQuantity));
      toast.success("Product added to cart successfully!")

    }
  };

  return (
    <div className="h-full w-full">
      <div className="relative group w-full">
        {/*overlay*/}
        <div className="flex flex-col-reverse justify-center items-center overlay-shop font-semibold md:flex-col">
          <div className="my-6">
            <button
              onClick={(e) => {
                handleAddToCart(product);
                e.stopPropagation();
                e.preventDefault();
              }}
              className="w-[150px] h-12 bg-white text-yellow-550 md:w-[202px]"
            >
              Add to cart
            </button>
          </div>
          <div className="flex flex-col text-white md:flex-row">
            <div className="overlay-shop-icons-div">
              <IoShareSocial className="overlay-shop-icons" />
              <p>Share</p>
            </div>
            <div className="overlay-shop-icons-div">
              <GoArrowSwitch className="overlay-shop-icons" />
              <p>Compare</p>
            </div>
            <div className="overlay-shop-icons-div">
              <FaRegHeart className="overlay-shop-icons" />
              <p>Like</p>
            </div>
          </div>
        </div>
        <img
          src={product.image}
          alt={product.description}
          className="min-w-full max-h-[190px] h-[190px] md:max-h-[300px] md:h-[300px] object-cover "
        />
        {product.isNew ? (
          <span className="absolute top-5 right-5 bg-green-450 text-white w-12 h-12 rounded-full flex justify-center items-center">
            New
          </span>
        ) : (
          <span
            className={`absolute top-5 right-5 bg-red-350 text-white w-12 h-12 rounded-full flex justify-center items-center
            ${product.discountPercentage === 0 ? "hidden" : "flex"}`}
          >
            -{product.discountPercentage}%
          </span>
        )}
      </div>
      <div className="bg-gray-100 p-2 sm:p-4 w-full min-h-[161px] max-h-[161px] md:min-h-[146px] ">
        <h2 className="text-gray-750 font-semibold text-lg md:text-2xl">{product.name}</h2>
        <p className="text-gray-898 max-sm:text-sm my-1 sm:my-2">{product.description}</p>
        <div className="flex flex-col justify-between md:flex-row">
          <h3 className="text-base md:text-xl font-semibold text-gray-750">
            {formatMoney(
              product.discountedPrice === 0
                ? product.price
                : product.discountedPrice
            )}
          </h3>
          <span className="text-gray-110 line-through max-sm:text-sm">
            {product.discountedPrice === 0
              ? null
              : formatMoney(product.price)}
          </span>
        </div>
      </div>
    </div>
  );
};
