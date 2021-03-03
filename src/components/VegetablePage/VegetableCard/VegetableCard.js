import React from "react";
import { Box, Image, Text, Heading } from "@chakra-ui/react";

const VegetableCard = ({ vegetable }) => {
  // Here's what vegetable gives us access to
  const { url } = vegetable;
  const { name } = vegetable;
  const { description } = vegetable;
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={url}></Image>
      <Heading size="sm">{name}</Heading>
      <Text size="sm">{description}</Text>
    </Box>
  );
};

export default VegetableCard;
