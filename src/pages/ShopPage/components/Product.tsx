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
    <div className="max-w-[285px] max-h-[446px]">
      <div className="relative group">
        {/*overlay*/}
        <div className="flex flex-col justify-center items-center overlay-shop font-semibold">
          <div className="my-6">
            <button
              onClick={(e) => {
                handleAddToCart(product);
                e.stopPropagation();
                e.preventDefault();
              }}
              className="w-[202px] h-12 bg-white text-yellow-550"
            >
              Add to cart
            </button>
          </div>
          <div className="flex text-white">
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
          className="max-w-[285px] max-h-[300px] object-cover w-[285px] h-[300px]"
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
      <div className="bg-gray-100 p-4">
        <h2 className="text-gray-750 font-semibold text-2xl">{product.name}</h2>
        <p className="text-gray-898 my-2">{product.description}</p>
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold text-gray-750">
            {formatMoney(
              product.discountedPrice === 0
                ? product.price
                : product.discountedPrice
            )}
          </h3>
          <span className="text-gray-110 line-through">
            {product.discountedPrice === 0
              ? null
              : formatMoney(product.price)}
          </span>
        </div>
      </div>
    </div>
  );
};
