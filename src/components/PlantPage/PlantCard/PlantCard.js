import React, { useState } from "react";
import { Image } from "@chakra-ui/react";

const PlantCard = ({ plant }) => {
  console.log(plant);

  return (
    <div>
      <p>{plant.common_name}</p>
      <Image src={plant.image_url} alt="Unavailable" />
      <p>Family: {plant.family}</p>
      <p>Genus: {plant.genus}</p>
    </div>
  );
};

export default PlantCard;
