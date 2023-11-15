import { useEffect } from "react";

export default function NumberBoard({
  slideNumber,
  nextSlide,
  addToGuessNumber,
  slide,
}: {
  slideNumber: number;
  nextSlide: Function;
  addToGuessNumber: Function;
  slide: number;
}) {
  let numberArray = []; // Array of numbers to be shown on per slide
  let currentNumber = slideNumber; // Current number in iteration
  let numberRange = slideNumber; // Number range to decide which numbers should added and which numbers should skip

  while (currentNumber <= 100) {
    // Numbers range to be added
    for (let j = 1; j <= numberRange; j++) {
      if (currentNumber > 100) {
        break;
      }
      numberArray.push(currentNumber);
      currentNumber++;
    }
    // Number range to be skipped
    for (let k = 1; k <= numberRange; k++) {
      if (currentNumber > 100) {
        break;
      }
      currentNumber++;
    }
  }

  useEffect(() => {
    document.documentElement.scroll(0, 0);
  });

  return (
    <div className="">
      <div>
        <h2 className="my-2 text-2xl text-center">Did you find the number?</h2>
        <div className="my-2 font-bold text-xl text-center text-neutral-500">
          Slide: {slide} / 7
        </div>
      </div>

      {/* Number grids per slide */}
      <div className="flex flex-wrap items-center justify-center list-none gap-6 mt-6 mb-12 ">
        {numberArray.map((number) => (
          <li
            id="number-magic-game__number"
            className="bg-neutral-300 text-neutral-900 inline-flex justify-center items-center w-12 aspect-square text-2xl p-2 rounded-lg font-bold animate-flip-up animate-once animate-duration-[1000ms] animate-delay-[250ms]"
            key={Math.random()}>
            {number}
          </li>
        ))}

        {/* Button */}
        <div className="fixed bottom-0 left-0 flex justify-evenly w-full p-3 text-xl font-mono text-neutral-900 font-bold space-x-4 z-10 sm:justify-center sm:text-2xl sm:gap-6 lg:p-6">
          {/* Yes Button */}
          <button
            className="px-2 py-1 bg-red-500 rounded-xl  shadow-lg shadow-black active:shadow-none"
            onClick={() => nextSlide()}>
            <span className="mx-2">X</span>
            <span className="mx-2  tracking-widest">No</span>
          </button>
          {/* No Button */}
          <button
            className="px-1 bg-green-500 rounded-xl  shadow-lg shadow-black active:shadow-none"
            onClick={() => {
              addToGuessNumber(slideNumber);
              nextSlide();
            }}>
            <span className="mx-2">&#x2713;</span>
            <span className="mx-2">Yes</span>
          </button>
        </div>
      </div>
    </div>
  );
}
