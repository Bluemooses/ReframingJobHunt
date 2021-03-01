import React, { useEffect, useState } from "react";
import axios from "axios";
const PlantPage = () => {
  const [plantData, setPlantData] = useState();

  useEffect(() => {
    const fetchPlants = async () => {
      const response = await axios.get("/api/plants");
      setPlantData(response.data.data);
      console.log(response);
    };
    fetchPlants();
    console.log(plantData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Plant Page Placeholder</h1>
      {plantData &&
        plantData.map((plant) => {
          return (
            <div id={plant.id}>
              <p>{plant.common_name}</p>
            </div>
          );
        })}
    </div>
  );
};

export default PlantPage;
