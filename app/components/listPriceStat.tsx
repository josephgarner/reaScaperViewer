import { Stat, StatLabel, StatNumber, StatHelpText, StatArrow, StatGroup, Card } from "@chakra-ui/react";

export const ListPriceStat = () => {
  return (
    <Card>
      <Stat>
        <StatLabel>Mean </StatLabel>
        <StatNumber>£0.00</StatNumber>
        <StatHelpText>Feb 12 - Feb 28</StatHelpText>
      </Stat>
    </Card>
  );
};

export async function loader() {}
