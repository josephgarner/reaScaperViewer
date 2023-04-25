import { NavLink, Form, useMatches } from "@remix-run/react";
import {
  Flex,
  Spacer,
  Box,
  Heading,
  Button,
  ButtonGroup,
  Input,
  Checkbox,
  FormControl,
  IconButton,
} from "@chakra-ui/react";
import { BsFillMoonFill } from "react-icons/bs";

function MainNavigation() {
  const path = useMatches();
  console.log(path[1].pathname);
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2" padding="2" marginRight={2}>
      <Box p="2">
        <Heading size="xl">REA Scraper</Heading>
      </Box>
      <Spacer />
      <Box minW={400}>
        <Form method="get" action={path[1].pathname}>
          <Flex justifyContent={"space-evenly"}>
            <FormControl width={"fit-content"}>
              <Checkbox name="pointCook" size="md" colorScheme="blue" defaultChecked>
                Point Cook
              </Checkbox>
            </FormControl>
            <FormControl width={"fit-content"}>
              <Checkbox name="altonaMeadows" size="md" colorScheme="blue" defaultChecked>
                Altona Meadows
              </Checkbox>
            </FormControl>
            <FormControl width={"fit-content"}>
              <Checkbox name="seabrook" size="md" colorScheme="blue" defaultChecked>
                Seabrook
              </Checkbox>
            </FormControl>
          </Flex>
          <Flex marginTop={1}>
            <Input type="text" name="addressQuery" placeholder="Address Lookup" />
            <Button marginLeft={1} colorScheme="blue" type="submit">
              Search
            </Button>
          </Flex>
        </Form>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">
        <IconButton colorScheme="blue" aria-label="Search database" icon={<BsFillMoonFill />} />
        <Button
          as={NavLink}
          to="/"
          colorScheme="gray"
          _activeLink={{
            background: "var(--chakra-colors-blue-500)",
            color: "white",
          }}
        >
          Matched
        </Button>
        <Button
          as={NavLink}
          to="/sale"
          colorScheme="gray"
          _activeLink={{
            background: "var(--chakra-colors-blue-500)",
            color: "white",
          }}
        >
          For Sale
        </Button>
        <Button
          as={NavLink}
          to="/sold"
          colorScheme="gray"
          _activeLink={{
            background: "var(--chakra-colors-blue-500)",
            color: "white",
          }}
        >
          Sold
        </Button>
      </ButtonGroup>
    </Flex>
  );
}

export default MainNavigation;
