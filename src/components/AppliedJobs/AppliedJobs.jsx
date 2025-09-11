import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoreJobApplication } from '../../utility/localStorage';

const AppliedJobs = () => {
    const jobs = useLoaderData()

    // load local stored data
    useEffect(() => {
        const storedJobIds = getStoreJobApplication()
        if (jobs.length > 0) {
            const jobsApplied = jobs.filter(job => job.id === id)
        }
    },[])
    return (
        <div>
            <h2>AppliedJobs page</h2>
        </div>
    );
};

export default AppliedJobs;