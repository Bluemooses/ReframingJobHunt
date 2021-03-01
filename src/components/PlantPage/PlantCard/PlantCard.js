import React, { useState } from "react";

const PlantCard = ({ plant }) => {
  console.log(plant);
  return (
    <div>
      <p>{plant.common_name}</p>
    </div>
  );
};

export default PlantCard;
