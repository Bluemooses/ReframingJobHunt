import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import VegetableCard from "./VegetableCard/VegetableCard";
const VegetablePage = () => {
  // We can just use the useSelector hook to select only vegetables from our redux store.
  const vegetables = useSelector((state) => state.vegetables);
  return (
    <SimpleGrid minChildWidth="120px" spacing="40px">
      {vegetables.map((vegetable) => {
        return <VegetableCard key={vegetable.id} vegetable={vegetable} />;
      })}
    </SimpleGrid>
  );
};

export default VegetablePage;
