import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ExperienceJobCard = ({ job }) => {
      const { companyLogo, companyName, positionName,_id } = job
      useEffect(() => {
            AOS.init({
                  duration: 800,
                  easing: 'ease-in-out',
            });
      }, []);
      return (
            <div data-aos="zoom-out-down" className="lg:container lg:mx-auto rounded-md shadow-md mt-5 mx-5 bg-blue-100 dark:text-gray-100">
                  <img src={companyLogo} alt="" className="object-cover pt-5 mx-auto rounded-t-md h-36 dark:bg-gray-500" />
                  <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2 text-center">
                              <h2 className="text-3xl font-semibold tracki">{companyName}</h2>
                              <p className="dark:text-gray-100">{positionName}</p>
                        </div>
                        <Link to={`experienceJob/${_id}`}>
                              <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-violet-400 text-gray-900">Apply</button>
                        </Link>
                  </div>
            </div>
      );
};

export default ExperienceJobCard;