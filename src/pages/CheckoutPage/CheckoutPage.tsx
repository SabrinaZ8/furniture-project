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
import { toast } from "react-toastify";

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
      setAddress({
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
      })
      setCepUser("")
      setCepSearch(null)

      toast.success("Request sent successfully")
      
    } else {
      console.log(errors);
    }
  };

  return (
    <section>
      <NavBar />
      <Banner path="Checkout" />
      <form
        className="flex flex-col mt-[125px] mb-28 ml-5 mr-5 justify-center lg:flex-row 2xl:ml-[174px] 2xl:mr-[125px]"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-center lg:w-1/2">
          <InputsAddress
            errors={errors}
            handleInputChange={handleInputChange}
            address={address}
            cepUser={cepUser}
            setCepUser={setCepUser}
            cepSearch={cepSearch}
          />
        </div>
        <div className="lg:w-1/2 mt-28">
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
                      item.discountedPrice ? item.discountedPrice * item.quantity: item.price * item.quantity
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
