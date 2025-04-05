import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useContext, useEffect, useRef, useState } from "react";
import Herobg from "../../assets/image/herobg.jpg";
import SliderImg1 from "../../assets/image/herosecimg.jpeg";
import { MyContext } from "../../App";
import { RiHome6Line } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const baseUrl = import.meta.env.VITE_APP_URL;

const HeroSection = () => {
  const [isHideSearch, setIsHideSearch] = useState(false);
  const [search, setSearch] = useState("");
  const { propertyData, setDamacIsPopUpOpen } = useContext(MyContext);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (search) {
        setIsHideSearch(true);
        const results = propertyData.filter((item) =>
          ["title", "description", "address", "city", "state", "country"].some(
            (key) => item[key]?.toLowerCase().includes(search.toLowerCase())
          )
        );
        setFilteredData(results);
        setSelectedIndex(results.length > 0 ? 0 : -1);
      } else {
        setFilteredData([]);
        setSelectedIndex(-1);
      }
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [search, propertyData]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (selectedIndex >= 0 && filteredData[selectedIndex]) {
      const { title, developer, fullAddress, _id } = filteredData[selectedIndex];
      navigate(
        ("/" + title.replace(/\s+/g, "-")).toLowerCase() +
          "-by-" +
          developer.replace(/\s+/g, "-") +
          "-" +
          fullAddress.replace(/\s+/g, "-") +
          "/" +
          _id
      );
    } else {
      alert("Please select a property from the list.");
    }
  };

  const handleKeyDown = (e) => {
    if (filteredData.length > 0) {
      if (e.key === "ArrowDown") {
        setSelectedIndex((prevIndex) =>
          prevIndex < filteredData.length - 1 ? prevIndex + 1 : 0
        );
      } else if (e.key === "ArrowUp") {
        setSelectedIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : filteredData.length - 1
        );
      } else if (e.key === "Enter") {
        handleSearchSubmit(e);
      }
    }
  };

  return (
    <div
      className="relative w-full pt-6 sm:pt-10 md:pt-20 lg:pt-40 pb-5 md:pb-0 min-h-[100vh] md:min-h-screen bg-cover bg-center px-4 sm:px-6 md:px-10 lg:px-40"
      style={{ backgroundImage: `url(${Herobg})` }}
    >
      <div className="bg-gradient-to-t absolute inset-0 to-[#061a33] from-[#173306]/80"></div>
      
      {/* Slider */}
      <Slider ref={sliderRef} {...settings}>
        {[1, 2, 3, 4].map((_, index) => (
          <div key={index}>
            <div className="flex flex-col-reverse md:flex-row items-center h-full justify-between p-4 sm:p-6 md:p-8 lg:p-10 gap-6 md:gap-10">
              <div className="w-full md:w-1/2 lg:max-w-[670px] text-white">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                  Penthouse Apartment with 5 Rooms in Kharadi, Pune
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg">
                  Penthouse apartment for sale located on Baner Road. With
                  this property, you can enjoy proximity to Baner Hill Forest
                  and the benefits of a luxury residential area. Lorem ipsum
                  dolor, sit amet consectetur adipisicing elit.
                </p>
                <div className="mt-4 sm:mt-6 flex flex-wrap gap-3 sm:gap-4">
                  <button
                    onClick={() => {
                      setDamacIsPopUpOpen(true) 
                      
                    }}
                    className="bg-logoColor hover:bg-logoColor/90 text-white px-4 py-2 sm:px-6 sm:py-3 rounded text-sm sm:text-base"
                  >
                    Event Enquiry
                  </button>
                  <button className="px-4 py-2 sm:px-6 sm:py-3 rounded hover:bg-white md:bg-transparent bg-white md:text-white text-black hover:text-black text-sm sm:text-base">
                    See All Apartments
                  </button>
                </div>
              </div>

              {/* Right Side Image with Price Tag */}
              <div className="w-60 sm:w-72 md:w-80 lg:w-96 h-60 sm:h-72 md:h-80 lg:h-96 relative">
                <div className="relative rounded-full overflow-hidden">
                  <img
                    src={SliderImg1}
                    alt="Penthouse"
                    className="w-full h-full object-cover rounded-full border-4 sm:border-5 border-white shadow-lg"
                  />
                  <div className="text-end text-xs sm:text-sm md:text-base lg:text-lg mt-2 sm:mt-3 absolute bottom-12 sm:bottom-14 md:bottom-16 left-0 right-0 md:pr-12 pr-6 bg-white font-bold text-gray-400 p-2 sm:p-3 md:p-4">
                    PENTHOUSE APARTMENT
                  </div>
                </div>
                <div className="absolute left-0 bottom-4 sm:bottom-6 md:bottom-7 border-4 sm:border-5 border-white bg-logoColor w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 flex items-center justify-center z-10 text-white px-3 py-2 rounded-full text-sm sm:text-base md:text-lg font-semibold">
                  ₹13,200,00
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Search Form */}
      <form
        onSubmit={handleSearchSubmit}
        className="flex relative top-8 sm:top-12 md:top-16 z-10 w-full flex-col sm:flex-row gap-4 sm:gap-8 items-center bg-logoColor text-black p-2 rounded-lg"
      >
        <div className="flex items-center gap-2 p-3 sm:p-4 bg-gray-50 rounded-md w-full">
          <RiHome6Line className="text-base sm:text-lg" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            type="text"
            placeholder="Enter an address, neighborhood, city, or ZIP code"
            className="w-full bg-transparent outline-none text-sm sm:text-base"
          />
        </div>
        <div
          onClick={handleSearchSubmit}
          className="flex items-center justify-center sm:justify-start gap-3 sm:gap-5"
        >
          <IoSearchOutline className="bg-white text-logoColor h-8 w-8 sm:h-10 sm:w-10 rounded-full p-2 sm:p-3 cursor-pointer" />
        </div>
      </form>

      {/* Search Results */}
      {isHideSearch && filteredData.length > 0 && (
        <div className="relative top-10 sm:top-14 md:top-[65px]">
          <div className="absolute bg-logoColor/10 backdrop-blur-md p-3 flex flex-col gap-3 w-full border max-h-[300px] overflow-y-auto">
            {filteredData.map(
              ({ _id, title, propertyType, address, galleryImg }, index) => {
                const isString = typeof galleryImg[0] === "string";
                const fileName = isString ? galleryImg[0].split("/").pop() : null;
                const fileUrl = isString ? `${baseUrl}/uploads/${fileName}` : null;
                return (
                  <div
                    onClick={() => {
                      alert("Work in Progress");
                      setIsHideSearch(false);
                    }}
                    key={index}
                    className={`cursor-pointer hover:bg-logoColor hover:text-white rounded-md backdrop-blur-md text-logocbg-logoColor p-2 sm:p-3 flex items-center gap-2 ${
                      index === selectedIndex ? "bg-logoColor text-white" : "bg-white"
                    }`}
                  >
                    <img
                      src={fileUrl}
                      alt={title}
                      className="rounded-full w-8 h-8 sm:w-10 sm:h-10 object-cover"
                    />
                    <div className="p-1 sm:p-2">
                      <p className="text-sm sm:text-[15px] font-semibold leading-tight sm:leading-[22.5px]">
                        {title} ({propertyType})
                      </p>
                      <p className="text-xs sm:text-sm leading-tight sm:leading-[20px]">
                        {address}
                      </p>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      )}

      {/* Custom Arrows */}
      <div className="flex md:block gap-4 sm:gap-5 z-10 absolute bottom-0 right-1/2 translate-x-1/2 md:right-0 md:translate-0 md:static justify-center items-center w-full  md:mt-0">
        <button
          className="md:absolute md:top-1/2 md:left-4 lg:left-20 md:transform md:-translate-y-1/2 bg-black/50 hover:bg-white/40 text-white p-2 sm:p-3 rounded-full"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <FaChevronLeft size={20} sm:size={24} />
        </button>
        <button
          className="md:absolute md:top-1/2 md:right-4 lg:right-20 md:transform md:-translate-y-1/2 bg-black/50 hover:bg-white/40 text-white p-2 sm:p-3 rounded-full"
          onClick={() => sliderRef.current.slickNext()}
        >
          <FaChevronRight size={20} sm:size={24} />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;