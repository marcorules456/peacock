// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Reservation app data
//==============================================================
var reservation = [
	{
		routeName: "andrew",
		name: "Andrew",
		phoneNumber: 6024590373,
		email: "andrew_presnell@hotmail.com",
		id: 0
	},
	{
		routeName: "laura",
		name: "Laura",
		phoneNumber: 2318729379,
		email: "l.unaeze5@gmail.com",
		id: 1
	},
	{
		routeName: "marco",
		name: "Marco",
		phoneNumber: 9998887777,
		email: "marco_dude@hotmail.com",
		id: 2
	},
	{
		routeName: "bethany",
		name: "Bethany",
		phoneNumber: 8080800808,
		email: "bethany@email.com",
		id: 3
	}
];



//Creating Routes
//==============================================================

<<<<<<< Updated upstream
//Assets
app.use(express.static(__dirname + "/assets/"));

=======
//Get Static files
app.use(express.static(__dirname + "/assets/"));
>>>>>>> Stashed changes

//GET request
app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "index.html"));
});


app.get("/reservation", function(req, res) {
	res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/tablelist", function(req, res) {
	res.sendFile(path.join(__dirname, "tablelist.html"));
});





//POST request





//to start the server and make it listen for a GET/POST command
app.listen(PORT, function() {
  	console.log("App listening on PORT " + PORT);
});


app.listen();