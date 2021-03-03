import React from "react";
import {
  Box,
  Image,
  Text,
  Heading,
  Accordion,
  AccordionItem,
  AccordionIcon,
  GridItem,
  AccordionPanel,
  AccordionButton,
} from "@chakra-ui/react";

const VegetableCard = ({ vegetable }) => {
  // Here's what vegetable gives us access to
  const { url } = vegetable;
  const { name } = vegetable;
  const { description } = vegetable;
  return (
    <GridItem>
      <Image objectFit="cover" src={url}></Image>
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1">Details</Box>
            <AccordionIcon />
            <AccordionPanel pb="4">{description}</AccordionPanel>
          </AccordionButton>
        </AccordionItem>
      </Accordion>
      {/* <Box color="whitesmoke" bg="green.700" p="6">
        <Box fontWeight="bold">{name}</Box>
        <Box size="sm">{description}</Box>
      </Box> */}
    </GridItem>
  );
};

export default VegetableCard;
