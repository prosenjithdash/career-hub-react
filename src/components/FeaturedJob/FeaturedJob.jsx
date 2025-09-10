import { IoLocationSharp } from "react-icons/io5";
import { AiFillDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const FeaturedJob = ({ featuredJob }) => {
    const { id, logo, company_name, job_title, location, salary, remote_or_onsite, job_type } = featuredJob;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mt-2">
            <img className='w-full h-[200px] rounded-t-xl' src={logo} alt="Shoes" />
            <div className="card-body">
                <h2 className="card-title ">{job_title}</h2>
                <p className="justify-start">{company_name}</p>
                <div className='flex gap-3'>
                    <button className="btn btn-outline btn-primary">{remote_or_onsite}</button>

                    <button className="btn btn-outline btn-primary">{job_type}</button>

                </div>
                <div className='flex gap-3'>
                    <div className='flex gap-2 items-center'>
                        <IoLocationSharp />
                        <p>{location}</p>
                   </div>
                    <div className="flex gap-2 items-center">
                        <AiFillDollarCircle />
                        <p>{salary}</p>
                    </div>
                </div>
                <div className="card-actions ">
                    <Link to={`/featuredJobs/${id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJob;