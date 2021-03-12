import React from "react";
import "../VegetablePage/VegetablePage.scss";
import { useSelector } from "react-redux";
import { Card } from "semantic-ui-react";
import VegetableCard from "./VegetableCard/VegetableCard";

function VegetablePage() {
  // We can just use the useSelector hook to select only vegetables from our redux store.
  const vegetables = useSelector((state) => state.vegetables);
  return (
    <div className="VegetableCardGroupWrapper">
      {/* // Just pass the vegetable to the child VegetableCard */}
      <Card.Group className="VegetableCardGroup" stackable itemsPerRow={4}>
        {vegetables.map((vegetable) => {
          return <VegetableCard key={vegetable.id} vegetable={vegetable} />;
        })}
      </Card.Group>
    </div>
  );
}

export default VegetablePage;
