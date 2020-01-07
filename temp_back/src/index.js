const express = require("express");

const cuisines = require("../temp/cuisines");
const meals = require("../temp/meals");

const app = express();

app.get("/cuisines", function(request, response) {
	response.header("Access-Control-Allow-Origin", "*");
	response.send(cuisines);
});

app.get("/meals", function(request, response) {
	response.header("Access-Control-Allow-Origin", "*");
	response.send(meals);
});

app.listen(3000, () => {
	console.log("Connection established on port 3000");
});
