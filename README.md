Describe: Player();

Test: "It should create a player object with a name and score properties"
Code: function Player(name, score){
    this.name = name;
    this.score = score;
}
Expected Output: let test = new Player("test", 0)
        test;
        Player {name: "test", score: 0}

Describe: Player.prototype.addScore = function (num);

Test: "It will add current players score"
Code: Player.prototype.addScore = function(numb) {
	this.score += number;
}
Expected Output: let test = new Player("test", 0);
	test.addScore(5);
	test;
  Player {name: "test", score: 5}

Describe: Player.prototype.resetScore();

Test: "If the player rolls a 1, reset score to 0"
Code: Player.prototype.resetScore = function(num) {
	if (num === 1){
		this.score = 0;
	};
};
Expected Output: test{score: 0}

Describe: Player.prototype.setScore = function (num);

Test: "It will add current players score, or reset their total to 0 based on their number"
Code: Player.prototype.setScore = function (num) {
	if (num >= 2 && num <= 6) {
		this.score += num;
	} else if (num === 1) {
		this.score = 0;
	};
};
Expected Output: test{score:0}