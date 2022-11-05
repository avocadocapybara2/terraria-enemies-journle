import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import TerrariaEnemies from "./terraria_enemies.json"
var seedrandom = require('seedrandom');

function yellowCheck(value, targetValue) {
  const valueSubparts = value.split(",").map(x => x.trim())
  const targetValueSubparts = targetValue.split(",").map(x => x.trim())
  for (let i = 0; i < valueSubparts.length; i++) {
    for (let j = 0; j < targetValueSubparts.length; j++) {
      if (valueSubparts[i] === targetValueSubparts[j]) {
        return true;
      }
    }
  }
  return false;
}

function getJournleDay() {
  var startDateBase = new Date("2022-11-4");
  var offset = startDateBase.getTimezoneOffset() * 60000;
  var startDate = new Date(startDateBase.getTime() + offset);
  var now = new Date();
  return 1 + Math.floor((now.getTime() - startDate.getTime()) / 86400000);
}

var lastJournleDay = parseInt(localStorage.getItem("lastJournleDay"))
var thisJournleDay = getJournleDay();
var guesses;
if (thisJournleDay !== lastJournleDay) {
  guesses = [];
  localStorage.removeItem("guesses");
  localStorage.setItem("lastJournleDay", thisJournleDay);
}
else {
  guesses = JSON.parse(localStorage.getItem("guesses"));
  if (guesses === null) {
    guesses = [];
  }
}

var rng = seedrandom(0);
var lastRandom = Math.floor(rng() * (TerrariaEnemies.length + 1));
var thisRandom;
for (let i = 0; i < getJournleDay(); i++) {
  thisRandom = Math.floor(rng() * (TerrariaEnemies.length + 1));
  while (thisRandom === lastRandom) {
    lastRandom = thisRandom;
    thisRandom = Math.floor(rng() * (TerrariaEnemies.length + 1));
  }
}

var target = TerrariaEnemies[thisRandom];

var distribution;
var streak = localStorage.getItem("streak");

if (streak === null) {
  streak = 0;
} else { 
  streak = parseInt(streak);
}

if (localStorage.getItem("distribution") === null) {
  distribution = [0, 0, 0, 0, 0, 0, 0];
} else {
  distribution = JSON.parse(localStorage.getItem("distribution"));
}

TerrariaEnemies.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <App data={TerrariaEnemies} thisJournleDay={thisJournleDay} target={target} guesses={guesses} guessFunction={guess}
      distribution={distribution} streak={streak}>
      </App>;
  </React.StrictMode>
);

function guess(entry) {
  var index = -1;
  for (let i = 0; i < TerrariaEnemies.length; i++) {
    if (entry.name === TerrariaEnemies[i].name) {
      index = i;
    }
  }
  guesses = [...guesses, entry];
  TerrariaEnemies.splice(index, 1);

  localStorage.setItem("guesses", JSON.stringify(guesses));

  var won = false;

  for (let i = 0; i < guesses.length; i++) {
    if (guesses[i].name === target.name) {
      won = true;
      break;
    }
  }

  if (won) {
    distribution[guesses.length - 1] += 1;
    streak += 1;

    localStorage.setItem("distribution", JSON.stringify(distribution));
    localStorage.setItem("streak", streak);
  } else if (guesses.length >= 6) {
    distribution[6] += 1;

    localStorage.setItem("distribution", JSON.stringify(distribution));
  }

  root.render(
    <React.StrictMode>
      <App data={TerrariaEnemies} thisJournleDay={thisJournleDay} target={target} guesses={guesses} guessFunction={guess}
      distribution={distribution} streak={streak}>
      </App>;
    </React.StrictMode>
  );
}

export { yellowCheck }