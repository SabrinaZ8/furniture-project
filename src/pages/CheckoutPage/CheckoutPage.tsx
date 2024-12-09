import axios from "axios";
import { useEffect, useState } from "react";
import { AddressType, UserInfos } from "../../../src/types/types";
import { NavBar } from "../../components/NavBar/NavBar";
import { Banner } from "../../components/Banner/Banner";
import { Footer } from "../../components/Footer/Footer";
import { MoreInfos } from "../../components/MoreInfos/MoreInfos";
import { useValidation } from "../../hooks/useCepValidation";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { formatMoney } from "../../utils/formatMoney";
import { PaymentInput } from "./components/PaymentInput/PaymentInput";
import { InputsAddress } from "./components/PaymentInput/InputsAddress";
import { formatCep } from "../../utils/formatCepUser";

export const CheckoutPage = () => {
  const [selectedOption, setSelectedOption] = useState("payment-1");
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
    infoAdd: ""
  });

  const items = useSelector((state: RootState) => state.cart.items);
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);

  const { errors, validateForm } = useValidation();

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
      const cepFormatUser = formatCep(cepUser)
      console.log(cepFormatUser)
      if (cepFormatUser.length === 8 && /^\d+$/.test(cepUser)) {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cepFormatUser = formatCep(cepUser)

    if (validateForm(address, cepFormatUser)) {
      const placeOrder = {
        ...address,
        cep: cepFormatUser,
        payment: selectedOption,
        totalAmount: totalAmount
      }
      localStorage.setItem("placeOrder", JSON.stringify(placeOrder))
      
    } else {
      console.log("Formulário contém erros:", errors);
    }
  };

  return (
    <section>
      <NavBar />
      <Banner path="Checkout" />
      <form
        className="flex ml-[174px] mr-[125px] mt-[125px] mb-28 justify-center"
        onSubmit={handleSubmit}
      >
        <div className="w-1/2 flex flex-col items-center">
          <InputsAddress
            errors={errors}
            handleInputChange={handleInputChange}
            address={address}
            cepUser={cepUser}
            setCepUser={setCepUser}
            cepSearch={cepSearch}
          />
        </div>
        <div className="w-1/2">
          <div className="">
            <div className="flex justify-between mb-8">
              <h3 className="font-semibold text-2xl text-start mr-8">
                Product
              </h3>
              <h3 className="font-semibold text-2xl text-end">Subtotal</h3>
            </div>
            <div className="flex flex-col justify-between mb-8">
              {items.map((item) => (
                <div className="flex justify-between">
                  <p className="text-gray-350 my-3">
                    {item.name}{" "}
                    <span className="text-black">x {item.quantity}</span>
                  </p>

                  <p className="font-light">
                    {formatMoney(
                      item.discountedPrice ? item.discountedPrice : item.price
                    )}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex justify-between mb-6">
              <p>Subtotal</p>
              <p className="font-light">{formatMoney(totalAmount)}</p>
            </div>
            <div className="flex justify-between mb-6">
              <p>Total</p>
              <p className="text-2xl text-yellow-550 font-bold">
                {formatMoney(totalAmount)}
              </p>
            </div>
          </div>

          <hr />
          <div>
            <PaymentInput
              setSelectedOption={setSelectedOption}
              selectedOption={selectedOption}
            />
            <div className="flex justify-center mx-3">
              <button
                type="submit"
                className="w-80 h-16 rounded-[15px] text-xl border-[1px] border-black btn-gray"
              >
                Place order
              </button>
            </div>
          </div>
        </div>
      </form>
      <MoreInfos />
      <Footer />
    </section>
  );
};
