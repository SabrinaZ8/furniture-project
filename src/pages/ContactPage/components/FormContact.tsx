import { FormContactComponent } from "../../../types/types";
import { useTranslation } from "react-i18next";

export const FormContact: React.FC<FormContactComponent> = ({
  handleSubmit,
  formContact,
  errors,
  handleChange,
}) => {
  const { t } = useTranslation();

  return (
    <form
      className="flex flex-col items-center w-full sm:w-4/5 xl:w-1/2 xl:items-start"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="infos-address-phone-input-div">
        <label htmlFor="name" className="infos-address-phone-label">
          {t("yourName")}
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
          {t("enterEmail")}
        </label>
        <p className="message-error">{errors.email ? errors.email : ""}</p>
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
          {t("subject")}
        </label>
        <input
          type="text"
          id="subject"
          className="infos-address-phone-input"
          placeholder={t("thisIsOptional")}
          value={formContact.subject}
          onChange={handleChange}
        />
      </div>
      <div className="infos-address-phone-input-div">
        <label htmlFor="message" className="infos-address-phone-label">
          {t("message")}
        </label>
        <p className="message-error">{errors.message ? errors.message : ""}</p>
        <input
          type="text"
          id="message"
          className="infos-address-phone-input h-[120px]"
          placeholder={t("hiIdLikeToAsk")}
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
  );
};
