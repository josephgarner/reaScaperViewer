import {
  Button,
  Link,
  Card,
  CardBody,
  CardFooter,
  Container,
  Heading,
  Tag,
  Flex,
  WrapItem,
  Wrap,
  Spacer,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
import type { Matched } from "~/types";
import type { Key } from "react";
import { toCurrency } from "~/utils/formatCurrency";
import { NumOfBathrooms, NumOfBeds, NumOfCars } from "./homeDetailTags";
import { SoldPriceStat } from "./soldPriceStat";
import { TextWthLabel } from "./textWthLabel";

type Props = {
  matching: Matched[];
};

export const MatchedTiles = ({ matching }: Props) => {
  return (
    <Container minW={800} maxW={1920}>
      <Wrap justify="center">
        {matching.map((e: Matched) => {
          const { sold, buy } = e;
          return (
            <WrapItem key={sold.id as Key}>
              <Card margin={2}>
                <CardBody padding={3}>
                  <Flex justifyContent={"space-between"} padding={2}>
                    <Heading size="md">{sold.short_address}</Heading>
                    <Tag size="lg" marginLeft={2} colorScheme="cyan">
                      {sold.suburb}
                    </Tag>
                  </Flex>
                  <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Flex direction="column">
                      <Flex direction="row">
                        <NumOfBeds beds={buy.bedrooms} />
                        <NumOfCars cars={buy.parking_spaces} />
                        <NumOfBathrooms baths={buy.bathrooms} />
                      </Flex>
                      <TextWthLabel label="Listed Pice" content={toCurrency(buy.price)} />
                      <TextWthLabel label="Listed Range" content={buy.price_text} />
                      <TextWthLabel label="Sold Date" content={sold.sold_date} />
                    </Flex>
                    <Spacer />
                    <SoldPriceStat listedPrice={buy.price} soldPrice={sold.price} />
                  </Flex>
                </CardBody>
                <CardFooter padding={3} flexDirection="row-reverse">
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
                </CardFooter>
              </Card>
            </WrapItem>
          );
        })}
      </Wrap>
    </Container>
  );
  // return (
  //   <TableContainer>
  //     <Table variant="simple" size="sm">
  //       <TableCaption>REA data scraped from search api</TableCaption>
  //       <Thead>
  //         <Tr>
  //           <Th>Suburb</Th>
  //           <Th>Address</Th>
  //           <Th>Badge</Th>
  //           <Th>Listed/Sold Price</Th>
  //           <Th>Price Range</Th>
  //           <Th>Sold Date</Th>
  //           <Th>View Listing</Th>
  //         </Tr>
  //       </Thead>

  //       {matching.map((e: Matched) => {
  //         const { sold, buy } = e;
  //         return (
  //           <Tbody key={sold.id as Key}>
  //             <Tr>
  //               <Td>{sold.suburb}</Td>
  //               <Td>{sold.short_address}</Td>
  //               <Td>{sold.badge}</Td>
  //               <Td>{toCurrency(sold.price)}</Td>
  //               <Td>
  //                 <SaleDiffTag salePrice={sold.price} listedPrice={buy.price} />
  //               </Td>
  //               <Td>{format(new Date(sold.sold_date!!), "MMM do yyyy")}</Td>
  //               <Td>
  // <Button
  //   as={Link}
  //   leftIcon={<ViewIcon />}
  //   colorScheme="blue"
  //   variant="solid"
  //   href={sold.url}
  //   isExternal
  //   style={{ textDecoration: "none" }}
  // >
  //   View
  // </Button>
  //               </Td>
  //             </Tr>
  //             <Tr>
  //               <Td>{buy.suburb}</Td>
  //               <Td>{buy.short_address}</Td>
  //               <Td>{buy.badge}</Td>
  //               <Td>{toCurrency(buy.price)}</Td>
  //               <Td>{buy.price_text}</Td>
  //               <Td></Td>
  //               <Td></Td>
  //             </Tr>
  //           </Tbody>
  //         );
  //       })}
  //     </Table>
  //   </TableContainer>
  // );
};
