// Business Logic for player
var player;
var player2;

function Player(name) {
	this.name = name;
	this.totalScore = 0;
	this.turn = 0;
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
	return this.tempScore;
}

Player.prototype.hold = function () {
	this.totalScore = this.tempScore;
	this.tempScore = 0;
};

// UI Logic
function handleSubmit(event) {
	event.preventDefault();
	userName = document.getElementById("playerName").value;
	userName2 = document.getElementById("playerName2").value;
	player = new Player(userName);
	player2 = new Player(userName2);
	document.getElementById("diceRoll").classList.remove("invisible");
	document.getElementById("hold").classList.remove("invisible");
	document.querySelector("p#player1").innerText = player.name;
	document.querySelector("p#player1Score").innerText = player.score;
	document.querySelector("p#player1Turns").innerText = player.turn;
	document.querySelector("p#player2").innerText = player2.name;
	document.querySelector("p#player2Score").innerText = player2.score;
	document.querySelector("p#player2Turns").innerText = player2.turn;
}

function handleRoll(player) {
	player.diceRoll();
	player2.diceRoll();
	console.log(player.score);
	document.querySelector("p#player1Score").innerText = player.score;
	document.querySelector("p#player1Turns").innerText = player.turn;
	document.querySelector("p#player2Score").innerText = player2.score;
	document.querySelector("p#player2Turns").innerText = player2.turn;
}


window.addEventListener("load", function () {
	document.querySelector("form#newPlayer").addEventListener("submit", handleSubmit);
	document.getElementById("diceRoll").addEventListener("click", function () {
		handleRoll(player);
	});
});