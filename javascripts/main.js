var draw = 0;
var userWin = 0;
var compWin = 0;
var userResult = "";
var compResult = "";
var winMessage = ['Winning!', 'Win Win Win', 'Got em!', 'Oooooooh yeahhhh', 'Too easy', 'Got Lucky', 'You are the best!', 'USA! USA!'];
var loseMessage = ['Looooser', 'Not today Junior!', 'Larry wins!', 'You lost dawg', 'nope', 'try again', 'you suck'];
var drawMessage = ['Tied', 'Draw', 'Twinners'];

function cleare() {
  draw = 0;
  userWin = 0;
  compWin = 0;
  userResult = "";
  compResult = "";
  showPicks();
  showWins();
}

function userPick(pick) {
  userResult = pick;
  compPicks();
}

function compPicks() {
  var arr = ["rock", "paper", "scissors"];
  compResult = arr[Math.floor(Math.random()*arr.length)];
  compare();
}

function showPicks() {
  document.getElementById("showUserPick").innerHTML = userResult;
  document.getElementById("showCompPick").innerHTML = compResult;
}
function showWins() {
  document.getElementById("userWins").innerHTML = userWin;
  document.getElementById("draw").innerHTML = draw;
  document.getElementById("compWins").innerHTML = compWin;
}

function compare() {
  showPicks();
  if (userResult == compResult) {
    draw += 1;
    determineToast(drawMessage);
  } else if (userResult == "rock" && compResult == "paper") {
    compWin += 1;
    determineToast(loseMessage);
  } else if (userResult == "paper" && compResult == "rock") {
    userWin += 1;
    determineToast(winMessage);
  } else if (userResult == "paper" && compResult == "scissors") {
    compWin += 1;
    determineToast(loseMessage);
  } else if (userResult == "scissors" && compResult == "paper") {
    userWin += 1;
    determineToast(winMessage);
  } else if (userResult == "scissors" && compResult == "rock") {
    compWin += 1;
    determineToast(loseMessage);
  } else if (userResult == "rock" && compResult == "scissors") {
    userWin += 1;
    determineToast(winMessage)
  }
  showWins();
}

function determineToast(array) {
  message = array[Math.floor(Math.random()*array.length)];
  Materialize.toast(message, 1500, 'rounded red')
}
