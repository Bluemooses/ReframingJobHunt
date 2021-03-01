const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */
router.get("/", (req, res) => {
  const url = `https://trefle.io/api/v1/plants?token=${process.env.REACT_APP_TREFLE_API_KEY}`;
});

/**
 * POST route template
 */
router.post("/", (req, res) => {});

module.exports = router;
