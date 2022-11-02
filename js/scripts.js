// Business Logic for player
function Player(name, score) {
	this.name = name;
	this.score = score;
}

Player.prototype.setScore = function (num) {
	if (num >= 2 && num <= 6) {
		this.score += num;
	} else if (num === 1) {
		this.score = 0;
	};
};
