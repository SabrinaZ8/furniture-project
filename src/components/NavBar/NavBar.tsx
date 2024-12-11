import { Link } from "react-router-dom";
import { TbUserExclamation } from "react-icons/tb";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { UserButton, useClerk, SignedIn, SignedOut } from "@clerk/clerk-react";
import { useState } from "react";
import { CartAside } from "./components/CartAside";

export const NavBar = () => {
  const [cartSide, setCartSide] = useState(true);

  const { redirectToSignIn } = useClerk();
  const { signOut } = useClerk();

  const handleLogin = () => {
    redirectToSignIn();
  };
  const handleLogout = () => {
    signOut();
  };

  return (
    <nav className="flex justify-between items-center h-[100px] p-14 relative">
      <Link to="/" className="flex">
        <img
          src="../../../src/assets/images/LogoFurniro/furniroLogo.png"
          alt="Logo Furniro"
          className="mr-2"
        />
        <span className="font-montserrat font-bold text-3xl">Furniro</span>
      </Link>
      <div className="w-1/3">
        <ul className="flex font-medium justify-between">
          <li>
            <Link to="/" className="hover-text">Home</Link>
          </li>
          <li>
            <Link to="/shop" className="hover-text">Shop</Link>
          </li>
          <li>
            <Link to="#" className="hover-text">About</Link>
          </li>
          <li>
            <Link to="/contact" className="hover-text">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="flex">
        <div className=" mr-3.5 flex items-center justify-center">
          <div onClick={handleLogout}>
            {/* If the user is online, he can log out*/}
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>

          {/*If the user is offline, he can click and log in*/}
          <SignedOut>
            <TbUserExclamation onClick={handleLogin} className="w-7 h-6 hover:text-yellow-550 cursor-pointer" />
          </SignedOut>
        </div>

        {/*Show CartAside*/}
        <AiOutlineShoppingCart
          className={`w-7 h-6 4 cursor-pointer hover:text-yellow-550`}
          onClick={() => setCartSide(false)}
        />
        {cartSide ? null : <CartAside setCartSide={setCartSide} />}
      </div>
    </nav>
  );
};
