import React, { useState } from "react";
import { Input, Button } from "@chakra-ui/react";
import axios from "axios";

const PlantSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchPlants = () => {
    console.log("search hit:", searchTerm);
  };
  return (
    <div>
      <Input
        width="50%"
        placeholder="Search through the Trefle database"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <Button onClick={searchPlants}>Search</Button>
    </div>
  );
};

export default PlantSearch;
