import { json } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import type { V2_MetaFunction } from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";
import { Flex, Center } from "@chakra-ui/react";
import { ListingTable } from "~/components/listingTable";
import { getSoldListings } from "~/server/service/soldListingsService";
import { getSearchParams } from "~/utils/getSearchParams";
import { matchSorter } from "match-sorter";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Sold() {
  const listings = useLoaderData();

  return (
    <Flex direction="column" padding={"24px"}>
      <Center>
        <ListingTable listings={listings} />
      </Center>
    </Flex>
  );
}

export async function loader({ request }: LoaderArgs) {
  const soldListings = await getSoldListings();

  if (!soldListings || soldListings.length === 0) {
    throw json(
      { message: "could not find any nodes" },
      {
        status: 404,
        statusText: "Buy Listing could not be found",
      }
    );
  }

  const search = getSearchParams(request);
  if (search.suburbs.length === 0 && !search.addressQuery) return soldListings;

  const suburbFilter = soldListings.filter((e) => search.suburbs.includes(e.suburb));

  if (!search.addressQuery) return suburbFilter;

  const addressFilter = matchSorter(suburbFilter, search.addressQuery, {
    keys: ["short_address", "full_address"],
  });
  return addressFilter;
}