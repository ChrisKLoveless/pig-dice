// Business Logic for player
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
	const userName = document.getElementById("playerName").value;
	let newPlayer = new Player(userName);
	document.getElementById("diceRoll").classList.remove("invisible");
	document.querySelector("p#player1").innerText = newPlayer.name;
  document.querySelector("p#player1Score").innerText = newPlayer.score;
  document.querySelector("p#player1Turns").innerText = newPlayer.turn;
}

function handleRoll(event) {

}

window.addEventListener("load", function () {
	document.querySelector("form#newPlayer").addEventListener("submit", handleSubmit);
	document.getElementById("diceRoll").addEventListener("click", handleRoll);
});