
var player;
var player2;

//Pig Game Logic
function PigGame() {
	this.players = [];
} 

PigGame.prototype.addPlayer = function (player) {
	this.players[player.name] = player;
}
// Player Logic
function Player(name) {
	this.name = name;
	this.totalScore = 0;
	this.turn = 1;
	this.tempScore = 0;
}

Player.prototype.diceRoll = function () {
	let roll = Math.floor(Math.random() * (6) + 1);
	if (roll !== 1) {
		this.tempScore += roll;
		this.turn += 1;
	} else if (roll === 1) {
		this.tempScore = 0;
		this.turn += 1;
	};

}

Player.prototype.hold = function () {
	this.totalScore += this.tempScore;
	this.tempScore = 0;
};

// UI Logic
let game = new PigGame();

function handleSubmit(event) {
	event.preventDefault();
	userName = document.getElementById("playerName").value;
	userName2 = document.getElementById("playerName2").value;
	player = new Player(userName);
	player2 = new Player(userName2);
	game.addPlayer(player);
	game.addPlayer(player2);
	document.getElementById("diceRoll").classList.remove("invisible");
	document.getElementById("hold").classList.remove("invisible");
	document.querySelector("p#player1").innerText = player.name;
	document.querySelector("p#player1Score").innerText = player.totalScore;
	document.querySelector("p#player1Turns").innerText = player.turn;
	document.querySelector("p#player2").innerText = player2.name;
	document.querySelector("p#player2Score").innerText = player2.totalScore;
	document.querySelector("p#player2Turns").innerText = player2.turn;
}

function handleRoll(player) {
	player.diceRoll();
	player2.diceRoll();
	console.log(player.tempScore);
	console.log(player.totalScore);
	console.log(player2.tempScore);
	console.log(player2.totalScore);
	document.querySelector("p#player1Score").innerText = player.totalScore;
	document.querySelector("p#player1Turns").innerText = player.turn;
	document.querySelector("p#player2Score").innerText = player2.totalScore;
	document.querySelector("p#player2Turns").innerText = player2.turn;
}

function handleHold (player) {
	player.hold();
	player2.hold();
	document.querySelector("p#player1Score").innerText = player.totalScore;
	document.querySelector("p#player2Score").innerText = player2.totalScore;
}

window.addEventListener("load", function () {
	document.querySelector("form#newPlayer").addEventListener("submit", handleSubmit);
	document.getElementById("diceRoll").addEventListener("click", function () {
		handleRoll(player);
		document.getElementById("hold").addEventListener('click', function () {
			handleHold(player);
		})
	});
});