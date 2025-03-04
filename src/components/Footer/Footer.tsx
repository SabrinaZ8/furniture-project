import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { Link } from "react-router-dom";
import { FormSubscribe } from "./components/FormSubscribe";
import { useTranslation } from "react-i18next"


export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="md:min-h-[505px]">
      <hr />
      <div className="my-12 justify-between h-9/12 px-4 flex flex-col md:px-24 lg:flex-row ">
        <div className="flex flex-col gap-y-14">
          <span className="font-poppins text-2xl font-bold">Furniro.</span>
          <address className="not-italic text-gray-350">
            400 University Drive Suite 200 Coral
            <br />
            Gables,
            <br />
            FL 33134 USA <br />
          </address>
          <div className="flex justify-center lg:justify-start">
            <a
              href="https://pt-br.facebook.com/login/device-based/regular/login/"
              target="_blank"
              className=" flex w-9 h-9 rounded-full shadow-lg items-center justify-center mx-2 hover-text"
            >
              <TiSocialFacebook className="w-4 h-4" aria-label="Facebook" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="flex w-9 h-9 rounded-full shadow-lg items-center justify-center mx-2 hover-text"
            >
              <SlSocialInstagram className="w-4 h-4" aria-label="Instagram" />
            </a>
            <a
              href="https://x.com/i/flow/login"
              target="_blank"
              className="flex w-9 h-9 rounded-full shadow-lg items-center justify-center mx-2 hover-text"
            >
              <TiSocialTwitter className="w-4 h-4" aria-label="Twitter X" />
            </a>
            <a
              href="https://www.linkedin.com/in/sabrina-souza-dev/"
              target="_blank"
              className="flex w-9 h-9 rounded-full shadow-lg items-center justify-center mx-2  hover-text"
            >
              <TiSocialLinkedin className="w-4 h-4" aria-label="Linkedin" />
            </a>
          </div>
        </div>
        <div className="flex justify-center text-center my-10 lg:my-0 lg:justify-start">
        <div className="flex flex-col items-center gap-y-12 font-medium mr-20 lg:mr-40 lg:my-0 lg:items-start">
          <h3 className="text-gray-350">Links</h3>
          <ul className="flex flex-col items-center gap-y-10 lg:items-start">
            <li >
              <Link to="/" className="hover-text">{t("home")}</Link>
            </li>
            <li>
              <Link to="/shop" className="hover-text">{t("shop")}</Link>
            </li>
            <li>
              <Link to="#" className="hover-text">{t("about")}</Link>
            </li>
            <li>
              <Link to="/contact" className="hover-text">{t("contact")}</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-y-12 font-medium lg:my-0 lg:items-start">
          <h3 className="text-gray-350">{t("help")}</h3>
          <ul className="flex flex-col items-center gap-y-10 lg:items-start">
            <li>
              <Link to='#' className="hover-text">{t("paymentOptions")}</Link>
            </li>
            <li>
              <Link to='#' className="hover-text">{t("returns")}</Link>
            </li>
            <li>
              <Link to='#' className="hover-text">{t("privacyPolicies")}</Link>
            </li>
          </ul>
        </div>
        </div>
        
        <div className="flex flex-col items-center lg:items-start gap-y-12 font-medium">
          <h3 className="text-gray-350">{t("newsletter")}</h3>
          
          <FormSubscribe />
        </div>
      </div>
      <div className="mx-10 lg:mx-24">
        <hr />
        <p  className="my-9 ">2023 furniro. All rights reverved</p>
      </div>
    </footer>
  );
};