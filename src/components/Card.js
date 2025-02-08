import React from "react";

const Card = ({ player, increaseScore, descreaseScore, score }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 bg-white/20 backdrop-blur-lg shadow-lg p-6 rounded-2xl text-center border border-white/30">
      <h2 className="text-white font-semibold text-xl sm:text-2xl">{player}</h2>
      <div className="py-4">
        <h3 className="text-6xl sm:text-7xl md:text-8xl py-2 text-white font-bold">
          {score}
        </h3>
        <div className="flex justify-center gap-4 pt-5">
          <button
            onClick={descreaseScore}
            className="bg-blue-500/70 hover:bg-blue-500 text-white p-4 sm:p-5 rounded-xl text-xl sm:text-2xl transition-all"
          >
            -
          </button>
          <button
            onClick={increaseScore}
            className="bg-blue-500/70 hover:bg-blue-500 text-white p-4 sm:p-5 rounded-xl text-xl sm:text-2xl transition-all"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
