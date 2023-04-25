export const toCurrency = (value?: number) => {
  if (!value) return "No List Price";
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return formatter.format(value);
};
