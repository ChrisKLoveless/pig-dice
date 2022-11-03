# Pig-Dice Game

#### Contributors  _**Chris Loveless**_ _**Ryan Krueger**_ _**Anahi Ruiz Robles**_

#### A website to play pig-dice

## Technologies Used

* _HTML_
* _JavaScript_
* _CSS_
* _Bootstrap_

## Description

This is a game to play pig-dice with a friend.

## Setup/Installation Requirements

1. Access project through github repository (github.com/ChrisKLoveless)
2. Clone repository 
3. Open index.html file in browser

## Known Bugs
* When 1 is rolled next player message does not display.

## Testing:
```
Describe: Player();

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
```
## License
Copyright (c) 2022 Chris Loveless, Ryan Krueger, Anahi Ruiz Robles
_[MIT](https://choosealicense.com/licenses/mit/)_
