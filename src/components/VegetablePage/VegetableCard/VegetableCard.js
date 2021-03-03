import React from "react";
import { Box, Image, Text, Heading } from "@chakra-ui/react";

const VegetableCard = ({ vegetable }) => {
  // Here's what vegetable gives us access to
  const { url } = vegetable;
  const { name } = vegetable;
  const { description } = vegetable;
  return (
    <Box
      margin="1%"
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Image src={url}></Image>
      <Box color="whitesmoke" bg="green.700" p="6">
        <Box fontWeight="bold">{name}</Box>
        <Box size="sm">{description}</Box>
      </Box>
    </Box>
  );
};

export default VegetableCard;
