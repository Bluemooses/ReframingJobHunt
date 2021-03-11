import { Heading, Text } from "@chakra-ui/layout";
import React from "react";
import { Container, Divider, List, ListItem } from "semantic-ui-react";

const WhyPage = () => (
  <Container textAlign="center">
    <Divider />
    <Text fontFamily="Bookman">
      <Heading>Plant Minnesota</Heading>
      <List>
        <ListItem>
          Plant Minnesota was created to bring awareness to the untapped
          resources of urban/suburban land which can be utilized to promote self
          reliance.
        </ListItem>
      </List>
      <Divider />
      <Heading>What We Do</Heading>
      <List>
        <ListItem>
          Compile data from multiple sources on ideal planting times,
          theoretical yields of planted crops, days to harvest, and useful
          tidbits to get the most out of your harvest.
        </ListItem>
      </List>
    </Text>
  </Container>
);

export default WhyPage;
