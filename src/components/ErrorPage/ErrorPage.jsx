import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center border-[15px] rounded-full solid border-green-700 p-[250px] m-2'>
            <h1 className='text-8xl bg-red-700 rounded-full text-white font-extrabold'>404</h1>
            <p className='text-orange-600 py-5'>Page Not Found</p>
            <Link to='/'><button className="btn btn-outline btn-warning">Back To Home</button></Link>
        </div>
    );
};

export default ErrorPage;