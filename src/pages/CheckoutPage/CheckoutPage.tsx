import axios from "axios";
import { useEffect, useState } from "react";
import { AddressType, UserInfos } from "../../../src/types/types";

export const CheckoutPage = () => {
  const [selectedOption, setSelectedOption] = useState("l");
  const [cepUser, setCepUser] = useState("");
  const [cepSearch, setCepSearch] = useState<AddressType | null>(null);
  const [address, setAddress] = useState<UserInfos>({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    pais: "Brasil",
    cep: "",
    logradouro: "",
    complemento: "",
    bairro: "",
    localidade: "",
    uf: "",
    ibge: "",
    gia: "",
    ddd: "",
    siafi: "",
  });

  const handleInputChange = (field: keyof UserInfos, value: string | null) => {
    setAddress(
      (prev) =>
        ({
          ...prev,
          [field]: value,
        } as UserInfos)
    );
  };

  useEffect(() => {
    const searchCep = async () => {
      if (cepUser.length === 8 && /^\d+$/.test(cepUser)) {
        try {
          const response = await axios.get(
            `https://viacep.com.br/ws/${cepUser}/json/`
          );
          setCepSearch(response.data);
        } catch (e) {
          console.log(e);
        }
      }
    };
    searchCep();
  }, [cepUser]);

  useEffect(() => {
    if (cepSearch) {
      setAddress((prev) => ({
        ...prev,
        logradouro: cepSearch.logradouro || "",
        localidade: cepSearch.localidade || "",
        uf: cepSearch.uf || "",
        bairro: cepSearch.bairro || "",
      }));
    }
  }, [cepSearch]);

  console.log(cepSearch);

  return (
    <section className="flex ml-[174px] mr-[125px] justify-center">
      <div className="w-1/2 flex flex-col items-center">
        <div className="w-1/2">
          <h2 className="font-semibold text-4xl">Billing details</h2>
          <div className="flex my-7">
            <div className="flex flex-col mr-6">
              <label htmlFor="name" className="mb-5 font-medium">
                First Name
              </label>
              <input
                type="text"
                id="name"
                className="border-[1px] border-gray-350 rounded-[10px] h-[75px] w-[211px]"
                value={address.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="last-name" className="mb-5 font-medium">
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                className="border-[1px] border-gray-350 rounded-[10px] h-[75px] w-[211px]"
                value={address.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col  my-7">
            <label htmlFor="company-name" className="mb-5 font-medium">
              Company Name (Optional)
            </label>
            <input
              type="text"
              id="company-name"
              className="border-[1px] border-gray-350 rounded-[10px] h-[75px] w-[453px]"
              value={address.company || ""}
              onChange={(e) => handleInputChange("company", e.target.value)}
            />
          </div>
          <div className="flex flex-col my-7">
            <label htmlFor="zip-code" className="mb-5 font-medium">
              ZIP code
            </label>
            <input
              type="text"
              id="zip-code"
              className="border-[1px] border-gray-350 rounded-[10px] h-[75px] w-[453px]"
              value={cepUser}
              onChange={(e) => setCepUser(e.target.value)}
            />
          </div>
          <div className="flex flex-col my-7">
            <label htmlFor="country" className="mb-5 font-medium">
              Country / Region
            </label>
            <input
              type="text"
              id="country"
              className="border-[1px] border-gray-350 rounded-[10px] h-[75px] w-[453px]"
              value={address?.pais || ""}
              onChange={(e) => handleInputChange("pais", e.target.value)}
            />
          </div>
          <div className="flex flex-col  my-7">
            <label htmlFor="street-address" className="mb-5 font-medium">
              Street address
            </label>
            <input
              type="text"
              id="street-address"
              className="border-[1px] border-gray-350 rounded-[10px] h-[75px] w-[453px]"
              value={address.logradouro}
              onChange={(e) => handleInputChange("logradouro", e.target.value)}
            />
          </div>
          <div className="flex flex-col my-7">
            <label htmlFor="city" className="mb-5 font-medium">
              Town / City
            </label>
            <input
              type="text"
              id="city"
              className="border-[1px] border-gray-350 rounded-[10px] h-[75px] w-[453px]"
              value={cepSearch?.localidade || ""}
              onChange={(e) => handleInputChange("localidade", e.target.value)}
            />
          </div>
          <div className="flex flex-col my-7">
            <label htmlFor="province" className="mb-5 font-medium">
              Province
            </label>
            <input
              type="text"
              id="province"
              className="border-[1px] border-gray-350 rounded-[10px] h-[75px] w-[453px]"
              value={cepSearch?.uf}
              onChange={(e) => handleInputChange("uf", e.target.value)}
            />
          </div>
          <div className="flex flex-col my-7">
            <label htmlFor="add-on-address" className="mb-5 font-medium">
              Add-on address
            </label>
            <input
              type="text"
              id="add-on-address"
              className="border-[1px] border-gray-350 rounded-[10px] h-[75px] w-[453px]"
              value={address.complemento}
              onChange={(e) => handleInputChange("complemento", e.target.value)}
            />
          </div>
          <div className="flex flex-col my-7">
            <label htmlFor="email-address" className="mb-5 font-medium">
              Email address
            </label>
            <input
              type="text"
              id="email-address"
              className="border-[1px] border-gray-350 rounded-[10px] h-[75px] w-[453px]"
              value={address.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="">
          <div className="flex justify-between mb-8">
            <h3 className="font-semibold text-2xl text-start mr-8">Product</h3>
            <h3 className="font-semibold text-2xl text-end">Subtotal</h3>
          </div>
          <div className="flex justify-between mb-8">
            <p className="text-gray-350">
              Asgaard sofa <span className="text-black">x 1</span>
            </p>
            <p className="font-light">Rs. 250,000.00</p>
          </div>
          <div className="flex justify-between mb-8">
            <p>Subtotal</p>
            <p className="font-light">Rs. 250,000.00</p>
          </div>
          <div className="flex justify-between mb-8">
            <p>Total</p>
            <p className="text-2xl text-yellow-550 font-bold">Rs. 250,000.00</p>
          </div>
        </div>
        <hr />
        <div>
          <div className="text-gray-350 my-5">
            <div className="my-3">
              <input
                type="radio"
                name="input-payment"
                id="input-payment-1"
                className={`input-radio-payment ${
                  selectedOption === "payment-1" ? "bg-black" : "bg-transparent"
                }`}
                onChange={() => setSelectedOption("payment-1")}
              />
              <label htmlFor="input-payment-1">Direct Bank Transfer</label>
            </div>
            <div className="my-3">
              <input
                type="radio"
                name="input-payment"
                id="input-payment-2"
                className={`input-radio-payment ${
                  selectedOption === "payment-2" ? "bg-black" : "bg-transparent"
                }`}
                onChange={() => setSelectedOption("payment-2")}
              />
              <label htmlFor="input-payment-2">Direct Bank Transfer</label>
            </div>
            <div className="my-3">
              <input
                type="radio"
                name="input-payment"
                id="input-payment-3"
                className={`input-radio-payment ${
                  selectedOption === "payment-3" ? "bg-black" : "bg-transparent"
                }`}
                onChange={() => setSelectedOption("payment-3")}
              />
              <label htmlFor="input-payment-3">Cash On Delivery</label>
            </div>
            <p className="text-black font-light mt-6 mb-10">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <span className="font-semibold">privacy policy</span>.
            </p>
          </div>
          <div className="flex justify-center mx-3">
            <button
              type="submit"
              className="w-80 h-16 rounded-[15px] text-xl border-[1px] border-black"
            >
              Place order
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
