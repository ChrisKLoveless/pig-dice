```Describe: Player();

Test: "It should create a player object with a name and score properties"
Code: function Player(name, score){
    this.name = name;
    this.score = score;
}
Expected Output: let test = new Player("test", 0)
        test;
        Player {name: "test", score: 0}

Describe: Player.prototype.hold = function ();

Test: "It should keep the players score for their turn and reset to previous turn"
Code: Player.prototype.hold = function () {
	
}
Expected Output:

Describe: Player.prototype.diceRoll = function();

Test: "It will generate a random number with a fixed max"
Code: Player.prototype.diceRoll = function() {
	let roll = Math.floor(Math.random() * (6) + 1)
	this.score += roll;
}
Expected Output: test.diceRoll()
	test{name: 'test', score 5}

Test:
Code:
Expected Output:
```