import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  const [scoreValueA, setScoreValueA] = useState(0);
  const [scoreValueB, setScoreValueB] = useState(0);
  const [startGame, setStartGame] = useState(false);
  const [playerAName, setPlayerAName] = useState("");
  const [playerBName, setPlayerBName] = useState("");
  useEffect(() => {
    if (scoreValueA < 11 && scoreValueB < 11) {
      return;
    }
    if (scoreValueA === 11) {
      toast.success(`Congrats✨ ${playerAName || "Player A"} wins🎉`);
      resetGame();
    }
    if (scoreValueB === 11) {
      toast.success(`Congrats✨ ${playerBName || "Player B"} wins🎉`);
      resetGame();
    }
  }, [scoreValueA, scoreValueB, playerAName, playerBName]);

  const resetGame = () => {
    setScoreValueA(0);
    setScoreValueB(0);
  };

  return (
    <div className="bg-[#2D336B] min-h-screen bg-black bg-opacity-50 flex items-center justify-center p-4">
      <Toaster />
      {!startGame ? (
        <div className="flex justify-center items-center w-full max-w-lg">
          <div className="bg-white/20 backdrop-blur-md shadow-lg rounded-2xl p-6 w-full text-center">
            <h1 className="text-3xl text-white font-semibold mb-8">
              Welcome,{" "}
              <span className="underline decoration-wavy decoration-yellow-500">
                PointMate
              </span>
            </h1>
            <div className="text-left">
              <label htmlFor="firstPlayer" className="text-white block mb-2">
                First Player Name:
              </label>
              <input
                value={playerAName}
                onChange={(e) => setPlayerAName(e.target.value)}
                type="text"
                id="firstPlayer"
                placeholder="Enter First Player Name"
                className="w-full p-3 mb-5 rounded-md bg-white/30 text-white placeholder-gray-200 focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <label htmlFor="secondPlayer" className="text-white block mb-2">
                Second Player Name:
              </label>
              <input
                value={playerBName}
                onChange={(e) => setPlayerBName(e.target.value)}
                type="text"
                id="secondPlayer"
                placeholder="Enter Second Player Name"
                className="w-full p-3 mb-5 rounded-md bg-white/30 text-white placeholder-gray-200 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
            <button
              onClick={() => setStartGame(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mt-2 w-full sm:w-auto"
            >
              Start Game
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full">
          <h1 className="text-3xl md:text-4xl text-center pb-4 text-[#FFF2F2] font-semibold underline decoration-wavy decoration-yellow-500">
            PointMate
          </h1>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-6">
            <Card
              player={playerAName || "Player A"}
              score={scoreValueA}
              increaseScore={() => setScoreValueA(scoreValueA + 1)}
              descreaseScore={() => setScoreValueA(scoreValueA - 1)}
            />
            <Card
              player={playerBName || "Player B"}
              score={scoreValueB}
              increaseScore={() => setScoreValueB(scoreValueB + 1)}
              descreaseScore={() => setScoreValueB(scoreValueB - 1)}
            />
          </div>
          <div className="flex justify-center mt-10 gap-5">
            <button
              onClick={() => {
                setStartGame(false);
              }}
              className="bg-red-500/70 hover:bg-red-500 text-white p-4 md:p-5 rounded-xl text-lg md:text-2xl transition-all cursor-pointer w-full sm:w-auto"
            >
              New Game
            </button>
            <button
              onClick={resetGame}
              className="bg-blue-500/70 hover:bg-blue-500 text-white p-4 md:p-5 rounded-xl text-lg md:text-2xl transition-all cursor-pointer w-full sm:w-auto"
            >
              Reset Game
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
