import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='min-h-screen gap-8 flex justify-center items-center flex-col'>
            <h1 className='text-5xl dotmatrix text-center text-red-500'>Page not Found</h1>

            <Link to={'/'}>
            <button className='btn btn-outline w-34'>Back to Home</button>
            </Link>
        </div>
    );
};

export default Error;