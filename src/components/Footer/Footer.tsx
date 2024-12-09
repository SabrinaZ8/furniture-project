import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";

import { Link } from "react-router-dom";
import { FormSubscribe } from "./components/FormSubscribe";

export const Footer = () => {
  return (
    <footer className="min-h-[505px] h-[505px] ">
      <hr />
      <div className="my-12 flex justify-between h-9/12 px-24">
        <div className="flex flex-col gap-y-14">
          <span className="font-poppins text-2xl font-bold">Funiro.</span>
          <address className="not-italic text-gray-350">
            400 University Drive Suite 200 Coral
            <br />
            Gables,
            <br />
            FL 33134 USA <br />
          </address>
          <div className="flex">
            <a
              href="https://pt-br.facebook.com/login/device-based/regular/login/"
              target="_blank"
              className=" flex w-9 h-9 rounded-full shadow-lg items-center justify-center mx-2 hover-text"
            >
              <TiSocialFacebook className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="flex w-9 h-9 rounded-full shadow-lg items-center justify-center mx-2 hover-text"
            >
              <SlSocialInstagram className="w-4 h-4" />
            </a>
            <a
              href="https://x.com/i/flow/login"
              target="_blank"
              className="flex w-9 h-9 rounded-full shadow-lg items-center justify-center mx-2 hover-text"
            >
              <TiSocialTwitter className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/sabrina-souza-dev/"
              target="_blank"
              className="flex w-9 h-9 rounded-full shadow-lg items-center justify-center mx-2  hover-text"
            >
              <TiSocialLinkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-y-12 font-medium">
          <h3 className="text-gray-350">Links</h3>
          <ul className="flex flex-col gap-y-10">
            <li >
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
        <div className="flex flex-col gap-y-12 font-medium">
          <h3 className="text-gray-350">Help</h3>
          <ul className="flex flex-col gap-y-10">
            <li>
              <Link to='#' className="hover-text">Payment Options</Link>
            </li>
            <li>
              <Link to='#' className="hover-text">Returns</Link>
            </li>
            <li>
              <Link to='#' className="hover-text">Privacy Policies</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-12 font-medium">
          <h3 className="text-gray-350">Newsletter</h3>
          
          <FormSubscribe />
        </div>
      </div>
      <div className="px-24">
        <hr />
        <p  className="my-9">2023 furino. All rights reverved</p>
      </div>
    </footer>
  );
};
