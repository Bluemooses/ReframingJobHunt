import React, { useState } from "react";

const PlantCard = ({ plant }) => {
  console.log(plant);

  return (
    <div>
      <p>{plant.common_name}</p>
      <img src={plant.image_url} alt="Unavailable" />
      <p>Family: {plant.family}</p>
      <p>Genus: {plant.genus}</p>
    </div>
  );
};

export default PlantCard;
