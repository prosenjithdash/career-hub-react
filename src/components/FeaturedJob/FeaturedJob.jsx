import React from 'react';

const FeaturedJob = ({ featuredJob }) => {
    const { id, logo, company_name, job_title, location, salary, remote_or_onsite, job_type } = featuredJob;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <img className='w-full h-[200px] rounded-t-xl' src={logo} alt="Shoes" />
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className='flex gap-2'>
                    <button className="btn btn-outline btn-primary">{remote_or_onsite}</button>

                    <button className="btn btn-outline btn-primary">{job_type}</button>

                </div>
                <div className='flex justify-between'>
                    <p>{location}</p>
                    <p>{ salary}</p>
                </div>
                <div className="card-actions ">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJob;