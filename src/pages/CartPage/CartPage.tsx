import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { removeFromCart, updateQuantity } from "../../redux/cart/cartSlice";
import { Link } from "react-router-dom";
import { NavBar } from "../../components/NavBar/NavBar";
import { Footer } from "../../components/Footer/Footer";
import { MoreInfos } from "../../components/MoreInfos/MoreInfos";
import { Banner } from "../../components/Banner/Banner";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { formatMoney } from "../../utils/formatMoney";
import { toast } from "react-toastify";

export const CartPage = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);

  const dispatch = useDispatch();

  const handleRemoveFromCart = (id: number, itemName: string) => {
    dispatch(removeFromCart(id));
    toast.warning(`${itemName} removed from cart`);
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    console.log(quantity);
    dispatch(updateQuantity({ id: id, quantity: quantity }));
  };

  return (
    <div>
      <NavBar />
      <Banner path={"Cart"} />
      <section className="my-[90px] mx-7 xl:mx-[100px]">
        <div className="flex flex-col lg:flex-row">
          <div className="mr-8 w-full lg:w-3/4">
            <div className="flex bg-yellow-70 justify-evenly items-center h-14 font-semibold ">
              <p className="max-lg:hidden">Product</p>
              <p className="max-lg:hidden">Price</p>
              <p className="max-lg:hidden">Quantity</p>
              <p className="max-lg:hidden">Subtotal</p>
            </div>

            {/*Empty cart */}
            {items.length === 0 ? (
              <div className="empty-cart min-h-96 flex items-center justify-center lg:h-full">
                Empty cart
              </div>
            ) : (
              ""
            )}

            <div className="flex flex-col my-14 md:grid md:grid-cols-2 lg:flex lg:flex-col">
              {items.map((item) => (
                <div className="flex w-full my-4 lg:my-8 items-center justify-center ">
                  <img
                    src={item.image}
                    alt={item.description}
                    className="h-[105px] min-w-[105px] max-w-[105px] rounded-md"
                  />
                  {/* start - mobile devices */}
                  <div className="lg:hidden ml-5 mr-16">
                    <div className="">
                      <p className="text-gray-350">{item.name}</p>
                      <p className="text-gray-350">
                        {formatMoney(
                          item.discountedPrice
                            ? item.discountedPrice
                            : item.price
                        )}
                      </p>
                    </div>
                    <div>
                      <div className="border-2 border-gray-350 w-[107px] h-12 p-3 rounded-[10px] flex items-center justify-center mr-5">
                        <button
                          onClick={() =>
                            handleUpdateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <span className="mx-8 font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            handleUpdateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                      {item.quantity <= 1 ? null : <p>
                        {formatMoney(
                          item.discountedPrice
                            ? item.discountedPrice * item.quantity
                            : item.price * item.quantity
                        )}
                      </p>}
                      
                    </div>
                  </div>
                  {/* end */}
                  <div className="hidden lg:flex items-center justify-between w-full mx-4">
                    <p className="text-gray-350  mx-2">{item.name}</p>
                    <p className="text-gray-350">
                      {formatMoney(
                        item.discountedPrice ? item.discountedPrice : item.price
                      )}
                    </p>
                    <div className="border-2 border-gray-350 w-[107px] h-12 p-3 rounded-[10px] flex items-center justify-center mr-5">
                      <button
                        onClick={() =>
                          handleUpdateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span className="mx-8 font-medium">{item.quantity}</span>
                      <button
                        onClick={() =>
                          handleUpdateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                    {}
                    <p>
                      {formatMoney(
                        item.discountedPrice
                          ? item.discountedPrice * item.quantity
                          : item.price * item.quantity
                      )}
                    </p>
                  </div>
                  <button
                    onClick={() => handleRemoveFromCart(item.id, item.name)}
                  >
                    <RiDeleteBin7Fill className="text-yellow-550 w-6 h-6" />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col  bg-yellow-70 p-4 items-center w-full lg:max-w-[393px] h-[390px]">
            <h2 className=" font-semibold mb-16 text-center text-3xl md:text-[42px]">
              Cart Totals
            </h2>
            <div className="flex justify-between w-4/5">
              <p className="font-semibold">Subtotal</p>
              <p className="text-gray-350">{formatMoney(totalAmount)}</p>
            </div>
            <div className="flex justify-between mt-8 mb-10  w-4/5">
              <p className="font-semibold">Total</p>
              <p className="text-yellow-550 ">{formatMoney(totalAmount)}</p>
            </div>
            <Link
              to="/checkout"
              className="flex items-center justify-center border border-1 border-black h-[60px] w-56 rounded-[15px] btn-yellow "
            >
              <p className="text-xl">Check Out</p>
            </Link>
          </div>
        </div>
      </section>
      <MoreInfos />
      <Footer />
    </div>
  );
};
