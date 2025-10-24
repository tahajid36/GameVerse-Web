import React from "react";
import { Link } from "react-router";


const GameCard = ({ game }) => {
  const {id, coverPhoto, title, category, ratings } = game;

  // console.log(user)
  return (
    <>
     <Link to={`/gamedetails/${id}`}>
      <div className="p-6 h-[440px] bg-base-300 relative card  space-y-5">
        <img className="w-full  mx-auto h-[320px]" src={coverPhoto} alt="" />
        <div className="flex justify-between items-center">
          <div className="">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p>{category}</p>
          </div>
         
          <div className="badge badge-outline border-none badge-primary">{ratings}</div>
         
        </div>
      </div>
      </Link>
    </>
  );
};

export default GameCard;
