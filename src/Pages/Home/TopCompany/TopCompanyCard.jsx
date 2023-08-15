import { Link } from "react-router-dom";


const TopCompanyCard = ({ item }) => {
      const { image, name, location, description, _id } = item
      return (
            <div className="card card-compact pt-4  bg-sky-100 shadow-lg">
                  <figure><img src={image} className="h-36 w-full object-contain" alt="Shoes" /></figure>
                  <div className="card-body">
                        <h2 className="card-title text-red-700">{name}</h2>
                        <p className="my-0">Location: {location}</p>
                        <p className="text-justify"><span className="font-bold">Description</span>: {description.slice(0, 200)}...</p>
                        <Link to={`companyDetails/${_id}`}>
                              <button className="bg-blue-500 mt-2 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">View Details</button>
                        </Link>

                  </div>
            </div>
      );
};

export default TopCompanyCard;