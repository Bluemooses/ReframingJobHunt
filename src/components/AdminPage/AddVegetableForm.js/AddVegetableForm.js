import React, { useState } from "react";
//Style imports
import {
  Stack,
  Input,
  Button,
  InputLeftAddon,
  InputGroup,
  Heading,
} from "@chakra-ui/react";
import "./AddVegetableForm.scss";

const AddVegetableForm = () => {
  // This object matches a database entry in the vegetable table [search_count, id, and url] omitted
  const [plantToAdd, setPlantToAdd] = useState({
    name: "",
    description: "",
    seed_spacing_area_sq_in: "",
    date_to_plant: "",
    days_to_harvest: "",
    yield_per_sq_ft: "",
  });

  //Handles the call to our API to create a new vegetable entry in db
  const AddPlant = () => {
    console.log(plantToAdd);
  };

  return (
    <div className="AddVegetableFormWrapper">
      <Heading>Add a vegetable to the cloud...</Heading>
      {/* This Stack gives us some nice spacing between our input fields */}
      <Stack spacing={2}>
        <Input
          onChange={(e) => (plantToAdd.name = e.target.value)}
          focusBorderColor="green.600"
          placeholder="Name"
          type="text"
        />
        <Input
          onChange={(e) => (plantToAdd.description = e.target.value)}
          focusBorderColor="green.600"
          placeholder="Description"
          type="text"
        />
        <Input
          onChange={(e) =>
            (plantToAdd.seed_spacing_area_sq_in = e.target.value)
          }
          focusBorderColor="green.600"
          placeholder="Seed spacing in square inches"
          type="number"
        />
        <InputGroup>
          <InputLeftAddon>Date to Plant</InputLeftAddon>
          <Input
            onChange={(e) => (plantToAdd.date_to_plant = e.target.value)}
            focusBorderColor="green.600"
            placeholder="Date to plant"
            type="date"
          />
        </InputGroup>
        <Input
          onChange={(e) => (plantToAdd.days_to_harvest = e.target.value)}
          focusBorderColor="green.600"
          placeholder="Days until harvest"
          type="number"
        />
        <Input
          onChange={(e) => (plantToAdd.yield_per_sq_ft = e.target.value)}
          focusBorderColor="green.600"
          placeholder="Yield in lbs. per square ft."
          type="number"
        />
        <Button type="submit" onClick={AddPlant}>
          Add Plant
        </Button>
      </Stack>
    </div>
  );
};

export default AddVegetableForm;
