import { useState } from "react";
import { FormContact } from "../types/types";

export const useValidateFormContact = () => {
  const [errors, setErrors] = useState<{ [key in keyof FormContact]?: string }>({});

  const validateForm = (formContact: FormContact) => {
    const newErrors: { [key in keyof FormContact]?: string } = {};

    // Name validation
    if (!formContact.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (/\d/.test(formContact.name)) {
      newErrors.name = "Name cannot contain numbers.";
    } else if (formContact.name.length < 3) {
      newErrors.name = "Name must have at least 3 characters.";
    }

    // Email validation
    if (!formContact.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,}$/.test(formContact.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    // Message validation
    if (!formContact.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formContact.message.length < 5) {
      newErrors.message = "Message must have at least 5 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return { errors, validateForm };
};
