const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

const PORT = process.env.PORT || 3000;

// ==================================================
// Reservoir Business Data
// ==================================================

app.post("/getReservoirBusinessData", async (req, res) => {

    try {

        const response = await axios.post(
            "https://indiawris.gov.in/getReservoirBusinessData",
            req.body,
            {
                timeout: 60000,
                headers: {
                    "Content-Type": "application/json",
                    "User-Agent": "Mozilla/5.0"
                }
            }
        );

        res.json(response.data);

    } catch (err) {

        console.error(err.message);

        res.status(500).json({
            error: err.message
        });

    }

});

// ==================================================
// Reservoir Date Chart
// ==================================================

app.post("/getReservoirDateChartData", async (req, res) => {

    try {

        const response = await axios.post(
            "https://indiawris.gov.in/getReservoirDateChartData",
            req.body,
            {
                timeout: 60000,
                headers: {
                    "Content-Type": "application/json",
                    "User-Agent": "Mozilla/5.0"
                }
            }
        );

        res.json(response.data);

    } catch (err) {

        console.error(err.message);

        res.status(500).json({
            error: err.message
        });

    }

});

// ==================================================
// Reservoir State Chart
// ==================================================

app.post("/getReservoirStateChartData", async (req, res) => {

    try {

        const response = await axios.post(
            "https://indiawris.gov.in/getReservoirStateChartData",
            req.body,
            {
                timeout: 60000,
                headers: {
                    "Content-Type": "application/json",
                    "User-Agent": "Mozilla/5.0"
                }
            }
        );

        res.json(response.data);

    } catch (err) {

        console.error(err.message);

        res.status(500).json({
            error: err.message
        });

    }

});

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});