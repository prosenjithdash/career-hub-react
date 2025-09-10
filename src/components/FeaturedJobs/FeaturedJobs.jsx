import React, { useEffect, useState } from 'react';
import FeaturedJob from '../FeaturedJob/FeaturedJob';

const FeaturedJobs = () => {

    // useState for jobs
    const [featuredJobs, setFeaturedJobs] = useState([]);

    // useEffect for load data with fetch
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setFeaturedJobs(data))
    },[])

    return (
        <div className='text-center'>
            <h2 className='text-[48px] text-black font-bold'>Featured Jobs</h2>
            <p className='text-[16px]'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            

            <div className='grid grid-cols-2 gap-2'>
                {
                    featuredJobs.map((featuredJob,idx) => <FeaturedJob key={idx} featuredJob={ featuredJob} />  )
                }
            </div>

            
        </div>
    );
};

export default FeaturedJobs;