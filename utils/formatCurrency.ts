export const formatCurrency = (value: number) => {
  const output = new Intl.NumberFormat("en-NG", {
    maximumSignificantDigits: 3,
    style: "currency",
    currency: "NGN",
  }).format(value);

  return output;
};

export default formatCurrency;
