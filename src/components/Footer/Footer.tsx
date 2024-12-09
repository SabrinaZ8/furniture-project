import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";

import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="min-h-[505px] h-[505px] mx-24">
      <div className="my-12 flex justify-between h-9/12">
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
              className=" flex w-9 h-9 rounded-full shadow-lg items-center justify-center mx-2"
            >
              <TiSocialFacebook className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="flex w-9 h-9 rounded-full shadow-lg items-center justify-center mx-2"
            >
              <SlSocialInstagram className="w-4 h-4" />
            </a>
            <a
              href="https://x.com/i/flow/login"
              target="_blank"
              className="flex w-9 h-9 rounded-full shadow-lg items-center justify-center mx-2"
            >
              <TiSocialTwitter className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/sabrina-souza-dev/"
              target="_blank"
              className="flex w-9 h-9 rounded-full shadow-lg items-center justify-center mx-2"
            >
              <TiSocialLinkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-y-12 font-medium">
          <h3 className="text-gray-350">Links</h3>
          <ul className="flex flex-col gap-y-10">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="#">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-12 font-medium">
          <h3 className="text-gray-350">Help</h3>
          <ul className="flex flex-col gap-y-10">
            <li>
              <Link to='#'>Payment Options</Link>
            </li>
            <li>
              <Link to='#'>Returns</Link>
            </li>
            <li>
              <Link to='#'>Privacy Policies</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-12 font-medium">
          <h3 className="text-gray-350">Newsletter</h3>
          <form action="" className="text-sm/7 ">
            <input type="text" placeholder="Enter Your Email Address" className="font-normal border-b border-black pr-5"/>
            <button type="submit" className="uppercase border-b border-black ml-2.5">Subscribe</button>
          </form>
        </div>
      </div>
      <div>
        <hr />
        <p  className="my-9">2023 furino. All rights reverved</p>
      </div>
    </footer>
  );
};
