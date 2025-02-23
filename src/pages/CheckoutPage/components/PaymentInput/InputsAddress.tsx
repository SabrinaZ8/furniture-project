import React from "react";
import { InputsAddressProps } from "../../../../types/types";

export const InputsAddress: React.FC<InputsAddressProps> = ({
  errors,
  handleInputChange,
  address,
  cepUser,
  setCepUser,
  cepSearch,
}) => {
  return (
    <div className="w-full md:w-auto">
      <h2 className="font-semibold text-4xl text-center lg:text-start">Billing details</h2>
      <div className="my-7">
        <p className="message-error">
          {errors.firstName ? errors.firstName : ""}
        </p>
        <p className="message-error">
          {errors.lastName ? errors.lastName : ""}
        </p>
        <div className="flex ">
          <div className="flex flex-col mr-6">
            <label htmlFor="name" className=" font-medium">
              First Name
            </label>

            <input
              type="text"
              id="name"
              className="input-address-checkout input-address-checkout-hw2 "
              value={address.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="last-name" className=" font-medium">
              Last Name
            </label>
            <input
              type="text"
              id="last-name"
              className="input-address-checkout input-address-checkout-hw2"
              value={address.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col  my-7">
        <label htmlFor="company-name" className="font-medium">
          Company Name (Optional)
        </label>
        <input
          type="text"
          id="company-name"
          className="input-address-checkout input-address-checkout-hw"
          value={address.company || ""}
          onChange={(e) => handleInputChange("company", e.target.value)}
        />
      </div>
      <div className="flex flex-col my-7">
        <label htmlFor="zip-code" className=" font-medium">
          ZIP code
        </label>
        <p className="message-error">{errors.cep ? errors.cep : ""}</p>
        <input
          type="text"
          id="zip-code"
          className="input-address-checkout input-address-checkout-hw"
          value={cepUser}
          onChange={(e) => setCepUser(e.target.value)}
        />
      </div>
      <div className="flex flex-col my-7">
        <label htmlFor="country" className="font-medium">
          Country / Region
        </label>
        <p className="message-error">{errors.pais ? errors.pais : ""}</p>
        <input
          type="text"
          id="country"
          className="input-address-checkout input-address-checkout-hw"
          placeholder={errors.pais ? errors.pais : ""}
          value={address?.pais || ""}
          onChange={(e) => handleInputChange("pais", e.target.value)}
        />
      </div>
      <div className="flex flex-col  my-7">
        <label htmlFor="street-address" className="font-medium">
          Street address
        </label>
        <p className="message-error">
          {errors.logradouro ? errors.logradouro : ""}
        </p>
        <input
          type="text"
          id="street-address"
          className="input-address-checkout input-address-checkout-hw"
          value={address.logradouro}
          onChange={(e) => handleInputChange("logradouro", e.target.value)}
        />
      </div>
      <div className="flex flex-col my-7">
        <label htmlFor="city" className="font-medium">
          Town / City
        </label>
        <p className="message-error">
          {errors.localidade ? errors.localidade : ""}
        </p>
        <input
          type="text"
          id="city"
          className="input-address-checkout input-address-checkout-hw"
          value={
            cepSearch?.localidade
              ? cepSearch.localidade
              : address?.localidade || ""
          }
          onChange={(e) => handleInputChange("localidade", e.target.value)}
        />
      </div>
      <div className="flex flex-col my-7">
        <label htmlFor="province" className="font-medium">
          Province
        </label>
        <p className="message-error">{errors.uf ? errors.uf : ""}</p>
        <input
          type="text"
          id="province"
          className="input-address-checkout input-address-checkout-hw"
          value={address?.uf}
          onChange={(e) => handleInputChange("uf", e.target.value)}
        />
      </div>
      <div className="flex flex-col my-7">
        <label htmlFor="add-on-address" className="font-medium">
          Add-on address
        </label>
        <input
          type="text"
          id="add-on-address"
          className="input-address-checkout input-address-checkout-hw"
          value={address.complemento}
          onChange={(e) => handleInputChange("complemento", e.target.value)}
        />
      </div>
      <div className="flex flex-col my-7">
        <label htmlFor="email-address" className="font-medium">
          Email address
        </label>
        <p className="message-error">{errors.email ? errors.email : ""}</p>
        <input
          type="text"
          id="email-address"
          className="input-address-checkout input-address-checkout-hw"
          value={address.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
        />
      </div>
      <div className="flex flex-col  my-7">
        <input
          type="text"
          id="company-name"
          className="input-address-checkout input-address-checkout-hw"
          placeholder="Additional information"
          onChange={(e) => handleInputChange("infoAdd", e.target.value)}
        />
      </div>
    </div>
  );
};
