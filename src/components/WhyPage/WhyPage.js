import { Heading, Text } from "@chakra-ui/layout";
import React from "react";
import { Container, Divider } from "semantic-ui-react";

const WhyPage = () => (
  <Container>
    <Container textAlign="center">
      <Heading>Plant Minnesota: Why?</Heading>
    </Container>
    <Container textAlign="left">
      <Text fontFamily="Bookman">
        Plant Minnesota was created to bring awareness to the untapped resources
        of urban/suburban land which can be utilized to promote self reliance,
        and reduce reliance on corporate farms.
      </Text>
    </Container>
  </Container>
);

export default WhyPage;
