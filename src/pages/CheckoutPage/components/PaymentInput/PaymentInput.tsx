type PaymentInputProp = {
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
  selectedOption: string;
};
export const PaymentInput: React.FC<PaymentInputProp> = ({
  setSelectedOption,
  selectedOption,
}) => {
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
            Direct Bank Transfer
          </label>
        </div>

        {selectedOption === "payment-1" ? (
          <p>
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>
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
            Direct Bank Transfer
          </label>
        </div>
        {selectedOption === "payment-2" ? (
          <p>
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>
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
            Cash On Delivery
          </label>
        </div>
        {selectedOption === "payment-3" ? (
          <p>
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>
        ) : (
          ""
        )}
      </div>
      <p className="text-black font-light mt-6 mb-10">
        Your personal data will be used to support your experience throughout
        this website, to manage access to your account, and for other purposes
        described in our <span className="font-semibold">privacy policy</span>.
      </p>
    </div>
  );
};
