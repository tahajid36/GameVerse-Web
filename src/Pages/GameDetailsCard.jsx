import React from "react";
import { Link } from "react-router";

const GameDetailsCard = ({ gameData }) => {
  const { title, description, downloadLink, category, coverPhoto } = gameData;
  return (
    <div className="flex justify-center gap-11 mt-7 pb-7">
      <img src={coverPhoto} alt="" />
      <div>
        <div className="space-y-6 mb-6">
          <h1 className="text-4xl font-bold ">{title}</h1>
          <p className="">Category: {category}</p>
          <Link to={downloadLink}>
            <button className="btn bg-linear-65 from-purple-500 to-pink-500">
              Download Now
            </button>
          </Link>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default GameDetailsCard;
