import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FeaturedJobDetails = () => {

    // get id from route
    const { id } = useParams();

    // store data with useState
    const [jobD, setJobD] = useState(null)
    
    // load single data from jobs.json file
    useEffect(() => {
        fetch('/jobs.json')
            .then(res => res.json())
            .then(data => {
                const singJobData = data.find(job => job.id === parseInt(id))
                setJobD(singJobData)
                // console.log(singJobData)
                
        })
    }, [id])
    
    if (!jobD) {
        return <p>Data is loading...</p>
    }
    
    return (
        <div className='flex justify-between gap-5 items-baseline'>
            <div className='py-[50px] max-w-[700px]'>
                <p className='pb-[20px]'> <span className='font-bold'>Job Description: </span>
                    {jobD.job_description}
                </p>

                <p className='pb-[20px]'><span className='font-bold'>Job Responsibility: </span>{jobD.job_responsibility}</p>

                <p className='font-bold pb-[10px]'>Educational Requirements: </p>

                <p className='pb-[20px]'>{jobD.educational_requirements}</p>

                <p className='font-bold pb-[10px]'>Experiences:</p>

                <p >{jobD.experiences}</p>
            </div>

            <div className='max-w-full'>
                <div className='bg-blue-300 rounded-lg mb-2 p-[20px]'>
                    <h3 className='pb-[15px]'>Job Details</h3>
                    <hr />

                    {/* salary */}
                    <div className='py-[15px]'>
                        <p><span className='font-bold'>salary: </span>{jobD.salary}</p>
                    </div>

                    {/* Job Title */}
                    <div className='pb-[15px]'>
                        <p><span className='font-bold'>Job Title: </span>{jobD.job_title}</p>
                    </div>

                    {/* Contact Information */}

                    <h3 className='pb-[15px]'>Contact Information</h3>
                    <hr />

                    {/* Phone */}
                    <div className='py-[15px]'>
                        <p><span className='font-bold'>Phone: </span>{jobD.contact_information.phone}</p>
                    </div>

                    {/* Email */}
                    <div className='pb-[15px]'>
                        <p><span className='font-bold'>Email: </span>{jobD.contact_information.email}</p>
                    </div>

                    {/* Address */}
                    <div className='pb-[15px]'>
                        <p><span className='font-bold'>Address: </span>{jobD.contact_information.address}</p>
                    </div>


                </div>
                <button className="btn btn-primary w-full">Apply Now</button>
            </div>
       </div>
    );
};

export default FeaturedJobDetails;