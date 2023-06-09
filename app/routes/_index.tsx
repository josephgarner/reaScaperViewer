import { json, redirect } from "@remix-run/node";
import type { LoaderArgs, ActionArgs } from "@remix-run/node";
import type { V2_MetaFunction } from "@remix-run/react";
import { useNavigation } from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";
import { Flex, Center, Heading, CircularProgress } from "@chakra-ui/react";
import { getMatchedListings } from "~/server/service/matchListingService";
import { MatchedTable } from "~/components/matchedTable";
import type { Matched } from "~/types";
import { getSearchParams } from "~/utils/getSearchParams";
import { matchSorter } from "match-sorter";

export const meta: V2_MetaFunction = () => {
  return [{ title: "REA Scraper | Matched" }];
};

export default function Index() {
  const matched = useLoaderData();

  const { state } = useNavigation();
  const isLoading = state !== "idle";

  if (isLoading) {
    return (
      <Flex direction="column" padding={"24px"}>
        <Center marginTop="16">
          <CircularProgress isIndeterminate color="green.300" />
        </Center>
      </Flex>
    );
  }

  return (
    <Flex direction="column" padding={"24px"}>
      <Center>
        <Center flexDirection="column" alignItems="inherit">
          <Heading as="h2" size="lg">
            Matched Listings
          </Heading>
          <MatchedTable matching={matched} />
        </Center>
      </Center>
    </Flex>
  );
}

export async function loader({ request }: LoaderArgs): Promise<Matched[]> {
  const matched = await getMatchedListings();
  if (!matched || matched.length === 0) {
    throw json(
      { message: "could not find any nodes" },
      {
        status: 404,
        statusText: "Matched Listing could not be found",
      }
    );
  }

  const search = getSearchParams(request);
  if (search.suburbs.length === 0 && !search.addressQuery) return matched;

  const suburbFilter = matched.filter((e) => search.suburbs.includes(e.sold.suburb));

  if (!search.addressQuery) return suburbFilter;

  const addressFilter = matchSorter(suburbFilter, search.addressQuery, {
    keys: ["sold.short_address", "sold.full_address"],
  });
  return addressFilter;
}

export async function action({ request }: ActionArgs) {
  console.log(request);
  return redirect(`/`);
}
