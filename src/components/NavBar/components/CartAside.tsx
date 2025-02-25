import { formatMoney } from "../../../utils/formatMoney";
import { BsBagX } from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { removeFromCart } from "../../../redux/cart/cartSlice";
import { toast } from "react-toastify";

type SetCartSideProps = {
  setCartSide: React.Dispatch<React.SetStateAction<boolean>>;
};
export const CartAside: React.FC<SetCartSideProps> = ({ setCartSide }) => {
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);
  const itemsCart = useSelector((state: RootState) => state.cart.items);

  const dispatch = useDispatch();
  const handleRemoveFromCart = (id: number, itemName: string) => {
    dispatch(removeFromCart(id));
    toast.warning(`${itemName} removed`);
  };

  return (
    <div className="fixed w-full h-screen bg-black bg-opacity-50 top-0 left-0 z-10">
      <div className=" w-full h-screen sm:w-[417px] sm:h-[746px] absolute z-50 top-0 right-0 p-7 bg-white flex flex-col justify-between ">
        <div className="overflow-y-auto">
          <div>
            <div className="flex justify-between items-center mb-7">
              <p className="text-2xl font-semibold">Shopping Cart</p>
              <BsBagX
                className="text-gray-350 w-5 h-5 cursor-pointer hover-text"
                onClick={() => setCartSide(true)}
              />
            </div>
            <hr className="w-4/5" />
          </div>
          <div className="flex flex-col">
            {itemsCart.map((item) => (
              <div className="flex items-center ">
                <div className="my-4 mr-7">
                  <img
                    src={item.image}
                    alt={item.description}
                    className="w-[105px] h-[105px] rounded-md object-cover"
                  />
                </div>
                <div className="flex items-center justify-between w-1/2">
                  <div>
                    <div>{item.name}</div>
                    <div>
                      <p>
                        {item.quantity}
                        <span className="font-light text-xs mx-4">X</span>
                        <span className="text-yellow-550 font-medium">
                          {formatMoney(
                            item.discountedPrice !== 0
                              ? item.discountedPrice
                              : item.price
                          )}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <IoMdCloseCircle
                      className="text-gray-350 w-5 h-5 cursor-pointer"
                      onClick={() => handleRemoveFromCart(item.id, item.name)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/*EMPTY CART */}
        {itemsCart.length === 0 ? (
          <div className="empty-cart">Empty cart</div>
        ) : (
          ""
        )}

        <div>
          <div>
            <div className="flex justify-between my-6">
              <p>Subtotal</p>
              <p className="text-yellow-550 font-semibold">
                {formatMoney(totalAmount)}
              </p>
            </div>
          </div>
          <hr />
          <div className="flex flex-wrap text-xs mt-6 max-sm:justify-center ">
            <div className="btns-shop-side btn-gray">
              <Link to="/cart" className="text-center">Cart</Link>
            </div>
            <div className="btns-shop-side btn-gray">
              <Link to="/checkout">Checkout</Link>
            </div>
            <div className="btns-shop-side btn-gray">
              <Link to="/">Comparison</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
