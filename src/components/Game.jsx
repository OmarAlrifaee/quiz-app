import { data } from "./data";
import { useEffect, useState } from "react";
import "./style/game.css";
import Answers from "./Answers";
import EndGame from "./EndGame";
import Timer from "./Timer";

export default function Game() {
  // states
  const [currentIndex, setCurrentIndex] = useState(0),
    [score, setScore] = useState(0),
    [timer, setTimer] = useState(15),
    [active, setActive] = useState(false),
    [endGame, setEndGame] = useState(false),
    [noClick, setNoClick] = useState(false);

  // set the timer
  useEffect(() => {
    const intervel = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);
    if (timer === 0) {
      hundleMainSets();
      if (currentIndex + 1 < data.length) setTimeout(hundleNext, 1000);
      else setTimeout(hundleEnd, 1000);
    }
    // clean up
    if (endGame) clearInterval(intervel);
    return () => clearInterval(intervel);
  }, [currentIndex, timer, endGame, score]);

  // functions
  const hundleClick = (isTrue) => {
    hundleMainSets();
    isTrue && setScore((prevScore) => prevScore + 1);
    // inside a setTimeOut to make the user see the true answer
    if (currentIndex + 1 < data.length) setTimeout(hundleNext, 1000);
    else setTimeout(hundleEnd, 1000);
  };

  const hundleEnd = () => {
    // End the game
    setEndGame(true);
    // stop clicking
    setNoClick(true);
    // set active to true
    setActive(true);
  };
  const hundleNext = () => {
    // increment the currentIndex to change the qusition
    setCurrentIndex((prevIndex) => prevIndex + 1);
    // start clicking
    setNoClick(false);
    // restart the active
    setActive(false);
  };

  const hundleMainSets = () => {
    // restart the timer
    setTimer(15);
    // show the right and the false answers
    setActive(true);
    // stop user from clicking
    setNoClick(true);
  };

  const hundleRestart = () => {
    // restart all the states
    setCurrentIndex(0);
    setScore(0);
    setTimer(15);
    setActive(false);
    setEndGame(false);
    setNoClick(false);
  };

  // for the true or false class's
  const isActive = (isTrue) => {
    if (active) return isTrue ? "true" : "false";
  };

  return (
    <div className="Game">
      {!endGame && (
        <Answers
          data={data}
          currentIndex={currentIndex}
          isActive={isActive}
          noClick={noClick}
          hundleClick={hundleClick}
        />
      )}
      {endGame && (
        <EndGame
          score={score}
          data={data}
          hundleRestart={hundleRestart}
        />
      )}
      <Timer timer={timer} />
      <div className="score p-2 mx-auto text-center text-white bg-success text-capitalize fw-bold rounded">
        Your score: {score} <br /> current qusition: {currentIndex + 1} from{" "}
        {data.length}
      </div>
    </div>
  );
}
