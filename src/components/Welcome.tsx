export default function Welcome({ gameStart }: { gameStart: Function }) {
  return (
    <div className="space-y-8 font-semibold">
      <h2 className="text-3xl font-bold">
        Welcome to the
        <span className="block text-red-500">Number Magic Game</span>
      </h2>
      {/* Game Rules */}
      <div className="text-xl text-neutral-100">
        <p className="text-2xl mb-4">Rules:</p>
        <ol className="list-decimal space-y-4 pl-4">
          <li>Think any number from 1 to 100</li>
          <li>
            When game started, few slides are shown one by one which include
            numbers. If your number is available in the slide, click yes button,
            otherwise click no button
          </li>
          <li>
            When the game will finish. I try my best to guess the number you
            have think
          </li>
        </ol>
      </div>

      {/* Game Start Button */}
      <button
        className="inline-block py-2 px-4 bg-green-500 text-neutral-900 text-darkText font-bold tracking-wider"
        onClick={() => gameStart()}>
        Start Game
      </button>

      <div>
        <p>Copyright &copy; 2023</p>
        <p>Made By: Malik Jahanzaib</p>
      </div>
    </div>
  );
}
