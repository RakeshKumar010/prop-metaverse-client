import React, { useContext } from "react";
import { MdClose } from "react-icons/md";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";
import { MyContext } from "../../../App";

const DamacDetailsPopUp = () => {
  const { setDamacDetailsIsPopUpOpen,setDamacIsPopUpOpen ,setIsPopUpOpen} = useContext(MyContext);

  return (
    <div className="fixed flex items-center justify-center z-[52] top-0 bottom-0 left-0 right-0 backdrop-blur-xs bg-black/50 md:bg-black/30">
      <div className="md:py-16 px-6 md:px-16 md:w-[90vw] w-[100vw] text-center">
        <div className="max-w-5xl mx-auto mt-2 md:mt-4 relative bg-white text-gray-800 md:px-8 px-3 py-3 md:py-8 rounded-lg shadow-lg border-2 border-[#5eb239] ">
          {/* Close Button */}
          <MdClose
            onClick={() => setDamacDetailsIsPopUpOpen(false)}
            className="text-2xl absolute cursor-pointer right-2 top-2 text-[#1264a5] border-2 border-[#1264a5] rounded-full p-1 hover:bg-[#5eb239] hover:text-white transition-all"
          />

          {/* Event Details */}
          <h2 className="text-xl pb-1 md:text-3xl font-bold text-[#1264a5]">
          <span className="hidden md:inline">  ✨</span> Join Us at the Exclusive Property Show!  <span className="hidden md:inline"> ✨</span>
          </h2>
          <div className="md:h-auto max-h-[70vh] md:overflow-hidden overflow-scroll">
            <p className="mt-2 text-gray-700 md:text-lg px-1 leading-relaxed">
              Discover luxury, elegance, and unparalleled opportunities with
              DAMAC Properties at our exclusive property show. Explore a wide
              range of premium residential and commercial options in the heart
              of Dubai. The DAMAC team will be on-site to showcase their latest
              developments, answer all your questions, and help you find your
              perfect investment.
            </p>

            <div className="mt-4 p-4 bg-[#5eb239]/10 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#5eb239]">
                🌟 Event Highlights
              </h3>
              <ul className="text-left mt-2 space-y-2 text-gray-700">
                <li className="grid grid-cols-[auto_1fr] gap-2">
                  <FaCheckCircle className="text-[#5eb239]  mt-2" /> Meet the DAMAC
                  team and explore exclusive offers.
                </li>
                <li className="grid grid-cols-[auto_1fr] gap-2">
                  <FaCheckCircle className="text-[#5eb239]  mt-2" /> Discover a
                  variety of stunning properties available in Dubai.
                </li>
                <li className="grid grid-cols-[auto_1fr] gap-2">
                  <FaCheckCircle className="text-[#5eb239]  mt-2" /> Get expert advice
                  and insights on investment opportunities.
                </li>
                <li className="grid grid-cols-[auto_1fr] gap-2">
                  <FaCheckCircle className="text-[#5eb239]  mt-2" /> Enjoy a
                  personalized tour of DAMAC’s most sought-after developments.
                </li>
              </ul>
            </div>

            <div className="mt-6 p-4 bg-[#1264a5]/10 rounded-lg shadow-md border-l-4 border-[#1264a5]">
              <h3 className="text-xl font-semibold text-[#1264a5]">
                📅 Event Details
              </h3>
              <p className="mt-2 text-gray-800 flex items-center gap-2">
                <FaCalendarAlt className="text-[#1264a5]" />{" "}
                <strong>Date:</strong> [Insert Date]
              </p>
              <p className="text-gray-800 flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#1264a5]" />{" "}
                <strong>Location:</strong> [Insert Location]
              </p>
              <p className="text-gray-800 flex items-center gap-2">
                <FaClock className="text-[#1264a5]" /> <strong>Time:</strong>{" "}
                [Insert Time]
              </p>
              <p className="text-red-500 font-semibold mt-2">
                *Attendance by invitation only.*
              </p>
            </div>
          </div>
          <button onClick={()=>{
            setDamacIsPopUpOpen(true)
            setDamacDetailsIsPopUpOpen(false)
            setIsPopUpOpen(false)
          }}
           className="mt-4  px-8 py-3 bg-gradient-to-r transition-all   from-[#5eb239] to-[#1264a5] hover:from-[#1264a5] hover:to-[#5eb239] text-white rounded-lg text-lg font-semibold shadow-md ">

            🚀 Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DamacDetailsPopUp;
