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
import { ViewIcon } from "@chakra-ui/icons";
import type { ListingData } from "~/types";
import type { Key } from "react";
import { format } from "date-fns";
import { toCurrency } from "~/utils/formatCurrency";
import { NumOfBathrooms, NumOfBeds, NumOfCars } from "./homeDetailTags";

type Props = {
  listings: ListingData[];
};

export const ListingTable = ({ listings }: Props) => {
  const isSold = listings.find((e) => e.badge == "Sold") !== undefined;

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
            {!isSold && <Th>Listed Range</Th>}
            <Th>{isSold ? "Sold Date" : "Updated Date"}</Th>
            <Th>View Listing</Th>
          </Tr>
        </Thead>
        <Tbody>
          {listings.map((e: ListingData) => (
            <Tr key={e.id as Key}>
              <Td>
                <Text isTruncated maxW="170" height={5}>
                  {e.short_address}
                </Text>
              </Td>
              <Td>
                <Tag size="lg" marginLeft={2} colorScheme="orange">
                  {e.suburb}
                </Tag>
              </Td>
              <Td>
                <NumOfBeds beds={e.bedrooms} />
                <NumOfCars cars={e.parking_spaces} />
                <NumOfBathrooms baths={e.bathrooms} />
              </Td>
              <Td>{toCurrency(e.price)}</Td>
              {!isSold && (
                <Td>
                  <Text isTruncated maxW="150" height={5}>
                    {e.price_text}
                  </Text>
                </Td>
              )}
              <Td>{isSold ? e.sold_date : format(new Date(e.scraped_date).setHours(-10), "MMM do yyyy")}</Td>
              <Td>
                <Button
                  as={Link}
                  leftIcon={<ViewIcon />}
                  colorScheme="blue"
                  variant="solid"
                  href={e.url}
                  isExternal
                  style={{ textDecoration: "none" }}
                >
                  View
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
