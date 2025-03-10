import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useContext, useRef } from "react";
import Herobg from "../../assets/image/herobg.jpg";
import SliderImg1 from "../../assets/image/herosecimg.jpeg";
import { MyContext } from "../../App";
const HeroSection = () => {
  const sliderRef = useRef(null);
const {setDamacIsPopUpOpen}=useContext(MyContext)
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

  return (
    <div
      className="relative w-full pt-10 md:pt-40 pb-5 md:pb-0 md:h-screen bg-cover bg-center  md:px-40"
      style={{ backgroundImage: `url(${Herobg})` }}
    >
      <div className="bg-gradient-to-t absolute top-0 bottom-0 left-0 right-0 to-[#061a33] from-[#173306]/80"></div>
      {/* Slider */}
      <Slider ref={sliderRef} {...settings}>
        {[1, 2, 3, 4].map((_, index) => {
          return (
            <div key={index} className=" ">
              <div className="flex items-center md:flex-row flex-col-reverse h-full justify-between p-5 md:p-10 gap-10">
                <div className="2xl:max-w-[670px] md:max-w-[35vw] w-full text-white">
                  <h2 className=" text-2xl md:text-3xl font-bold  ">
                    Penthouse Apartment with 5 Rooms in Kharadi, Pune
                  </h2>
                  <p className="mt-4 text-lg">
                    Penthouse apartment for sale located on Baner Road. With
                    this property, you can enjoy proximity to Baner Hill Forest
                    and the benefits of a luxury residential area. Lorem ipsum
                    dolor, sit amet consectetur adipisicing elit. Dicta eveniet
                    aut voluptate optio, minus impedit.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-4 space-x-4">
                    <button onClick={()=>{
                      setDamacIsPopUpOpen(true)
                    }} className="bg-logoColor cursor-pointer hover:bg-logoColor/90 text-white px-6 py-3 rounded">
                    Event Enquiry
                    </button>
                    <button className="   px-6 py-3 rounded hover:bg-white md:bg-transparent bg-white md:text-white text-black hover:text-black">
                      See All Apartments
                    </button>
                  </div>
                </div>

                {/* Right Side Image with Price Tag */}
                <div className="md:size-96 size-80 relative ">
                  <div className="relative rounded-full overflow-hidden  ">
                    <img
                      src={SliderImg1}
                      alt="Penthouse"
                      className="rounded-full  border-[5px] border-white shadow-lg"
                    />

                    <div className="text-end text-xs md:text-lg mt-3 absolute bottom-16  left-0 right-0 md:pr-12 pr-8   bg-white font-bold text-gray-400 p-4">
                      PENTHOUSE APARTMENT
                    </div>
                  </div>
                  <div className="absolute left-0 bottom-7 border-[5px] border-white bg-logoColor size-32 flex items-center justify-center z-10 text-white px-4 py-2 rounded-full text-lg font-semibold">
                    ₹13,200,00
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>

      {/* Custom Arrows */}
      <div className="flex md:block gap-5 z-10 md:static relative justify-center items-center w-full ">
      <button
        className="md:absolute md:top-1/2 md:left-20 md:transform md:-translate-y-1/2 bg-black/50 hover:bg-white/40 text-white p-3 "
        onClick={() => sliderRef.current.slickPrev()}
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        className="md:absolute md:top-1/2 md:right-20 md:transform md:-translate-y-1/2 bg-black/50 hover:bg-white/40 text-white p-3 "
        onClick={() => sliderRef.current.slickNext()}
      >
        <FaChevronRight size={24} />
      </button>
      </div>
    </div>
  );
};

export default HeroSection;
