import { useTranslation } from "react-i18next";

type PaymentInputProp = {
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
  selectedOption: string;
};
export const PaymentInput: React.FC<PaymentInputProp> = ({
  setSelectedOption,
  selectedOption,
}) => {
  const { t } = useTranslation();

  return (
    <div className="text-gray-350 my-5">
      <div>
        <div className="my-3r">
          <input
            type="radio"
            name="input-payment"
            id="input-payment-1"
            className={`input-radio-payment  cursor-pointer ${
              selectedOption === "payment-1" ? "bg-black" : "bg-transparent"
            }`}
            onChange={() => setSelectedOption("payment-1")}
          />
          <label
            htmlFor="input-payment-1"
            className={` cursor-pointer ${
              selectedOption === "payment-1" ? "text-black" : "text-gray-350"
            }`}
          >
            {t("directBankTransfer")}
          </label>
        </div>

        {selectedOption === "payment-1" ? (
          <p>{t("paymentInstructions")}</p>
        ) : (
          ""
        )}
      </div>
      <div className="my-3">
        <div>
          <input
            type="radio"
            name="input-payment"
            id="input-payment-2"
            className={` cursor-pointer input-radio-payment ${
              selectedOption === "payment-2" ? "bg-black" : "bg-transparent"
            }`}
            onChange={() => setSelectedOption("payment-2")}
          />
          <label
            htmlFor="input-payment-2"
            className={`cursor-pointer ${
              selectedOption === "payment-2" ? "text-black" : "text-gray-350"
            }`}
          >
            {t("directBankTransfer")}
          </label>
        </div>
        {selectedOption === "payment-2" ? (
          <p>{t("paymentInstructions")}</p>
        ) : (
          ""
        )}
      </div>
      <div className="my-3">
        <div>
          <input
            type="radio"
            name="input-payment"
            id="input-payment-3"
            className={`cursor-pointer input-radio-payment ${
              selectedOption === "payment-3" ? "bg-black" : "bg-transparent"
            }`}
            onChange={() => setSelectedOption("payment-3")}
          />
          <label
            htmlFor="input-payment-3"
            className={`cursor-pointer ${
              selectedOption === "payment-3" ? "text-black" : "text-gray-350"
            }`}
          >
            {t("cashOnDelivery")}
          </label>
        </div>
        {selectedOption === "payment-3" ? (
          <p>{t("paymentInstructions")}</p>
        ) : (
          ""
        )}
      </div>
      <p className="text-black font-light mt-6 mb-10">
        {t("personalDataNotice")}
        <span className="font-semibold">{t("privacyPolicies")}</span>.
      </p>
    </div>
  );
};
