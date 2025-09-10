import React from 'react';

const FeaturedJob = ({ featuredJob }) => {
    const { id, logo, company_name, job_title, location, salary } = featuredJob;
    return (
        <div className='border-2 border-gray-400 rounded-lg'>
            <img src={logo} alt="" />
            <p>{job_title}</p>
            <p>{company_name}</p>
            <div className='flex gap-2'>
                <button className="btn btn-outline btn-primary">Remote</button>
                <button className="btn btn-outline btn-primary">Full Time</button>
            </div>
            <div className='flex justify-between'>
                <p>{location}</p>
                <p>{salary }</p>
            </div>
            <button className="btn btn-primary">View Details</button>

            
            
        </div>
    );
};

export default FeaturedJob;