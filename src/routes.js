const express = require('express');
const routes = express.Router();
const xlsx = require('xlsx');

const file = xlsx.readFile("./data/Data.xlsx");

const names = file.Sheets["Sheet1"]

const browser = xlsx.utils.sheet_to_json(names);

routes.get('/', (req, res) => {
    return res.json(browser);
})

module.exports = routes;