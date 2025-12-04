import React from "react";
import GameCard from "./GameCard";
import Container from "./Container";
import { useLoaderData } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

const GameSection = () => {
  const gameData = useLoaderData();
  console.log(gameData);
  return (
    <>
      <div className="bg-black bg-cover stars">
        <title>All Games</title>
        <Container>
          <Navbar></Navbar>
        </Container>
        <Container>
          <div className="bg-black/60 backdrop-blur-md w-11/12 md:w-5/10 mx-auto p-3 mb-12 rounded-2xl md:rounded-full mt-12">
            <h2 className="text-5xl dotmatrix text-center   text-red-400">
              TOP-RATED TITLES OF 2025
            </h2>
          </div>
          {/* serach bar here  */}
          <div className="flex justify-between mt-7 ">
            <div>
              <label className="input bg-black/60 backdrop-blur-md">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input type="search" required placeholder="Search" />
              </label>
            </div>
            <div>
              <select defaultValue="Pick a color" className="select bg-black/60 backdrop-blur-md">
                <option disabled={true}>Sort</option>
                <option>By Rating</option>
                <option>By Downloads</option>
              </select>
            </div>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-9 mt-10 ">
            {gameData.map((game) => (
              <GameCard game={game}></GameCard>
            ))}
          </div>
        </Container>
        <Container>
          <Footer></Footer>
        </Container>
      </div>
    </>
  );
};

export default GameSection;
