import { Flex, Text } from "@chakra-ui/react";

export const TextWthLabel = ({ label, content }: { label: string; content?: string }) => {
  return (
    <Flex direction={"column"} marginBottom={1}>
      <Text fontWeight={700}>{label}:</Text>
      <Text>{content ? content : "n/a"}</Text>
    </Flex>
  );
};
