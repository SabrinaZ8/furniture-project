import { useState } from "react";
import { useTranslation } from "react-i18next";

function SettingsLang() {
  const [lang, setLang] = useState("en");

  const { i18n } = useTranslation();

 const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLang(lng)
    console.log(lng)
  };


  return (
    <div className="flex font-semibold text-xs p-1 bg-gray-200 rounded-full">

      <button
        className={`${lang == "en" ?  "bg-blue-300" : "bg-gray-200" } btn-lang`}
        onClick={() => {
          changeLanguage("en");
        }}
      >
        EN
      </button>

      <button
      className={`${lang == "pt" ? "bg-blue-300" : "bg-gray-200"  } btn-lang`}
        onClick={() => {
          changeLanguage("pt");
        }}
      >
        PT
      </button>

    </div>
  );
}

export default SettingsLang;
