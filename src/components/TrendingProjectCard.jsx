import React from "react";
import { MapPin } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const TrendingProjectCard = ({
  id,
  propertyType,
  title,
  location,
  price,
  date,
  developer,
  image,
}) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/projects/" + title.replaceAll(' ','-')+'/'+id);
      }}
      className="group cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden max-w-sm mx-auto"
    >
      {/* Image Section with Overlay */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-3 left-3 bg-gradient-to-r from-black/80 to-black/60 text-white text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide">
          {propertyType}
        </span>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      {/* Content Section */}
      <div className="p-5 space-y-3">
        <h3 className="font-bold text-xl text-gray-800 group-hover:text-logoBlue transition-colors duration-200">
          {title.length > 30 ? title.slice(0, 30) + ".." : title}
        </h3>
        <p className="flex items-center text-sm text-gray-600">
          <MapPin size={16} className="mr-2 text-logoBlue" />
          <span className="line-clamp-1">{location}</span>
        </p>

        {/* Price and Date Grid */}
        <div className="grid grid-cols-2 gap-4 text-sm mt-3">
          <div>
            <p className="text-gray-500 text-xs">Starting Price</p>
            <p className="font-semibold text-gray-800">{price}</p>
          </div>
          <div>
            <p className="text-gray-500 text-xs">Completion</p>
            <p className="font-semibold text-gray-800">{date}</p>
          </div>
        </div>

        {/* Developer Info */}
        <p className="text-sm text-gray-600">
          <span className="font-medium text-gray-800">By: </span>
          <span className="italic">{developer}</span>
        </p>

        {/* Action Buttons */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <button className="text-logoBlue border border-logoBlue px-4 py-2 rounded hover:bg-blue-50 hover:border-blue-500 group/button transition-all duration-200">
            ₹ 270,000
          </button>
          <button className="flex items-center gap-2 bg-logoColor text-white px-5 py-2 rounded hover:logoColor/90 font-medium transition-all duration-200 transform hover:scale-105">
            <FaStar className="text-white" />
            <span className="font-medium">Favorite</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingProjectCard;
