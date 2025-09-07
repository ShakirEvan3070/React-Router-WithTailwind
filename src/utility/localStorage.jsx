const getStoredJobApplication = () => {
  const StoredJobApplication  = localStorage.getItem("job-application");
  if (StoredJobApplication) {
    return JSON.parse(StoredJobApplication);
  }
    return [];
};
const saveJobApplication = (id) => {
    const StoredJobApplications = getStoredJobApplication();
    const exists = StoredJobApplications.find(jobId => jobId === id);
    if (!exists) {
        StoredJobApplications.push(id);
        localStorage.setItem("job-application", JSON.stringify(StoredJobApplications));
    }   
};
export {getStoredJobApplication, saveJobApplication };
