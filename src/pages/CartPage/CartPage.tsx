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
    console.log(quantity)
    dispatch(updateQuantity({ id: id, quantity: quantity }));
  };

  return (
    <div>
      <NavBar />
      <Banner path={"Cart"} />
      <section className="my-[90px] mx-[100px]">
        <div className="flex">
          <div className="w-3/4 mr-8">
            <div className="flex bg-yellow-70 justify-evenly items-center h-14 font-semibold">
              <p>Product</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Subtotal</p>
            </div>

            {/*Empty cart */}
            {items.length === 0 ? (
              <div className="empty-cart h-full flex items-center justify-center">
                Empty cart
              </div>
            ) : (
              ""
            )}

            {items.map((item) => (
              <div className="flex items-center justify-between my-14">
                <img
                  src={item.image}
                  alt={item.description}
                  className="h-[105px] w-[105px] rounded-md"
                />
                <p className="text-gray-350">{item.name}</p>
                <p className="text-gray-350">
                  {formatMoney(
                    item.discountedPrice ? item.discountedPrice : item.price
                  )}
                </p>
                <div className="border-2 border-gray-350 w-[107px] h-12 p-3 rounded-[10px] flex items-center justify-center mr-5">
                  <button
                    onClick={() =>
                      handleUpdateQuantity(item.id, item.quantity -1)
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
                <p>{formatMoney(item.discountedPrice? item.discountedPrice * item.quantity : item.price * item.quantity)}</p>
                <button
                  onClick={() => handleRemoveFromCart(item.id, item.name)}
                >
                  <RiDeleteBin7Fill className="text-yellow-550 w-6 h-6" />
                </button>
              </div>
            ))}
          </div>
          <div className="flex flex-col w-[393px] h-[390px] bg-yellow-70 p-4 items-center">
            <h2 className="text-[42px] font-semibold mb-16">Cart Totals</h2>
            <div className="flex justify-between w-4/5">
              <p className="font-semibold">Subtotal</p>
              <p className="text-gray-350">{formatMoney(totalAmount)}</p>
            </div>
            <div className="flex justify-between my-8  w-4/5">
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
