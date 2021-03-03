import React from "react";
import { Grid } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import VegetableCard from "./VegetableCard/VegetableCard";
const VegetablePage = () => {
  // We can just use the useSelector hook to select only vegetables from our redux store.
  const vegetables = useSelector((state) => state.vegetables);
  return (
    <Grid templateColumns="repeat(4, 1fr)">
      {vegetables.map((vegetable) => {
        return <VegetableCard key={vegetable.id} vegetable={vegetable} />;
      })}
    </Grid>
  );
};

export default VegetablePage;
