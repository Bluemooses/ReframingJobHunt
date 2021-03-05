import React from "react";
import {
  Box,
  Text,
  Heading,
  Accordion,
  AccordionItem,
  AccordionIcon,
  GridItem,
  AccordionPanel,
  AccordionButton,
} from "@chakra-ui/react";
import { Card, Image, List, ListItem } from "semantic-ui-react";

const VegetableCard = ({ vegetable }) => {
  // Here's what vegetable gives us access to
  const { url } = vegetable;
  const { name } = vegetable;
  const { description } = vegetable;
  const { days_to_harvest } = vegetable;
  const { seed_spacing_area_sq_in } = vegetable;
  const { yield_per_sq_ft } = vegetable;
  const { date_to_plant } = vegetable;
  const date_to_display = new Date(date_to_plant);

  return (
    <Card>
      <Card.Content>
        <Heading>{name}</Heading>
        <Image src={url} />
        <Accordion allowToggle>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1">Vegetable Details</Box>
              <AccordionIcon />
              <AccordionPanel pb="4">
                Seed Spacing Area: {seed_spacing_area_sq_in} sq. in.
              </AccordionPanel>
              <AccordionPanel pb="4">
                Days to Harvest: {days_to_harvest}
              </AccordionPanel>
              <AccordionPanel pb="4">
                When to Plant: {date_to_plant}
              </AccordionPanel>
            </AccordionButton>
          </AccordionItem>
        </Accordion>
        {/* <Box color="whitesmoke" bg="green.700" p="6">
        <Box fontWeight="bold">{name}</Box>
        <Box size="sm">{description}</Box>
      </Box> */}
      </Card.Content>
    </Card>
  );
};

export default VegetableCard;
