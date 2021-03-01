import React, { useEffect, useState } from "react";
import axios from "axios";
const PlantPage = () => {
  const [plantData, setPlantData] = useState();

  useEffect(() => {
    const fetchPlants = async () => {
      const response = await axios.get("/api/plants");
      setPlantData(response.data.data);
      console.log(response.data.data);
    };
    fetchPlants();
  }, []);

  return (
    <div>
      <h1>Plant Page Placeholder</h1>
      {plantData &&
        plantData.map((plant) => {
          return (
            <div id={plant.id}>
              <p id={plant.id}>{plant.common_name}</p>
            </div>
          );
        })}
    </div>
  );
};

export default PlantPage;
