function Player(name, score) {
	this.name = name;
	this.score = score;
}

Player.prototype.addScore = function (number) {
	this.score += number;
};