import React from "react";
import { Link } from "react-router"; 
import { motion } from "framer-motion"; 


const GameCard = ({ game }) => {
    const { id, coverPhoto, title, category, ratings, description } = game;

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
                    bg-black/60 backdrop-blur-md shadow-2xl shadow-black/70 text-white 
                    h-[500px] flex flex-col justify-between 
                    
                    border-2 border-transparent 
                    hover:border-cyan-400 hover:shadow-cyan-500/50 hover:z-10
                ">
                    
                    <img 
                        // Using h-[70%] to leave sufficient vertical space for the text block
                        className="w-full mx-auto h-[70%] object-cover rounded-lg 
                                border-b-2 border-cyan-400/30 flex-shrink-0" 
                        src={coverPhoto} 
                        alt={title || "Game Cover"} 
                        // Fallback image in case the coverPhoto URL fails
                        onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/800x600/1e293b/f8fafc?text=Image+Not+Found`; }}
                    />
                    
                    {/* New Content Structure: A flex container to stack the Title block and Description block vertically */}
                    <div className="flex flex-col pt-2 flex-grow min-h-0">
                        
                        {/* ROW 1: Title and Category (Takes full width) */}
                        <div className="overflow-hidden">
                            <h2 className="text-xl font-extrabold uppercase text-red-400 tracking-wider whitespace-nowrap overflow-hidden text-ellipsis">
                                {title || "Game Title"}
                            </h2>
                            <p className="text-sm text-gray-400 mt-1">
                                Category: <span className="text-cyan-300">{category || "Category"}</span>
                            </p>
                        </div>
                        
                        {/* ROW 2: Description and Rating Badge (Uses justify-between for clean separation) */}
                        <div className="text-sm text-gray-300 mt-4 flex justify-between items-start min-w-0">
                            
                            {/* Description and '...see more' Container (Flex-grow to take most of the space) */}
                            <div className="flex items-center min-w-0 flex-grow pr-2">
                                {/* Description Text: Must be block-like (p) to use text-ellipsis, and flex-grow/min-w-0 to constrain it */}
                                <p className="
                                    whitespace-nowrap overflow-hidden text-ellipsis
                                    flex-grow min-w-0
                                ">
                                    {description || "No description available for this game."}
                                </p>
                                
                                {/* '...see more' text: Ensures it doesn't shrink or wrap */}
                                <span className="text-cyan-400 font-semibold ml-1 flex-shrink-0">
                                    ...see more
                                </span>
                            </div>

                            {/* Ratings Badge (Fixed width, flex-shrink-0 to guarantee size) */}
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
                </div>
            </Link>

        </motion.div>
    );
};

export default GameCard;