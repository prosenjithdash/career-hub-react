import React, { useEffect, useState } from 'react';
import FeaturedJob from '../FeaturedJob/FeaturedJob';

const FeaturedJobs = () => {

    // useState for jobs
    const [featuredJobs, setFeaturedJobs] = useState([]);

    const [dataLength, setDataLength] = useState(3);

    // This is not to show all data
    // const [dataLength, setDataLength] = useState(4);

    
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
            

            <div className='grid grid-cols-3 my-[50px] gap-6 '>
                {
                    featuredJobs.slice(0, dataLength).map((featuredJob,idx) => <FeaturedJob key={idx} featuredJob={ featuredJob} />  )
                }
            </div>
            <div className={dataLength === featuredJobs.length && 'hidden'}>
                <button onClick={()=>setDataLength(featuredJobs.length)} className="btn btn-primary">Show All</button>
            </div>









            {/* <div className={dataLength === featuredJobs.length &&'hidden'}>
                <button onClick={()=>setDataLength(featuredJobs.length)} className="btn btn-primary">Show All</button>
            </div> */}

            
        </div>
    );
};

export default FeaturedJobs;