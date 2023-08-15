import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ExperienceSingleJob = () => {
      const params = useParams()
      const [singleJob, setSingleJob] = useState([])
      useEffect(() => {
            fetch(`https://job-portal-server-istiaq-tanim.vercel.app/experienceJob/${params.id}`)
                  .then(res => res.json())
                  .then(data => {
                        setSingleJob(data)

                  })
      }, [params.id])
      return (
            <div>
                  <div className="w-full p-4">
                        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
                              <img
                                    className="h-56 mx-auto pt-10 object-cover"
                                    src={singleJob.companyLogo}
                                    alt={`${singleJob.companyName} Logo`}
                              />
                              <div className="p-6">
                                    <h3 className="text-2xl font-semibold mb-2">{singleJob.companyName}</h3>
                                    <h5 className="text-lg text-blue-500 mb-2">Location: {singleJob.jobLocation}</h5>
                                    <h5 className="text-lg text-blue-500 mb-4">Position: {singleJob.positionName}</h5>
                                    <div className="mb-4">
                                          <h5 className="text-lg text-blue-500 mb-2">Responsibilities:</h5>
                                          <p className="text-gray-700">{singleJob.jobResponsibility}</p>
                                    </div>
                                    <div className="mb-4">
                                          <h5 className="text-lg text-blue-500 mb-2">Description:</h5>
                                          <p className="text-gray-700">{singleJob.jobDescription}</p>
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

export default ExperienceSingleJob;