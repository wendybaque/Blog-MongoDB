const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

app.use("/", (req, res ) => {
    console.log("Hey this is main url")
})

app.listen("5000", () => {
    console.log("Backend is running");
});