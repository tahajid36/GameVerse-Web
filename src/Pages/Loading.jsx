import React from 'react';

const Loading = () => {
    return (
        <div className='bg-black'> 
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl dotmatrix text-center text-red-500">Almost there...</h1>
      <span className="loading loading-spinner loading-xl"></span>

      
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Loading;