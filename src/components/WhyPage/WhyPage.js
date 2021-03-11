import { Heading, Text } from "@chakra-ui/layout";
import React from "react";
import { Container, Divider, List, ListItem } from "semantic-ui-react";

const WhyPage = () => (
  <Container textAlign="center">
    <Heading>Plant Minnesota</Heading>
    <Text fontFamily="Bookman">
      Plant Minnesota was created to bring awareness to the untapped resources
      of urban/suburban land which can be utilized to promote self reliance.
    </Text>
    <Divider />
    <Heading>What We Do</Heading>
    <Text fontFamily="Bookman">
      <List>
        <ListItem>
          Compile data on ideal planting times, theoretical yields of planted
          crops, days to harvest, and useful tidbits to get the most out of your
          plants.
        </ListItem>
        <ListItem>Use our data to plan garden beds.</ListItem>
      </List>
    </Text>
  </Container>
);

export default WhyPage;
