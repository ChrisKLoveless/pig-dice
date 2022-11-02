Describe: Player();

Test: "It should create a player object with a name and score properties"
Code: function Player(name, score){
    this.name = name;
    this.score = score;
}
Expected Output: let test = new Player("test", 0)
        test;
        Player {name: "test", score: 0}

Describe: Player.prototype.addScore = function ();

Test: "It will add current players score"
Code: function addScore(number) {
	this.score += number;
}
Expected Output: let test = new Player("test", 0);
	test.addScore(5);
	test;
  Player {name: "test", score: 5}


Test:
Code:
Expected Output:

Test:
Code:
Expected Output: