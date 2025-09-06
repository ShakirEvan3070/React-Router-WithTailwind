import { FaLocationDot } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";
const Job = ({ job }) => {
  const { logo ,job_title,company_name,remote_or_onsite,location,job_type,salary} = job;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img
          src={logo}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>
          {job_title}
        </p>
        <p>{company_name}</p>
        <div>
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{remote_or_onsite}</button>

            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{job_type}</button>

        </div>

      <div className="flex mt-4">
        <h2 className=" flex"><FaLocationDot  className="text-2xl  mr-2"/>{location}</h2>
        <h2 className=" flex ml-2"><FaDollarSign  className="text-2xl  mr-2"/>{salary}</h2>
      </div>

        <div className="card-actions justify-end">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Job;
