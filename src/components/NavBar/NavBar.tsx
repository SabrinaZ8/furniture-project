import { Link } from "react-router-dom";
import { TbUserExclamation } from "react-icons/tb";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { UserButton, useClerk, SignedIn, SignedOut } from "@clerk/clerk-react";
import { useState } from "react";
import { CartAside } from "./components/CartAside";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import SettingsLang from "./components/SettingsLang";
import { useTranslation } from "react-i18next";

export const NavBar = () => {
  const [cartSide, setCartSide] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const { t } = useTranslation();

  const { redirectToSignIn } = useClerk();
  const { signOut } = useClerk();

  const handleLogin = () => {
    redirectToSignIn();
  };
  const handleLogout = () => {
    signOut();
  };

  return (
    <nav className="flex justify-between items-center min-h-[100px] px-4 lg:px-14 relative">
      <Link to="/" className="flex">
        <img
          src="/logo/furniroLogo.png"
          alt="Logo Furniro"
          className="max-sm:w-10 max-sm:h-7 mr-2 object-contain"
        />
        <span className="font-montserrat flex items-center font-bold text-xl lg:text-3xl">
          Furniro
        </span>
      </Link>
      <div className="max-md:hidden w-1/2 lg:w-1/3">
        <ul className="flex font-medium justify-between">
          <li>
            <Link to="/" className="hover-text">
              {t("home")}
            </Link>
          </li>
          <li>
            <Link to="/shop" className="hover-text">
              {t("shop")}
            </Link>
          </li>
          <li>
            <Link to="#" className="hover-text">
              {t("about")}
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover-text">
              {t("contact")}
            </Link>
          </li>
        </ul>
      </div>
      {/*Menu mobile */}
      <div className="flex flex-col h-full md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className=""
          aria-label="Menu"
        >
          <IoMenu className="w-[30px] h-[30px]" />
        </button>
        {isOpen ? (
          <ul className="flex items-center z-10 bg-yellow-40 absolute py-5 px-8 flex-col font-medium justify-evenly w-screen h-screen left-0 top-0 overflow-hidden">
            <li className="w-full">
              <div className="flex justify-between w-full">
                <Link to="/" className="flex items-center">
                  <img
                    src="/logo/furniroLogo.png"
                    alt="Logo Furniro"
                    className="max-md:w-10 max-md:h-7 mr-2 object-contain"
                  />
                  <span className="font-montserrat flex items-center font-bold text-xl sm:text-3xl">
                    Furniro
                  </span>
                </Link>
                <div>
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="mx-2"
                    aria-label="Close menu"
                  >
                    <IoMdClose className="w-[30px] h-[30px]" />
                  </button>
                  <div className="md:hidden">
                    <SettingsLang />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/" className="hover-text">
                {t("home")}
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover-text">
                {t("shop")}
              </Link>
            </li>
            <li>
              <Link to="#" className="hover-text">
                {t("about")}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover-text">
                {t("contact")}
              </Link>
            </li>
          </ul>
        ) : null}
      </div>
      <div className="flex items-center">
        <div className=" mr-3.5 flex items-center justify-center">
          <div onClick={handleLogout} className="flex items-center">
            {/* If the user is online, he can log out*/}
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>

          {/*If the user is offline, he can click and log in*/}
          <SignedOut>
            <TbUserExclamation
              onClick={handleLogin}
              className="w-7 h-6 hover:text-yellow-550 cursor-pointer"
            />
          </SignedOut>
        </div>

        {/*Show CartAside*/}
        <AiOutlineShoppingCart
          className={`w-7 h-6 4 cursor-pointer hover:text-yellow-550`}
          onClick={() => setCartSide(false)}
        />
        {cartSide ? null : <CartAside setCartSide={setCartSide} />}
        <div className="max-md:hidden">
          <SettingsLang />
        </div>
      </div>
    </nav>
  );
};
