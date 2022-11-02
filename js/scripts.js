// Business Logic for player
function Player(name) {
	this.name = name;
	this.score = 0;
	this.turn = 0;
}

Player.prototype.diceRoll = function() {
	let roll = Math.floor(Math.random() * (6) + 1);
	if (roll !== 1) {
		this.score += roll;
		this.turn += 1;
	} else if (roll === 1) {
		this.score = 0;
		this.turn = 0;
	};
	return this.score;
}
