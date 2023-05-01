import { HiOutlineStar, HiStar } from "react-icons/hi"
import { IconButton } from "@chakra-ui/react"
import { Form } from "@remix-run/react"

type Props = {
  id: string
  starred: boolean
  route: string
}

export const StarredButton = ({ id, starred = false, route }: Props) => {
  return (
    <Form reloadDocument method="post" action="/star">
      <input type="hidden" name="listingID" value={id} />
      <input type="hidden" name="starred" value={`${!starred}`} />
      <input type="hidden" name="route" value={route} />
      <IconButton
        type="submit"
        variant={starred ? "solid" : "outline"}
        colorScheme={starred ? "yellow" : "blue"}
        aria-label="disabled-star-button"
        icon={starred ? <HiStar /> : <HiOutlineStar />}
      />
    </Form>
  )
}
