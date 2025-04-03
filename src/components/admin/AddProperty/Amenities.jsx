import React, { useContext } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { CiDumbbell } from "react-icons/ci";
import { FaCloudSunRain } from "react-icons/fa6";
import { GiCctvCamera, GiKidSlide, GiRailway } from "react-icons/gi";
import { GrCafeteria, GrGamepad } from "react-icons/gr";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { LuPartyPopper } from "react-icons/lu";
import { MdElderlyWoman, MdOutlineDeck, MdPool } from "react-icons/md";
import { PiSwimmingPool } from "react-icons/pi";
import { TbMichelinStarGreen } from "react-icons/tb";
import { MyContext } from "../../../App";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
const baseUrl = import.meta.env.VITE_APP_URL;

const amenitiesData = [
  { icon: <PiSwimmingPool />, text: "Swimming pool" },
  { icon: <MdOutlineDeck />, text: "Meditation deck" },
  { icon: <GiRailway />, text: "Multipurpose court" },
  { icon: <GiKidSlide />, text: "Kids' play area" },
  { icon: <LuPartyPopper />, text: "Party hall" },
  { icon: <MdPool />, text: "Kids' pool " },
  { icon: <MdElderlyWoman />, text: "Elderly corner" },
  { icon: <TbMichelinStarGreen />, text: "Green landscaping" },
  { icon: <GiCctvCamera />, text: "CCTV in key areas" },
  { icon: <CiDumbbell />, text: "World class gym" },
  { icon: <GrGamepad />, text: "Indoor games room" },
  { icon: <HiOutlineBuildingLibrary />, text: "Library" },
  { icon: <FaCloudSunRain />, text: "Rainwater harvesting" },
  { icon: <GrCafeteria />, text: "Cafe" },
];
const Amenities = ({ action }) => {
  const { formData, setFormData } = useContext(MyContext);
  const { pathname } = useLocation();
  const id = pathname.split("/").pop();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log(formData);

    if (action === "edit") {
      const response = await fetch(baseUrl + "/edit-property/" + id, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send formData as JSON
      });
      if (response.ok) {
        // Optionally reset form data or provide user feedback
        setFormData({
          // Basic Property Information
          title: "",
          description: "",
          propertyType: "",
          status: "",
          constructionYear: "",
          price: [],
          discount: "",

          // Media
          galleryImg: [{ name: "" }],

          // Location Details
          address: "",
          state: "",
          city: "",

          //Details
          floorPlan: [{ type: "", carpetArea: "", price: "" }],
          faqs: [{ question: "", answer: "" }],

          // keyword
          keywords: [{ heading: "", keyword: [] }],

          // amenities
          amenities: [],
        });
        Swal.fire({
          title: "Success!",
          text: "Property edited successfully",
          confirmButtonColor: "#036672",
          icon: "success",
          customClass: {
            confirmButton:
              "bg-black shadow-gray-600 hover:shadow-lg transition-all duration-200 py-2 px-10 mt-4 text-white rounded-md hover:scale-110",
          },
          buttonsStyling: false,
        });
      } else {
        // Handle validation or server errors
        const errorData = await response.json();
        console.error("Error adding property:", errorData);

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to add property",
          customClass: {
            confirmButton:
              "bg-black shadow-gray-600 hover:shadow-lg transition-all duration-200 py-2 px-10 mt-4 text-white rounded-md hover:scale-110",
          },
        });
      }
    } else {
      try {
        // Make API call to submit the form data
        const response = await fetch(baseUrl + "/add-property", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData), // Send formData as JSON
        });

        // Handle the response
        if (response.ok) {
          const result = await response.json();
          console.log("Property added successfully:", result);

          Swal.fire({
            title: "Success!",
            text: "Property added successfully",
            confirmButtonColor: "#036672",
            icon: "success",
            customClass: {
              confirmButton:
                "bg-black shadow-gray-600 hover:shadow-lg transition-all duration-200 py-2 px-10 mt-4 text-white rounded-md hover:scale-110",
            },
            buttonsStyling: false,
          });

          // Optionally reset form data or provide user feedback
          setFormData({
            // Basic Property Information
            title: "",
            description: "",
            propertyType: "",
            status: "",
            constructionYear: "",
            price: [],
            discount: "",

            // Media
            galleryImg: [{ name: "" }],

            // Location Details
            address: "",
            state: "",
            city: "",

            //Details
            floorPlan: [{ type: "", carpetArea: "", price: "" }],
            faqs: [{ question: "", answer: "" }],

            // keyword
            keywords: [{ heading: "", keyword: [] }],

            // amenities
            amenities: [],
          });
        } else {
          // Handle validation or server errors
          const errorData = await response.json();

          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to add property",
            customClass: {
              confirmButton:
                "bg-black shadow-gray-600 hover:shadow-lg transition-all duration-200 py-2 px-10 mt-4 text-white rounded-md hover:scale-110",
            },
          });
        }
      } catch (error) {
        // Handle network or unexpected errors
        console.error("Network error:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to add property",
          customClass: {
            confirmButton:
              "bg-black shadow-gray-600 hover:shadow-lg transition-all duration-200 py-2 px-10 mt-4 text-white rounded-md hover:scale-110",
          },
        });
      }
    }
  };
  // Determine if all amenities are selected
  const isAllSelected = formData.amenities.length === amenitiesData.length;

  // Handle toggling the "Select All" checkbox
  const handleSelectAllToggle = () => {
    if (isAllSelected) {
      // Deselect all
      setFormData((prevData) => ({
        ...prevData,
        amenities: [],
      }));
    } else {
      // Select all
      const allAmenities = amenitiesData.map((amenity) => amenity.text);
      setFormData((prevData) => ({
        ...prevData,
        amenities: allAmenities,
      }));
    }
  };

  // Handle individual checkbox toggle
  const handleChange = (e) => {
    const { id, checked } = e.target;

    setFormData((prevData) => {
      const updatedAmenities = checked
        ? [...(prevData.amenities || []), id]
        : (prevData.amenities || []).filter((amenity) => amenity !== id);

      return {
        ...prevData,
        amenities: updatedAmenities,
      };
    });
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="flex items-center justify-between">
        <p className="text-[17px] leading-[25.5px] font-semibold">
          Select Amenities
        </p>

        <div className="flex   items-center gap-2 ">
          <input
            onClick={handleSelectAllToggle}
            type="checkbox"
            id="select-all"
            className="w-4 cursor-pointer rounded h-4"
            checked={isAllSelected}
          />
          <label htmlFor="select-all">Select All</label>
        </div>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5">
        {amenitiesData.map(({ icon, text }, index) => {
          return (
            <div key={index} className="flex gap-1 items-start">
              <input
                id={text}
                type="checkbox"
                checked={formData.amenities.includes(text)}
                onChange={handleChange}
                className="w-4 h-4 bg-black cursor-pointer border-black rounded focus:ring-0 checked:bg-black"
              />
              <label
                htmlFor={text}
                className="text-[15px] flex items-start gap-1 text-gray-700"
              >
                {icon} {text}
              </label>
            </div>
          );
        })}
      </div>

      <div className="flex justify-start">
        <button
          type="submit"
          className="text-[15px] px-2 md:px-5 py-4 flex mt-5 items-center bg-black rounded-lg text-white"
        >
          Submit
          <GoArrowUpRight className="text-xl" />
        </button>
      </div>
    </form>
  );
};

export default Amenities;
