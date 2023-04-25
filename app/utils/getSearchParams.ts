import type { SearchParams } from "~/types";

export const getSearchParams = (request: Request): SearchParams => {
  const url = new URL(request.url);
  const search = new URLSearchParams(url.search);

  const result: SearchParams = {
    suburbs: [],
    addressQuery: undefined,
  };

  const params = [
    { key: "pointCook", value: "Point Cook" },
    { key: "altonaMeadows", value: "Altona Meadows" },
    { key: "seabrook", value: "Seabrook" },
  ];
  params.forEach((e) => {
    if (search.get(e.key) === "") {
      result.suburbs.push(e.value);
    }
  });
  if (search.get("addressQuery") && search.get("addressQuery")?.length! > 0) {
    result.addressQuery = search.get("addressQuery")!!;
  }

  return result;
};
