import { useState } from "react";
import Welcome from "./components/Welcome";
import NumberBoard from "./components/NumberBoard";
import End from "./components/End";

export default function App() {
  const [status, setStatus] = useState("welcome"); // Game status: welcome, start, end
  const [slideNumber, setSlideNumber] = useState(1); // Slide Numbers to guess the number
  const [guessNumber, setGuessNumber] = useState(0); // Guess Number for computer
  const [slide, setSlide] = useState(1); // Slide number from 1 to 7

  function gameStart() {
    setStatus("start");
  }

  function nextSlide() {
    if (slideNumber === 64) {
      setStatus("end");
      return;
    } else {
      setSlideNumber((prevSlideNumber) => prevSlideNumber * 2);
      setSlide((prevSlide) => prevSlide + 1);
    }
  }

  function addToGuessNumber(num: number) {
    setGuessNumber((prevGuessNumber) => prevGuessNumber + num);
    console.log(guessNumber);
  }

  function resetGame() {
    setStatus("welcome");
    setSlideNumber(1);
    setGuessNumber(0);
    setSlide(1);
  }

  return (
    <main className="mx-auto sm:w-3/4 lg:w-2/3">
      {status === "welcome" && <Welcome gameStart={gameStart} />}
      {status === "start" && (
        <NumberBoard
          slideNumber={slideNumber}
          nextSlide={nextSlide}
          addToGuessNumber={addToGuessNumber}
          slide={slide}
        />
      )}
      {status === "end" && (
        <End guessNumber={guessNumber} resetGame={resetGame} />
      )}
    </main>
  );
}
