import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react"
import { scale } from "framer-motion";





const GameCard = ({ game }) => {
  const {id, coverPhoto, title, category, ratings } = game;

  // console.log(user)
  return (
    <>
    <motion.div 
    whileHover={{
      scale:[null, 1.0, 1.1],
      transition: {
        duration: 0.2,
        times: [0, 0.6, 1],
        ease: ["easeInOut", "easeOut"]
      },
    }}
    transition={{
      duration: 0.3,
      ease: "easeOut"
    }}
    >
    <Link to={`/gamedetails/${id}`}>
      <div className="gamecard p-6 h-[440px] bg-base-300 relative card  space-y-5">
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

    </motion.div>
     
    </>
  );
};

export default GameCard;
