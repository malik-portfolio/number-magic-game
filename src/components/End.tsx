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
        <div className="text-center h-full flex flex-col justify-center items-center">
          <div className="bg-neutral-100 w-48">
            {/* <p className="text-2xl border-b border-neutral-300 py-2">Number</p> */}
            <p className="text-8xl text-red-500 py-6 animate-bounce animate-twice ">
              {guessNumber}
            </p>
            {/* Play again button */}
            <button
              className="block w-full bg-indigo-700 py-2 text-xl cursor-pointer"
              onClick={() => resetGame()}>
              Play Again!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
