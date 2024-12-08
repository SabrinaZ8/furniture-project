export const formatMoney = (value: number, currency: string = "USD", locale: string = "en-US") => {
    return value.toLocaleString(locale, {
      style: "currency",
      currency,
    });
  };
  