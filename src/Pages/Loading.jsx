import React from 'react';

const Loading = () => {
    return (
      <div className='flex flex-col items-center justify-center min-h-screen w-full bg-transparent text-white font-mono tracking-widest'>
            
      {/* Spinning System Indicator */}
      <div className='relative flex items-center justify-center mb-8'>
          
          {/* Outer Ring - Cyan Spin and Glow */}
          {/* Animate-spin creates the continuous rotation */}
          <div className='w-24 h-24 rounded-full border-4 border-cyan-500 animate-spin 
                          border-t-transparent shadow-2xl shadow-cyan-500/80'>
          </div>
          
          {/* Inner Core - Red Pulse and Glow */}
          {/* Animate-ping creates the fading expansion effect */}
          <div className='absolute w-10 h-10 rounded-full bg-red-600 animate-ping opacity-75'></div>
          <div className='absolute w-10 h-10 rounded-full bg-red-500 shadow-xl shadow-red-500/80'></div>
      </div>

      {/* Status Text (Static Content) */}
      <div className="text-center">
          
          {/* Main Heading with Red Accent and Glow */}
          <h1 className="text-4xl sm:text-5xl font-extrabold uppercase mb-2 
                         text-red-500 shadow-sm shadow-red-500/50">
              System Online
          </h1>
          
          {/* Subtext with Cyan Accent */}
          <p className="text-xl sm:text-2xl text-cyan-300">
              Awaiting User Input
          </p>
      </div>
      
  </div>
    );
};

export default Loading;