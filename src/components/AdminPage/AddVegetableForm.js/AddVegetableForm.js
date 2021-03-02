import React from "react";
//Style imports
import {
  Stack,
  Input,
  Button,
  InputLeftAddon,
  InputGroup,
} from "@chakra-ui/react";
import "./AddVegetableForm.scss";

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

  //Handles the call to our API to create a new vegetable entry in db
  const AddPlant = () => {};

  return (
    <div className="AddVegetableFormWrapper">
      {/* This Stack gives us some nice spacing between our input fields */}
      <Stack spacing={2}>
        <Input focusBorderColor="green.600" placeholder="Name" type="text" />
        <Input
          focusBorderColor="green.600"
          placeholder="Description"
          type="text"
        />
        <Input
          focusBorderColor="green.600"
          placeholder="Seed spacing in square inches"
          type="number"
        />
        <InputGroup>
          <InputLeftAddon>Date to Plant</InputLeftAddon>
          <Input
            focusBorderColor="green.600"
            placeholder="Date to plant"
            type="date"
          />
        </InputGroup>
        <Input
          focusBorderColor="green.600"
          placeholder="Days until harvest"
          type="number"
        />
        <Input
          focusBorderColor="green.600"
          placeholder="Yield in lbs. per square ft."
          type="number"
        />
        <Button type="submit" onClick={AddPlant()}>
          Add Plant
        </Button>
      </Stack>
    </div>
  );
};

export default AddVegetableForm;
