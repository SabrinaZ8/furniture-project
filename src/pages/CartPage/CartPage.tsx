import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../../store";
import { removeFromCart } from "../../redux/cart/cartSlice";
import { Link } from "react-router-dom";
import { NavBar } from "../../components/NavBar/NavBar";
import { Footer } from "../../components/Footer/Footer";
import { MoreInfos } from "../../components/MoreInfos/MoreInfos";

export const CartPage = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);

  const dispatch = useDispatch();
  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  console.log(items);
  return (
    <div>
      <NavBar />
      <section className="my-[90px] mx-[100px]">
        <div className="flex">
          <div className="w-3/4 mr-8">
            <div className="flex bg-yellow-70 justify-evenly items-center h-14 font-semibold">
              <p>Product</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Subtotal</p>
            </div>
            {items.map((item) => (
              <div className="flex items-center justify-between my-14">
                <img
                  src={item.image}
                  alt={item.description}
                  className="h-[105px] w-[105px] rounded-md"
                />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{item.quantity}</p>
                <p>{totalAmount}</p>
                <button onClick={() => handleRemoveFromCart(item.id)}>
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="flex flex-col w-[393px] h-[390px] bg-yellow-70 p-4 items-center">
            <h2 className="text-[42px] font-semibold mb-16">Cart Totals</h2>
            <div className="flex justify-between w-4/5">
              <p className="font-semibold">Subtotal</p>
              <p className="text-gray-350">{totalAmount}</p>
            </div>
            <div className="flex justify-between my-8  w-4/5">
              <p className="font-semibold">Total</p>
              <p className="text-yellow-550 ">{totalAmount}</p>
            </div>
            <Link
              to="/checkout"
              className="flex items-center justify-center border border-1 border-black h-[60px] w-56 rounded-[15px]"
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
