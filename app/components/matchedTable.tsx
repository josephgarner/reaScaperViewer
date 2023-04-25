import { ViewIcon } from "@chakra-ui/icons";
import {
  TableContainer,
  TableCaption,
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Td,
  Button,
  Link,
  Text,
  Tag,
} from "@chakra-ui/react";
import type { Key } from "react";
import type { Matched } from "~/types";
import { toCurrency } from "~/utils/formatCurrency";
import { NumOfBathrooms, NumOfBeds, NumOfCars } from "./homeDetailTags";
import { SoldPriceStat } from "./soldPriceStat";

type Props = {
  matching: Matched[];
};

export const MatchedTable = ({ matching }: Props) => {
  return (
    <TableContainer marginTop={6} minW={800} maxW={1600}>
      <Table variant="unstyled" size="sm">
        <TableCaption>REA data scraped from search api</TableCaption>
        <Thead>
          <Tr>
            <Th>Address</Th>
            <Th>Suburb</Th>
            <Th>Key Features</Th>
            <Th>Listed Price</Th>
            <Th>Listed Range</Th>
            <Th>Sold Date</Th>
            <Th>Final Sale Price</Th>
            <Th>View Listing</Th>
          </Tr>
        </Thead>
        <Tbody>
          {matching.map((e: Matched) => {
            const { sold, buy } = e;
            return (
              <Tr key={sold.id as Key}>
                <Td>
                  <Text isTruncated maxW="170" height={5}>
                    {sold.short_address}
                  </Text>
                </Td>
                <Td>
                  <Tag size="lg" marginLeft={2} colorScheme="orange">
                    {sold.suburb}
                  </Tag>
                </Td>
                <Td>
                  <NumOfBeds beds={buy.bedrooms} />
                  <NumOfCars cars={buy.parking_spaces} />
                  <NumOfBathrooms baths={buy.bathrooms} />
                </Td>
                <Td>{toCurrency(buy.price)}</Td>
                <Td>
                  <Text isTruncated maxW="150" height={5}>
                    {buy.price_text}
                  </Text>
                </Td>
                <Td>{sold.sold_date}</Td>
                <Td>
                  <SoldPriceStat listedPrice={buy.price} soldPrice={sold.price} />
                </Td>
                <Td>
                  <Button
                    as={Link}
                    leftIcon={<ViewIcon />}
                    colorScheme="blue"
                    variant="solid"
                    href={sold.url}
                    isExternal
                    style={{ textDecoration: "none" }}
                  >
                    View
                  </Button>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
