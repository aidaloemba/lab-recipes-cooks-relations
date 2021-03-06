const express = require("express");
const app = express();
const Cook = require("../../models/cook");

app.get("/cooks/create", (req, res) => {
    res.render("cooks/create");
})

app.post("/cooks/create", (req, res) => {
    let newCook = req.body;
    Cook
        .create(newCook)
        .then((cook) => {
            res.redirect("list");
        })
        .catch((err) => {
            console.log("err", err);
        })
})

module.exports = app;