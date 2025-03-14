import Logo from "../../assets/logopng.png";
import BottomGress from "../../assets/image/background-grass.png";
import BottomHome from "../../assets/image/footerimage.jpeg";
import { FaPlus } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-6 md:px-20 lg:px-40 pb-40 relative">
      {/* Green Grass Background */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-lg font-bold text-logoBlue">ABOUT US</h2>
            <p className="text-gray-600 font-bold uppercase mt-2">
              A top real estate agency leading the luxury properties marketing
              throughout India.
            </p>
            <p className="text-gray-600 mt-2">
              We are a technology real estate firm and aggregator platform to
              deliver real estate solutions.
            </p>
          </div>

          {/* Property Types */}
          <div>
            <h2 className="text-lg font-bold text-logoBlue">PROPERTY TYPES</h2>
            <ul className="text-gray-600 mt-2 space-y-1">
              <li className="flex items-center gap-2"><FaPlus className="text-gray-500 text-xs"/> Villa</li>
              <li className="flex items-center gap-2"><FaPlus className="text-gray-500 text-xs"/> Residential</li>
              <li className="flex items-center gap-2"><FaPlus className="text-gray-500 text-xs"/> Apartment</li>
              <li className="flex items-center gap-2"><FaPlus className="text-gray-500 text-xs"/> Commercial</li>
              <li className="flex items-center gap-2"><FaPlus className="text-gray-500 text-xs"/> Shop</li>
              <li className="flex items-center gap-2"><FaPlus className="text-gray-500 text-xs"/> Office</li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h2 className="text-lg font-bold text-logoBlue">LOCATIONS</h2>
            <ul className="text-gray-600 mt-2 space-y-1">
              <li className="flex items-center gap-2"><FaPlus className="text-gray-500 text-xs"/> Bucharest</li>
              <li className="flex items-center gap-2"><FaPlus className="text-gray-500 text-xs"/> Constanta</li>
              <li className="flex items-center gap-2"><FaPlus className="text-gray-500 text-xs"/> Brașov</li>
              <li className="flex items-center gap-2"><FaPlus className="text-gray-500 text-xs"/> Cluj-Napoca</li>
              <li className="flex items-center gap-2"><FaPlus className="text-gray-500 text-xs"/> Craiova</li>
            </ul>
          </div>

          {/* From the Blog */}
          <div>
            <h2 className="text-lg font-bold text-logoBlue">FROM THE BLOG</h2>
            <div className="mt-4 space-y-4">
              <div className="flex items-center space-x-4">
                <div className="size-20 bg-gray-900"></div>
                <div>
                  <p className="text-gray-800 font-semibold">
                    Making Places Impressive Count
                  </p>
                  <p className="text-logoColor text-sm">October 25, 2024</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="size-20 bg-gray-900"></div>
                <div>
                  <p className="text-gray-800 font-semibold">
                    Inner City Areas Metro 1% Cheaper
                  </p>
                  <p className="text-logoColor text-sm">December 10, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-4 flex flex-col sm:flex-row items-center sm:items-end gap-6 sm:gap-10 text-gray-500 text-sm text-center sm:text-left">
          <img src={Logo} alt="logo" className="w-28 sm:w-32 md:w-40" />
          <p className="text-xs sm:text-sm">
            Copyright © 2025 PROP METAVERSE PVT LTD. All rights reserved.
          </p>
        </div>
      </div>

      {/* Bottom Images */}
      <img
        src={BottomGress}
        alt="grass"
        className="absolute bottom-0 left-0 z-[1] w-full h-32 sm:h-40 object-cover"
      />
      <img
        src={BottomHome}
        alt="home"
        className="absolute bottom-0 right-0 h-40 sm:h-52 object-cover"
      />
    </footer>
  );
};

export default Footer;
