import React, { useState } from "react";
// Dependencies
import axios from "axios";
import { useDispatch } from "react-redux";
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

const AddVegetableForm = (props) => {
  const dispatch = useDispatch();
  // This object matches a database entry in the vegetable table [search_count, id, and url] omitted
  const [plantToAdd, setPlantToAdd] = useState({
    name: "",
    description: "",
    seed_spacing_area_sq_in: "",
    date_to_plant: "",
    days_to_harvest: "",
    yield_per_sq_ft: "",
    url: "",
  });
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [isPostError, setPostError] = useState(false);

  const generateCloudinarySignature = (callback, params_to_sign) => {
    axios
      .post("/api/cloudinary", { data: params_to_sign })
      .then((signature) => {
        callback(signature.data);
      })
      .catch((xhr, status, error) => {
        console.log(
          "xhr --> %s  status --> %s  error --> %s ",
          xhr,
          status,
          error
        );
      });
  };
  //instantiate our widget prior to DOM load for faster perceived modal open.
  const cloudinaryWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: "notema",
      uploadPreset: "signed_preset_default",
      uploadSignature: generateCloudinarySignature,
      uploadSignatureTimestamp: Date.now(),
      authenticated: true,
      apiKey: "596391692614194",
      sources: ["local"],
      multiple: false,
      defaultSource: "local",
      singleUploadAutoClose: false,
      showUploadMoreButton: false,
    },
    (error, response) => {
      if (error) {
        console.log(error);
      } else {
        cloudinaryCallback(response);
      }
    }
  );
  /**
   * callback handler for Cloudinary Widget API
   * https://cloudinary.com/documentation/upload_widget
   */
  const cloudinaryCallback = (response) => {
    console.log(response);
    if (response && response.event === "success") {
      plantToAdd.url = response.info.secure_url;
      setUploadSuccess(true);
    } else {
      return;
    }
  };

  const handleCloudinaryButton = () => {
    console.log("widget?", cloudinaryWidget);
    if (!cloudinaryWidget.isShowing()) {
      cloudinaryWidget.open();
    }
  };

  // This function finds all of our input values and sets them to 0
  const handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
  };

  //Handles the call to our API to create a new vegetable entry in db
  const addVegetable = (event) => {
    event.preventDefault();
    axios
      .post("/api/vegetables", plantToAdd)
      .then((response) => {
        if (String(response).includes("success")) {
          setPostError(false);
          handleReset();
          console.log("success");
        }
      })
      .catch((error) => {
        if (String(error).includes("500")) {
          setPostError(true);
          console.log("Post error");
        }
      });

    plantToAdd.name = "";
    plantToAdd.description = "";
    plantToAdd.seed_spacing_area_sq_in = "";
    plantToAdd.date_to_plant = "";
    plantToAdd.days_to_harvest = "";
    plantToAdd.yield_per_sq_ft = "";
    plantToAdd.url = "";
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
          placeholder="Seed spacing in sq. in."
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
          placeholder="Yield in lbs. per sq. ft."
          type="number"
        />
        <Button onClick={handleCloudinaryButton}>Image Upload</Button>

        <Button type="submit" onClick={addVegetable}>
          Add Plant
        </Button>
      </Stack>
    </div>
  );
};

export default AddVegetableForm;
