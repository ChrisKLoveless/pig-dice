
let player1 = new Player(true);
let player2 = new Player(false);
let player;
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
	this.diceScore = 0;
	this.turn = true;
}

Player.prototype.diceRoll = function () {
	let player = whosTurn();
	let roll = Math.floor(Math.random() * (6) + 1);
	if (roll !== 1) {
		player.diceScore += roll;
	} else if (roll === 1) {
		player.diceScore = 0;
		changeTurn();
		document.querySelector("h2#next").classList.remove("invisible");
	};
}

Player.prototype.hold = function () {
	let player = whosTurn();
	player.totalScore += player.diceScore;
	player.diceScore = 0;
	changeTurn();
};

function whosTurn() {
	let player;
	if (player1.turn === true) {
		player = player1;
	} else if (player2.turn === true) {
		player = player2;
	}
	return player;
}

function changeTurn() {
	if(player1.turn === true) {
		player1.turn = false;
		player2.turn = true;
	} else {
		player1.turn = true;
		player2.turn = false;
	}
}

// UI Logic
let game = new PigGame();

function handleSubmit(event) {
	event.preventDefault();
	userName = document.getElementById("playerName").value;
	userName2 = document.getElementById("playerName2").value;
	player1 = new Player(userName);
	player2 = new Player(userName2);
	game.addPlayer(player1);
	game.addPlayer(player2);
	document.getElementById("diceRoll").classList.remove("invisible");
	document.getElementById("hold").classList.remove("invisible");
	document.querySelector("p#player1").innerText = player1.name;
	document.querySelector("p#player1Score").innerText = player1.totalScore;
	document.querySelector("p#player2").innerText = player2.name;
	document.querySelector("p#player2Score").innerText = player2.totalScore;
}

function handleRoll(player) {
	player1.diceRoll();
	console.log("player1 diceScore:",player1.diceScore);
	console.log("player1 totalScore:",player1.totalScore);
	console.log("player2 diceScore:", player2.diceScore);
	console.log("player2 totalScore:",player2.totalScore);
	document.querySelector("p#player1Score").innerText = player1.totalScore;
	document.querySelector("p#player2Score").innerText = player2.totalScore;
	document.querySelector("p#player1DiceScore").innerText = player1.diceScore;
	document.querySelector("p#player2DiceScore").innerText = player2.diceScore;
	setTimeout(() =>{
		document.querySelector("h2#next").classList.add("invisible")
},3000);
}

function handleHold (player) {
	player1.hold();
	document.querySelector("p#player1Score").innerText = player1.totalScore;
	document.querySelector("p#player2Score").innerText = player2.totalScore;
	document.querySelector("p#player1DiceScore").innerText = player1.diceScore;
	document.querySelector("p#player2DiceScore").innerText = player2.diceScore;
	document.querySelector("h2#next").classList.remove("invisible");
}

window.addEventListener("load", function () {
	document.querySelector("form#newPlayer").addEventListener("submit", handleSubmit);
	document.getElementById("diceRoll").addEventListener("click", function () {
		handleRoll(player);
		document.getElementById("hold").addEventListener('click', function () {
			handleHold(player);
		});
	});
});