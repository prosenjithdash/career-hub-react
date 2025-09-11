import React from 'react';

const AppliedJob = ({ job }) => {

    const { job_title} = job;
    return (
        <div>
            <h2>{job_title}</h2>
        </div>
    );
};

export default AppliedJob;