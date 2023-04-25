import { Tag, TagLabel, TagRightIcon } from "@chakra-ui/react";
import { FaBed, FaCarSide, FaBath } from "react-icons/fa";

export const NumOfBeds = ({ beds }: { beds?: number }) => {
  return (
    <Tag size="lg" colorScheme={beds ? "green" : "orange"} margin={1}>
      <TagLabel>{beds ? beds : "n/a"}</TagLabel>
      <TagRightIcon as={FaBed} />
    </Tag>
  );
};

export const NumOfCars = ({ cars }: { cars?: number }) => {
  return (
    <Tag size="lg" colorScheme={cars ? "green" : "orange"} margin={1}>
      <TagLabel>{cars ? cars : "n/a"}</TagLabel>
      <TagRightIcon as={FaCarSide} />
    </Tag>
  );
};

export const NumOfBathrooms = ({ baths }: { baths?: number }) => {
  return (
    <Tag size="lg" colorScheme={baths ? "green" : "orange"} margin={1}>
      <TagLabel>{baths ? baths : "n/a"}</TagLabel>
      <TagRightIcon as={FaBath} />
    </Tag>
  );
};
