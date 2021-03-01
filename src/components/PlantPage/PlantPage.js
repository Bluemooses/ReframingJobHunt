import React, { useEffect, useState } from "react";
import axios from "axios";
import PlantCard from "./PlantCard/PlantCard";
import PlantSearch from "./PlantSearch/PlantSearch";
const PlantPage = () => {
  const [plantData, setPlantData] = useState();

  useEffect(() => {
    const fetchPlants = async () => {
      const response = await axios.get("/api/plants");
      setPlantData(response.data.data);
    };
    fetchPlants();
  }, []);

  return (
    <div>
      <h1>
        Interact with{" "}
        <a href="https://trefle.io" target="_blank">
          trefle.io
        </a>
        , a global plant database.
      </h1>
      <PlantSearch setPlantData={setPlantData} />
      {plantData &&
        plantData.map((plant) => {
          return <PlantCard key={plant.id} plant={plant} />;
        })}
    </div>
  );
};

export default PlantPage;
