roundResult = (p, c) => {
  if (p === c) return "draw";
  else if ((p === "R" && c === "S") || (p === "S" && c === "P") || (p === "P" && c === "R"))
    return "win";
  return "lose";
};

printResult = (p, c) => {
  if (p < 5 && c < 5) scoreDiv.innerHTML += `<br>player:${p} computer:${c}`;
  else {
    if (p > c) document.getElementById('buttons').innerHTML = "Game Over, You win";
    else document.getElementById('buttons').innerHTML = "Game over, you lose";
  }
};

let player = 0;
let computer = 0;
let buttons = document.querySelectorAll("button");
let scoreDiv = document.getElementById("score");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let playerSelection = button.innerHTML;
    let computerSelection = ["R", "P", "S"][Math.floor(Math.random() * 3)];
    scoreDiv.innerHTML = "Player: " + playerSelection + "\t Computer: " + computerSelection;

    let result = roundResult(playerSelection, computerSelection);
    if (result === "win") player++;
    else if (result === "lose") computer++;

    printResult(player, computer);
  });
});
