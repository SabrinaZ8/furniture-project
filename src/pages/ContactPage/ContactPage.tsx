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
      toast.success("Sent successfully")

    } else {
      console.log("Erro in validation:", errors);
      toast.error("Something went wrong!")
    }
  };

  return (
    <div>
      <NavBar />
      <Banner path={"Contact"} />

      <section className="mt-[90px] mb-16">
        <div className="flex flex-col text-center items-center">
          <h2 className="text-4xl font-semibold">Get In Touch With Us</h2>
          <p className="text-gray-350 w-4/12 mt-5">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>
        <div className="flex mx-[237px]">
          <div className="w-1/2 mt-9">
            <div className="infos-address-phone">
              <div className="mr-6">
                <FaMapMarkerAlt className="infos-address-phone-icons" />
              </div>
              <div>
                <h3 className="infos-address-phone-h3">Address</h3>
                <p>236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>
            <div>
              <div className="infos-address-phone">
                <div className="mr-6">
                  <FaPhoneAlt className="infos-address-phone-icons" />
                </div>
                <div>
                  <h3 className="infos-address-phone-h3">Phone</h3>
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
                <h3 className="infos-address-phone-h3">Working Time</h3>
                <p>Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>
          <form
            className="w-1/2 flex flex-col items-start"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="infos-address-phone-input-div">
              <label htmlFor="name" className="infos-address-phone-label">
                Your Name
              </label>
              <p className="message-error">{errors.name ? errors.name : ""}</p>
              <input
                id="name"
                type="text"
                className="infos-address-phone-input"
                placeholder="Ex: Sabrina"
                value={formContact.name}
                onChange={handleChange}
              />
            </div>
            <div className="infos-address-phone-input-div">
              <label htmlFor="email" className="infos-address-phone-label">
                Email address
              </label>
              <p className="message-error">
                {errors.email ? errors.email : ""}
              </p>
              <input
                type="email"
                id="email"
                className="infos-address-phone-input"
                placeholder="ex: Your_email@gmail.com"
                value={formContact.email}
                onChange={handleChange}
              />
            </div>
            <div className="infos-address-phone-input-div">
              <label htmlFor="subject" className="infos-address-phone-label">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="infos-address-phone-input"
                placeholder="This is an optional"
                value={formContact.subject}
                onChange={handleChange}
              />
            </div>
            <div className="infos-address-phone-input-div">
              <label htmlFor="message" className="infos-address-phone-label">
                Message
              </label>
              <p className="message-error">
                {errors.message ? errors.message : ""}
              </p>
              <input
                type="text"
                id="message"
                className="infos-address-phone-input h-[120px]"
                placeholder="Hi! i’d like to ask about"
                value={formContact.message}
                onChange={handleChange}
              />
            </div>
            <div className="my-[50px]">
              <button
                type="submit"
                className="w-[237px] h-14 bg-yellow-550 rounded  text-white btn-transparent "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      <MoreInfos />
      <Footer />
    </div>
  );
};
