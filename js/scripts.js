// Business Logic for player
var player;
function Player(name) {
	this.name = name;
	this.score = 0;
	this.turn = 0;
}

Player.prototype.diceRoll = function () {
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
// UI Logic
function handleSubmit(event) {
	event.preventDefault();
	userName = document.getElementById("playerName").value;
	player = new Player(userName);
	document.getElementById("diceRoll").classList.remove("invisible");
	document.querySelector("p#player1").innerText = player.name;
	document.querySelector("p#player1Score").innerText = player.score;
	document.querySelector("p#player1Turns").innerText = player.turn;
}

function handleRoll(player) {
	player.diceRoll();
	console.log(player.score);
	document.querySelector("p#player1Score").innerText = player.score;
	document.querySelector("p#player1Turns").innerText = player.turn;
}

window.addEventListener("load", function () {
	document.querySelector("form#newPlayer").addEventListener("submit", handleSubmit);
	document.getElementById("diceRoll").addEventListener("click", function () {
		handleRoll(player);
	});
});