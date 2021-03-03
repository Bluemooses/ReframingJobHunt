const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

/**
 * GET route template
 */
router.get("/", (req, res) => {
  getVegetablesQuery = `SELECT * FROM "vegetables" ORDER BY "name" ASC`;
  pool
    .query(getVegetablesQuery)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error in vegetable get", error);
      res.sendStatus(500);
    });
});

/**
 * POST Vegetable - This data comes from AdminPage/AddVegetableForm
 */
router.post("/", rejectUnauthenticated, (req, res) => {
  // Destructuring let's us pull out the parts of the object into their own variable
  const { name } = req.body;
  const { description } = req.body;
  const { seed_spacing_area_sq_in } = req.body;
  const { date_to_plant } = req.body;
  const { days_to_harvest } = req.body;
  const { yield_per_sq_ft } = req.body;
  const { url } = req.body;

  vegetableToAddQuery = `INSERT INTO "vegetables" ("name", "description", "seed_spacing_area_sq_in", "date_to_plant", "days_to_harvest", "yield_per_sq_ft", "url") VALUES ($1, $2, $3, $4, $5, $6, $7);`;

  pool
    .query(vegetableToAddQuery, [
      name,
      description,
      seed_spacing_area_sq_in,
      date_to_plant,
      days_to_harvest,
      yield_per_sq_ft,
      url,
    ])
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log("error in Vegetable post", err);
      res.sendStatus(500);
    });
});

module.exports = router;
