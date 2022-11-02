// Business Logic for player
function Player(name, score) {
	this.name = name;
	this.score = score;
}

Player.prototype.addScore = function (number) {
	this.score += number;
};

Player.prototype.resetScore = function(num) {
	if (num === 1){
		this.score = 0;
	};
};