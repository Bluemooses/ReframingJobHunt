import React from "react";
import "./VegetableCard.scss";
import {
  Heading,
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  AccordionButton,
} from "@chakra-ui/react";
import {
  Card,
  Image,
  List,
  ListItem,
  Label,
  CardContent,
} from "semantic-ui-react";
import moment from "moment";

//hello

function VegetableCard({ vegetable }) {
  // Here's what vegetable gives us access to
  const { url } = vegetable;
  const { name } = vegetable;
  const { description } = vegetable;
  const { days_to_harvest } = vegetable;
  const { seed_spacing_area_sq_in } = vegetable;
  const { yield_per_sq_ft } = vegetable;
  const { date_to_plant } = vegetable;
  // This uses moment to give us a nicely formatted Month/Day to plant vegetables
  const date_to_display = moment(date_to_plant).format("MMMM Do");

  return (
    <Card>
      <Card.Content>
        <Heading>{name}</Heading>
        <Image className="VegetableCardImage" src={url} size="huge" rounded />
        <Accordion allowToggle>
          <AccordionItem>
            <AccordionButton>
              <AccordionIcon />
              Vegetable Details
            </AccordionButton>

            <AccordionPanel pb="1">
              <List>
                <ListItem>
                  <Label color="black">Seed Spacing Area:</Label>{" "}
                  {seed_spacing_area_sq_in} sq. in.
                </ListItem>
                <ListItem>
                  <Label color="black">Days to Harvest:</Label>{" "}
                  {days_to_harvest}
                </ListItem>
                <ListItem>
                  <Label color="black">When to Plant:</Label> {date_to_display}
                </ListItem>
                <ListItem>
                  <Label color="black">Theoretical Yield:</Label>{" "}
                  {yield_per_sq_ft} lbs/sq ft.
                </ListItem>
              </List>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Card.Content>
    </Card>
  );
}

export default VegetableCard;
