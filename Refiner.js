// Constructor
function Refiner(level) {
	this.level = level || 0; // If not set, item level starts at 0
	this.max = 4; // Max item level
	this.chances = [
		{ value: .50, droppable: false }, // 0 - 1
		{ value: .33, droppable: true },  // 1 - 2
		{ value: .33, droppable: true },  // 2 - 3
		{ value: .33, droppable: true}	  // 3 - 4
	]
}

// Simple method to reset item level manually or on failure
Refiner.prototype.reset = function () {
	this.level = 0;
}

// Refine method
Refiner.prototype.refine = function () {

	// If item's level isn't the max level
	if (this.level < this.max) {
		var rnd = Math.random(); // Creating a randon float number to compare with the chance value

		// Increase item's level if the random number is lower than the current level upgrade chance
		if (rnd < this.chances[this.level].value)
			this.level++;

		// Checking if the current item level can drop on failure
		else if (this.chances[this.level].droppable)
			this.reset();

		console.log(this.level, rnd, this.chances[this.level].value);

		return;
	}

	console.log('Max level');
}