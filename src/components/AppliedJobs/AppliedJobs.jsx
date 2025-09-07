import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const JobApplied = jobs.filter((job) => storedJobIds.includes(job.id));
      console.log(jobs, storedJobIds, JobApplied);
      setAppliedJobs(JobApplied);
    }
  }, []);
  return (
    <div className="text-center">
      <h2 className=" text-6xl">Jobs I Applied : {appliedJobs.length}</h2>
      <details className="dropdown">
        <summary className="btn m-1">open or close</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a>All</a>
          </li>
          <li>
            <a>Remote</a>
          </li>
          <li>
            <a>OnSite</a>
          </li>
        </ul>
      </details>
      <ul>
        {appliedJobs.map((job) => (
          <li key={job.id}>
            <span>
              {job.job_title}
              {job.company_name}
              {job.remote_or_onsite}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;
