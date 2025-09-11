import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoreJobApplication } from '../../utility/localStorage';
import AppliedJob from '../AppliedJob/AppliedJob';

const AppliedJobs = () => {
    const jobs = useLoaderData()

    const [appliedJobs, setAppliedJobs] = useState([]);

    // load local stored data
    useEffect(() => {
        const storedJobIds = getStoreJobApplication()
        if (jobs.length > 0) {
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            setAppliedJobs(jobsApplied)
        }
    },[])
    return (
        <div>
            <h2>AppliedJobs page : {appliedJobs.length}</h2>

            <div>
                {
                    appliedJobs.map((job, idx) => <AppliedJob
                        key={idx}
                        job={job}
                    >
                        </AppliedJob>)
                }
            </div>

        </div>
    );
};

export default AppliedJobs;