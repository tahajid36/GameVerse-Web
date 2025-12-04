import React from "react";
import { Link } from "react-router";

const GameDetailsCard = ({ gameData }) => {
  const { title, description, downloadLink, category, coverPhoto } = gameData;
  return (
    <div className="flex justify-center mx-auto py-12 px-6">
      <div
        className="flex flex-col md:flex-row gap-11 w-full max-w-9xl p-8 rounded-2xl 
                  bg-black/60 backdrop-blur-md border border-white/10 shadow-2xl shadow-cyan-900/50"
      >
        {/* Game Cover Image */}
        {/* 🔑 CHANGE 2: Adjusted image column width from md:w-1/3 (33%) to md:w-1/4 (25%) 
                       to give more space to the text/details. */}
        <div className="md:w-1/4 flex-shrink-0">
          <img
            className="w-full h-auto rounded-lg border-2 border-cyan-400 shadow-xl shadow-cyan-500/30"
            src={coverPhoto}
            alt="Game Cover"
          />
        </div>

        {/* Details Section */}
        {/* 🔑 CHANGE 3: Adjusted details column width to md:w-3/4 (75%) */}
        <div className="md:w-3/4 text-white">
          <div className="space-y-6 mb-6">
            {/* Title */}
            <h1 className="text-5xl font-extrabold tracking-wide text-red-400">
              {title }
            </h1>

            {/* Category/Metadata */}
            <p className="text-lg text-cyan-300">
              Category: {category}
            </p>

            {/* Download Button with Magenta Glow */}
            <Link to={downloadLink}>
              <button
                className="py-3 px-8 rounded-lg font-bold text-lg transition duration-300 
                                       bg-fuchsia-600 hover:bg-fuchsia-500 shadow-xl shadow-fuchsia-500/50"
              >
                Download Now
              </button>
            </Link>
          </div>

          {/* Description */}
          <p className="text-base leading-relaxed text-white/80">
            {description}
          </p>

          {/* Placeholder for Additional Sections (e.g., Specs, Trailer) */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <h3 className="text-2xl font-semibold text-red-400 mb-4">
              Key Features
            </h3>
            <ul className="list-disc list-inside space-y-2 text-white/80">
              <li>Vast, Seamlessly Connected Open World</li>
              <li>Challenging and Rewarding Combat Mechanics</li>
              <li>Deep Character Customization and Build Variety</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetailsCard;
