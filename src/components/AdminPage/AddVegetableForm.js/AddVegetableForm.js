import React from "react";
import { Stack, Input, Button, Label } from "@chakra-ui/react";

const AddVegetableForm = () => {
  // This object matches a database entry in the vegetable table [search_count, id, and url] omitted
  const plantToAdd = {
    name: "",
    description: "",
    seed_spacing_area_sq_in: "",
    date_to_plant: "",
    days_to_harvest: "",
    yield_per_sq_ft: "",
    search_count: "",
  };
  const AddPlant = () => {};

  return (
    <Stack spacing={4}>
      <Input placeholder="Name" type="text" />
      <Input placeholder="Description" type="text" />
      <Input placeholder="Seed spacing in square inches" type="number" />
      <Input placeholder="Date to plant" type="date" />
      <Input placeholder="Days until harvest" type="number" />
      <Input placeholder="Yield per square ft." type="number" />
      <Button
        onClick={() => {
          AddPlant;
        }}
      ></Button>
    </Stack>
  );
};

export default AddVegetableForm;
