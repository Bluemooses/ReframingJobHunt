const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

/**
 * GET route template
 */
router.get("/", (req, res) => {});

/**
 * POST Vegetable - This data comes from AdminPage/AddVegetableForm
 */
router.post("/", rejectUnauthenticated, (req, res) => {
  console.log(req.body);
});

module.exports = router;
