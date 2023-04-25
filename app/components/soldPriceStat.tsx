import { Stat, StatNumber, StatHelpText, StatArrow } from "@chakra-ui/react";
import { toCurrency } from "~/utils/formatCurrency";

export const SoldPriceStat = ({ listedPrice, soldPrice }: { listedPrice?: number; soldPrice?: number }) => {
  if (!listedPrice || !soldPrice) {
    return (
      <Stat marginTop={4}>
        <StatNumber>{toCurrency(soldPrice)}</StatNumber>
        <StatHelpText marginTop={1}>No listed price found</StatHelpText>
      </Stat>
    );
  }

  const priceDiff = soldPrice - listedPrice;
  const isNeg = priceDiff < 0;

  return (
    <Stat marginTop={4}>
      <StatNumber>{toCurrency(soldPrice)}</StatNumber>
      {listedPrice ? (
        <StatHelpText marginTop={1}>
          <StatArrow type={isNeg ? "decrease" : "increase"} />
          {toCurrency(priceDiff)}
        </StatHelpText>
      ) : (
        <StatHelpText marginTop={1}>No listed price found</StatHelpText>
      )}
    </Stat>
  );
};
