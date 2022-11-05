import * as React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import InfoModal from "./components/InfoModal";
import EndModal from "./components/EndModal";
import Entry from "./components/Entry";
import StatsModal from "./components/StatsModal";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";

function App({ data, thisJournleDay, target, guesses, guessFunction, numGamesCompleted, numWins, streak, distribution }) {
  var won = false;
  for (let i = 0; i < guesses.length; i++) {
    if (guesses[i].name === target.name) {
      won = true;
      break;
    }
  }

  const over = won || guesses.length >= 6;

  return <div className="App">
    <div className="flex">
      <p className="titleText">Terraria Enemies Journle #{thisJournleDay}</p><InfoModal></InfoModal>
      <StatsModal distribution={distribution} streak={streak}></StatsModal>
      <IconButton href="https://github.com/avocadocapybara2/terraria-enemies-journle"><GitHubIcon color="primary" sx={{width: 48, height: 48}}></GitHubIcon></IconButton>
    </div>
    <SearchBar placeholder="Enter an enemy name..." data={data} guessFunction={guessFunction} disabled={over}></SearchBar>
    <div className="guessHistory" id="guessHistory">
      {guesses.map((enemy) => {
        return (
          <div key={enemy.name}>
          <Entry enemy={enemy} target={target}></Entry>
          </div>
        )
      })}
    </div>
    {over && <EndModal thisJournleDay={thisJournleDay} target={target} won={won} guesses={guesses}></EndModal>}
  </div>;
}

export default App;