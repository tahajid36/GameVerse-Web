import React from "react";
import { Link } from "react-router"; 
import { motion } from "framer-motion"; 


const GameCard = ({ game }) => {
    const { id, coverPhoto, title, category, ratings } = game;

    const hoverMotionProps = {
        whileHover: {
            scale: 1.05, 
            transition: {
                duration: 0.20, 
                ease: "easeOut"
            },
        },
        transition: {
            type: "spring", 
            stiffness: 400,
            damping: 17
        }
    };

    return (
        <motion.div {...hoverMotionProps}>
            <Link to={`/gamedetails/${id}`}>
                <div className="
                    relative p-4 space-y-4 rounded-xl transition duration-300 cursor-pointer 
                    bg-gray-900/90 shadow-2xl shadow-black/70 text-white 
                    h-[500px] flex flex-col justify-between 
                    
                    // Crucial Hover Effect: Cyan Glow Border - Applied here for visual feedback
                    border-2 border-transparent 
                    hover:border-cyan-400 hover:shadow-cyan-500/50 hover:z-10
                ">
                    
                    <img 
                        className="w-full mx-auto h-5/6 object-cover rounded-lg 
                                   border-b-2 border-cyan-400/30 flex-shrink-0" 
                        src={coverPhoto} 
                        alt={title || "Game Cover"} 
                    />
                    
                    <div className="flex justify-between items-end pt-2 flex-grow">
                        
                        <div className="overflow-hidden">
                            <h2 className="text-xl font-extrabold uppercase text-red-400 tracking-wider whitespace-nowrap overflow-hidden text-ellipsis">
                                {title || "Game Title"}
                            </h2>
                            <p className="text-sm text-gray-400 mt-1">
                                Category: <span className="text-cyan-300">{category || "Category"}</span>
                            </p>
                        </div>
                        
                        <div className="
                            text-white font-extrabold px-3 py-1 rounded-full text-sm 
                            bg-fuchsia-600 shadow-md shadow-fuchsia-500/50 
                            flex items-center space-x-1 flex-shrink-0
                        ">
                            <span>⭐</span>
                            <span>{ratings || "5.0"}</span>
                        </div>
                        
                    </div>
                </div>
            </Link>

        </motion.div>
    );
};

export default GameCard;