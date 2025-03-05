import { useState } from "react";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

export const FormSubscribe = () => {
  const [email, setEmail] = useState("");

  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      toast.error(t("validEmail"));
      return;
    }

    localStorage.setItem("userEmailSubscribe", email);
    setEmail("");
    toast.success(t("emailRegistered"));
  };

  return (
    <form action="" className="text-sm/7" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder={`${t("enterEmail")}`}
        className="font-normal border-b border-black pr-5 mr-2.5 focus:outline-none"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        type="submit"
        className="uppercase border-b border-black hover-text"
      >
        {t("subscribe")}
      </button>
    </form>
  );
};
