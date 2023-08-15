import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
const FresherJobCard = ({ job }) => {
      const { positionName, companyName, companyLogo, vacancy, _id } = job
      useEffect(() => {
            AOS.init({
                  duration: 800,
                  easing: 'ease-in-out',
            });
      }, []);
      return (
            <div>
                  <div data-aos="zoom-in-up" className="container mx-auto p-9 mt-5 bg-blue-100 max-w-sm rounded-2xl overflow-hidden h-80 shadow-xl hover:shadow-2xl transition duration-300">
                        <img className="rounded-xl h-24" src={companyLogo} alt="" />
                        <div className="flex justify-between items-center">
                              <div>
                                    <h1 className="mt-5 text-2xl font-semibold">{companyName}</h1>
                                    <h1 className="mt-5 text-2xl font-semibold">{positionName}</h1>
                                    <p className="mt-2">Vacancy: {vacancy}</p>
                              </div>
                              <div>
                                    <Link to={`freshJob/${_id}`}>
                                          <button className="btn border-t-0 border-x-0 mt-10 border-b-4 btn-info">Apply</button>
                                    </Link>
                              </div>
                        </div>
                  </div>
            </div>

      );
};

export default FresherJobCard;