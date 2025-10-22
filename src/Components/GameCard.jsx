import React from "react";

const GameCard = ({ game }) => {
  const { coverPhoto, title, category } = game;
  return (
    <>
      <div className="p-1 w-[250px] space-y-2">
        <img className="w-full mx-auto h-[300px]" src={coverPhoto} alt="" />
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold">{title}</h2>
            <p>{category}</p>
          </div>
          <button className="btn bg-linear-65 from-purple-500 to-pink-500">
            Install
          </button>
        </div>
      </div>
    </>
  );
};

export default GameCard;
