const { default: Axios } = require("axios");
const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const axios = require("axios");

/**
 * GET route template
 */
router.get("/", (req, res) => {
  const url = `https://trefle.io/api/v1/plants?token=${process.env.REACT_APP_TREFLE_API_KEY}`;
  axios
    .get(url)
    .then((response) => {
      res.send(response.data);
      console.log(response);
    })
    .catch((error) => {
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post("/", (req, res) => {});

module.exports = router;
