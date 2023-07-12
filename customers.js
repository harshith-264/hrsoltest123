const fs = require("fs");

// Read customers.json file
fs.readFile("customer1.json", function(err, data) {
	
	// check for errors
	if (err) throw err;
	
	// converting to JSON
	const customers = JSON.parse(data);
	
	console.log(customers); // print customers
	
});
