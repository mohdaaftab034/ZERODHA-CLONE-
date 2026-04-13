const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");

router.get("/allHoldings", auth, (req, res) => {
  res.json([
    {
      name: "TCS",
      qty: 10,
      avg: 3200,
      price: 3350,
      net: "+5%",
      day: "+1%",
    },
  ]);
});

module.exports = router;
