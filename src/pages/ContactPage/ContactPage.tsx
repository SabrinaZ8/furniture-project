import { useState } from "react";
import { Banner } from "../../components/Banner/Banner";
import { Footer } from "../../components/Footer/Footer";
import { MoreInfos } from "../../components/MoreInfos/MoreInfos";
import { NavBar } from "../../components/NavBar/NavBar";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import { useValidateFormContact } from "../../hooks/useValidateFormContact";
import { toast } from "react-toastify";
import { FormContact } from "./components/FormContact";
import { useTranslation } from "react-i18next"


export const ContactPage = () => {
  const [formContact, setFormContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormContact((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const { validateForm, errors } = useValidateFormContact();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = validateForm(formContact);

    if (isValid) {
      localStorage.setItem("contactFormData", JSON.stringify(formContact));
      setFormContact({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      toast.success(t("sentSuccessfully"));
    } else {
      toast.error(t("somethingWentWrong"));
    }
  };

  const { t } = useTranslation();

  return (
    <div>
      <NavBar />
      <Banner path={"Contact"} />

      <section className="mt-[90px] mb-16">
        <div className="flex flex-col text-center items-center">
          <h2 className="font-semibold text-3xl xl:text-4xl ">{t("getInTouch")}</h2>
          <p className="text-gray-350 w-5/6 lg:w-4/12 mt-5">
            {t("contactText")}
          </p>
        </div>
        <div className="flex flex-col items-center xl:items-start mx-4 sm:mx-10 xl:mx-[237px] xl:flex-row">
          <div className="flex flex-col mt-9 w-4/5 xl:items-start xl:w-1/2 xl:mx-4 ">
            <div className="infos-address-phone">
              <div className="mr-6">
                <FaMapMarkerAlt className="infos-address-phone-icons" />
              </div>
              <div>
                <h3 className="infos-address-phone-h3">{t("address")}</h3>
                <p>236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>
            <div>
              <div className="infos-address-phone">
                <div className="mr-6">
                  <FaPhoneAlt className="infos-address-phone-icons" />
                </div>
                <div>
                  <h3 className="infos-address-phone-h3">{t("phone")}</h3>
                  <p>
                    Mobile: +(84) 546-6789 <br />
                    Hotline: +(84) 456-6789
                  </p>
                </div>
              </div>
            </div>
            <div className="infos-address-phone">
              <div className="mr-6">
                <MdAccessTimeFilled className="infos-address-phone-icons" />
              </div>
              <div>
                <h3 className="infos-address-phone-h3">{t("workingTime")}</h3>
                <p>{t("monday")}-{t("friday")}: 9:00 - 22:00 {t("saturday")}-{t("sunday")}: 9:00 - 21:00</p>
              </div>
            </div>
          </div>
          <FormContact
            handleSubmit={handleSubmit}
            formContact={formContact}
            errors={errors}
            handleChange={handleChange}
          />
        </div>
      </section>

      <MoreInfos />
      <Footer />
    </div>
  );
};
