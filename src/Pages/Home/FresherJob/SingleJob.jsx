import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleJob = () => {
      const params = useParams()
      const [singleJob, setSingleJob] = useState([])
      useEffect(() => {
            fetch(`https://job-portal-server-istiaq-tanim.vercel.app/fresherJobs/${params.id}`)
                  .then(res => res.json())
                  .then(data => {
                        setSingleJob(data)
                  })
      }, [params.id])

      return (
            <div>
                  <div className="w-full p-4">
                        <div className="h-full border shadow-lg rounded-xl overflow-hidden">
                              <img
                                    className="h-64 mx-auto pt-10 object-cover"
                                    src={singleJob.companyLogo}
                                    alt={`${singleJob.companyName} Logo`}
                              />
                              <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-2">{singleJob.companyName}</h3>
                                    <h5 className="font-bold text-lg my-2 text-blue-500">Location: {singleJob.jobLocation}</h5>
                                    <h5 className="font-bold text-lg my-2 text-blue-500">Position: {singleJob.positionName}</h5>
                                    <div className="my-4">
                                          <h5 className="font-bold text-lg mb-2 text-blue-500">Responsibility:</h5>
                                          <p>{singleJob.responsibility}</p>
                                    </div>
                                    <div className="my-4">
                                          <h5 className="font-bold text-lg mb-2 text-blue-500">Description:</h5>
                                          <p>{singleJob.companyDescription}</p>
                                    </div>
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                                          Apply Now
                                    </button>
                              </div>
                        </div>
                  </div>

            </div>
      );
};

export default SingleJob;