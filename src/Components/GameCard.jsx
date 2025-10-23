import React from "react";
import { Link } from "react-router";
import { AuthContext } from "../Auth/AuthProvider";

const GameCard = ({ game }) => {
  const {id, coverPhoto, title, category } = game;

  // console.log(user)
  return (
    <>
      <div className="p-10 space-y-2">
        <img className="w-full mx-auto h-[300px]" src={coverPhoto} alt="" />
        <div className="flex justify-between items-center">
          <div className="">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p>{category}</p>
          </div>
          <Link to={`/gamedetails/${id}`}>
          <button className="btn bg-linear-65 from-purple-500 to-pink-500">
            Install
          </button></Link>
        </div>
      </div>
    </>
  );
};

export default GameCard;
