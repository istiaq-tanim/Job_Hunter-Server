import { useEffect, useState } from "react";
import FresherJobCard from "./FresherJobCard";

const FresherJob = () => {
      const [fresherJobs, setFresherJobs] = useState([])
      const [seeMore, setSeeMore] = useState(false)
      useEffect(() => {
            fetch("https://job-portal-server-istiaq-tanim.vercel.app/fresherJobs")
                  .then(res => res.json())
                  .then(data => {setFresherJobs(data)})
      }, [])

      const toggleSee = () => {
            setSeeMore(!seeMore)
      }
      return (
            <div className="w-11/12 mx-auto mt-10">
                  <h3 className="text-3xl my-10 text-center text-blue-400 font-bold">Fresher Jobs</h3>
                  <div className="lg:grid max-w-screen-xl mx-auto grid-cols-3 gap-10 mt-10">
                        {
                              seeMore ? fresherJobs?.map((job) => <FresherJobCard key={job._id} job={job}></FresherJobCard>) : fresherJobs?.slice(0, 6).map((job) => <FresherJobCard key={job._id} job={job}></FresherJobCard>)
                        }
                  </div>

                  <div className="flex items-center justify-center mt-5">
                        <button onClick={toggleSee} className="btn btn-accent mt-5">{
                              seeMore ? "See Less" : "See More"
                        }</button>
                  </div>
            </div>
      );
};

export default FresherJob;