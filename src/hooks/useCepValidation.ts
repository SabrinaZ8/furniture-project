import { useState } from "react";
import { UserInfos } from "../types/types";

export const useValidation = () => {
  const [errors, setErrors] = useState<{ [key in keyof UserInfos]?: string }>( {});

  const validateForm = (address: UserInfos, cepUser: string) => {
    const newErrors: { [key in keyof UserInfos]?: string } = {};

    //Name validation
    if (!address.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    } else if (/\d/.test(address.firstName)) {
      newErrors.firstName = "First Name cannot contain numbers";
    } else if (address.firstName.length < 3) {
      newErrors.firstName = "First Name must have at least 3 characters";
    }

    //Last name validation
    if (!address.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
    } else if (/\d/.test(address.lastName)) {
      newErrors.lastName = "Last Name cannot contain numbers";
    } else if (address.lastName.length < 3) {
      newErrors.lastName = "Last Name must have at least 3 characters";
    }
    
    //Email validation
    if (!address.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,}$/.test(address.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    //Cep validation
    if (!cepUser.trim()) {
      newErrors.cep = "Cep is required";
    } else if (!/^\d{8}$/.test(cepUser)) {
      newErrors.cep = "Valid ZIP code (8 digits) is required";
    }

    //Logradouro validation
    if (!address.logradouro.trim()) {
      newErrors.logradouro = "Street address is required";
    } else if (address.logradouro.length < 3) {
      newErrors.logradouro = "Street address must have at least 3 characters";
    }

    //Localidade validation
    if (!address.localidade.trim()) {
      newErrors.localidade = "Town/City is required";
    } else if (address.localidade.length < 3) {
      newErrors.localidade = "Town/City must have at least 3 characters";
    }

    //Province validation
    if (!address.uf.trim()) {
      newErrors.uf = "Province is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  return { errors, validateForm };
};
