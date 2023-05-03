import { redirect } from "@remix-run/node";
import type { ActionArgs } from "@remix-run/node";
import { setStarredStatus } from "~/server/service/setStarredService";

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const id = formData.get("listingID")!.toString();
  const starred = formData.get("starred")!.toString();
  const route = formData.get("route")!.toString();
  await setStarredStatus(id, starred === "true");
  return redirect(route);
}
