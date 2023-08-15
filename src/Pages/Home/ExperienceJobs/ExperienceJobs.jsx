import { useEffect, useState } from "react";
import ExperienceJobCard from "./ExperienceJobCard";

const ExperienceJobs = () => {
      const [experienceJobs, setExperienceJobs] = useState([])
      const [seeMore, setSeeMore] = useState(false)
      useEffect(() => {
            fetch("https://job-portal-server-istiaq-tanim.vercel.app/experienceJobs")
                  .then(res => res.json())
                  .then(data => {
                        setExperienceJobs(data)
                  })
      }, [])
      const toggleSee = () => {
            setSeeMore(!seeMore)
      }
      return (
            <div>
                  <h3 className="text-3xl my-10 text-center text-blue-400 font-bold">Experience Jobs</h3>
                  <div className="lg:grid max-w-screen-xl px-2 mx-auto grid-cols-3 gap-10 mt-10">
                        {
                              seeMore ? experienceJobs?.map((job) => <ExperienceJobCard key={job._id} job={job}></ExperienceJobCard>) : experienceJobs?.slice(0, 6).map((job) => <ExperienceJobCard key={job._id} job={job}></ExperienceJobCard>)
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

export default ExperienceJobs;