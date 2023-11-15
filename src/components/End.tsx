import { useEffect, useState } from "react";

export default function End({
  guessNumber,
  resetGame,
}: {
  guessNumber: number;
  resetGame: Function;
}) {
  const [isResultShown, setIsResultShown] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsResultShown(true), 3000);
  });

  return (
    <div className="h-screen">
      {!isResultShown ? (
        // Thinking
        <div className="text-3xl h-full  flex justify-center items-center">
          <div className="relative">Thinking</div>
          <div className="absolute w-48 aspect-square rounded-full border-8 border-t-green-500 border-r-red-500 border-b-blue-500 border-l-yellow-500 animate-spin"></div>
        </div>
      ) : (
        // Result
        <div className="text-center h-full flex flex-col justify-center items-center w-56 mx-auto">
          <div className="bg-neutral-100 py-6 px-3 text-red-500 w-full">
            {/* Result */}
            {guessNumber > 0 && guessNumber <= 100 ? (
              <p className="text-8xl animate-bounce animate-twice">
                {guessNumber}
              </p>
            ) : (
              <p className="text-2xl">
                Either you don't think any number or the number is out of range
                from 1 to 100
              </p>
            )}
            {/* Play again button */}
          </div>
          <button
            className="block w-full bg-indigo-700 py-2 text-xl cursor-pointer"
            onClick={() => resetGame()}>
            Play Again!
          </button>
        </div>
      )}
    </div>
  );
}
