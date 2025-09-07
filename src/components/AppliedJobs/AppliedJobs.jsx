import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    useEffect(()=>{
        const storedJobIds = getStoredJobApplication();
        if(jobs.length >0){
                const JobApplied = jobs.filter(job => storedJobIds.includes(job.id));
                console.log(JobApplied);
        }
    },[])
    return (
        <div className="text-center">
            <h2 className=" text-6xl">Jobs I Applied</h2>
        </div>
    );
};

export default AppliedJobs;