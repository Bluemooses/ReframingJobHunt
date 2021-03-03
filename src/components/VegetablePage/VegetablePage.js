import React from "react";
import { useSelector } from "react-redux";
import { Card } from "semantic-ui-react";
import VegetableCard from "./VegetableCard/VegetableCard";
const VegetablePage = () => {
  // We can just use the useSelector hook to select only vegetables from our redux store.
  const vegetables = useSelector((state) => state.vegetables);
  return (
    <Card.Group>
      {vegetables.map((vegetable) => {
        return <VegetableCard key={vegetable.id} vegetable={vegetable} />;
      })}
    </Card.Group>
  );
};

export default VegetablePage;
