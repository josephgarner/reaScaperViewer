import { json } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import type { V2_MetaFunction } from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";
import { Flex, Center, Heading } from "@chakra-ui/react"
import { getBuyListings } from "~/server/service/buyListingsService"
import { ListingTable } from "~/components/listingTable"
import { getSearchParams } from "~/utils/getSearchParams"
import { matchSorter } from "match-sorter"

export const meta: V2_MetaFunction = () => {
  return [{ title: "REA Scraper | For Sale" }]
}

export default function Sale() {
  const { listings, starredListings } = useLoaderData()

  return (
    <Flex direction="column" padding={"24px"}>
      {starredListings.length > 0 && (
        <Center flexDirection="column" marginBottom="10" alignItems="inherit">
          <Heading as="h2" size="lg">
            Listings of Interest
          </Heading>
          <ListingTable listings={starredListings} />
        </Center>
      )}
      <Center flexDirection="column" alignItems="inherit">
        <Heading as="h2" size="lg">
          Listings For Sale
        </Heading>
        <ListingTable listings={listings} />
      </Center>
    </Flex>
  )
}

export async function loader({ request }: LoaderArgs) {
  const buyListings = await getBuyListings()

  if (!buyListings || buyListings.length === 0) {
    throw json(
      { message: "could not find any nodes" },
      {
        status: 404,
        statusText: "Buy Listing could not be found",
      }
    )
  }

  const search = getSearchParams(request)
  if (search.suburbs.length === 0 && !search.addressQuery) {
    const starredListings = buyListings.filter((e) => e.starred === true)
    const listings = buyListings.filter((e) => e.starred === false)
    return { listings, starredListings }
  }

  const suburbFilter = buyListings.filter((e) => search.suburbs.includes(e.suburb))

  if (!search.addressQuery) return { listings: suburbFilter, starredListings: [] }

  const addressFilter = matchSorter(suburbFilter, search.addressQuery, {
    keys: ["short_address", "full_address"],
  })
  return { listings: addressFilter, starredListings: [] }
}