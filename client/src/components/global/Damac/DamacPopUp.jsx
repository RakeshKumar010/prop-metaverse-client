import React, { useState, useContext } from "react";
import { MdClose, MdArrowDownward } from "react-icons/md"; // Import the down arrow icon
import { MyContext } from "../../../App";
const baseUrl = import.meta.env.VITE_APP_URL;

const DamacPopUp = () => {
  const { setDamacIsPopUpOpen, formData, setFormData, setDamacOtpPopUpOpen } =
    useContext(MyContext);
  const [isSubmitted, setIsSubmitted] = useState(false); // Track submission

  // State to store form data

  // Handle input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    
    setIsSubmitted(true);
    setDamacIsPopUpOpen(false)
    setDamacOtpPopUpOpen(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 1000);
  };

  // Function to scroll the form container down
  const scrollDown = () => {
    const formContainer = document.querySelector(".form-container");
    if (formContainer) {
      formContainer.scrollBy({
        top: 200, // Adjust the scroll amount as needed
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed flex items-center justify-center z-[53] top-0 bottom-0 left-0 right-0 backdrop-blur-xs bg-black/50 md:bg-black/30">
      <div className="md:py-16 px-6 md:px-16 md:w-[80vw] w-[100vw] text-center">
        <div className="max-w-4xl mx-auto mt-2 md:mt-4 relative bg-white text-gray-800 md:px-8 px-3 py-3 md:py-8 rounded-lg shadow-lg">
          <h2 className="text-xl pb-1 md:text-3xl font-bold text-[#1264a5]">
            <span className="hidden md:inline"> ✨</span> DAMAC Property Event{" "}
            <span className="hidden md:inline"> ✨</span>
          </h2>
          <p className="text-gray-600 mb-6">Registration Form</p>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="form-container p-1 relative grid grid-cols-1  md:grid-cols-2 gap-3 md:gap-6 md:h-auto max-h-[50vh] md:overflow-auto overflow-scroll">
              {/* Name */}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="md:p-3 p-2 md:text-base text-sm rounded-lg bg-gray-100 text-gray-800 outline-none focus:ring-2 focus:ring-green-500"
                required
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="md:p-3 p-2 md:text-base text-sm rounded-lg bg-gray-100 text-gray-800 outline-none focus:ring-2 focus:ring-green-500"
                required
              />

              {/* Phone Number */}
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="md:p-3 p-2 md:text-base text-sm rounded-lg bg-gray-100 text-gray-800 outline-none focus:ring-2 focus:ring-green-500"
                required
              />

              {/* Gender */}
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={`md:p-3 p-2 md:text-base text-sm rounded-lg bg-gray-100 outline-none focus:ring-2 focus:ring-green-500 ${
                  formData.gender ? "text-gray-800" : "text-gray-400"
                }`}
              >
                <option value="" disabled>
                  Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {/* City */}
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="md:p-3 p-2 md:text-base text-sm rounded-lg bg-gray-100 text-gray-800 outline-none focus:ring-2 focus:ring-green-500"
              />
              {/* Country */}
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
                className="md:p-3 p-2 md:text-base text-sm rounded-lg bg-gray-100 text-gray-800 outline-none focus:ring-2 focus:ring-green-500"
              />
              {/* new code  */}

              {/* Interested In */}
              <select
                name="interestedIn"
                value={formData.interestedIn}
                onChange={(e) =>
                  setFormData({ ...formData, interestedIn: e.target.value })
                }
                className={`md:p-3 p-2 md:text-base text-sm rounded-lg bg-gray-100 outline-none focus:ring-2 focus:ring-green-500 ${
                  formData.interestedIn ? "text-gray-800" : "text-gray-400"
                }`}
                required
              >
                <option value="" disabled>
                  Interested In
                </option>
                {["Residential", "Office", "Commercial"].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              {/* Interest Type */}
              <select
                name="interestType"
                value={formData.interestType}
                onChange={(e) =>
                  setFormData({ ...formData, interestType: e.target.value })
                }
                className={`md:p-3 p-2 md:text-base text-sm rounded-lg bg-gray-100 outline-none focus:ring-2 focus:ring-green-500 ${
                  formData.interestType ? "text-gray-800" : "text-gray-400"
                }`}
                required
              >
                <option value="" disabled>
                  Interest Type
                </option>
                {["Investor", "Self Use", "Knowledge"].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              {/* Planned Window */}
              <select
                name="plannedWindow"
                value={formData.plannedWindow}
                onChange={(e) =>
                  setFormData({ ...formData, plannedWindow: e.target.value })
                }
                className={`md:p-3 p-2 md:text-base text-sm rounded-lg bg-gray-100 outline-none focus:ring-2 focus:ring-green-500 ${
                  formData.plannedWindow ? "text-gray-800" : "text-gray-400"
                }`}
                required
              >
                <option value="" disabled>
                  Planned Window
                </option>
                {[
                  "within 30 days",
                  "within 30-60 days",
                  "within 60-90 days",
                  "beyond 90 days",
                ].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              {/* Budget (INR) */}
              <select
                name="budget"
                value={formData.budget}
                onChange={(e) =>
                  setFormData({ ...formData, budget: e.target.value })
                }
                className={`md:p-3 p-2 md:text-base text-sm rounded-lg bg-gray-100 outline-none focus:ring-2 focus:ring-green-500 ${
                  formData.budget ? "text-gray-800" : "text-gray-400"
                }`}
                required
              >
                <option value="" disabled>
                  Select Budget Range
                </option>
                {[
                  "50 lakhs - 1 Cr",
                  "1cr to 2 cr",
                  "2cr to 3cr",
                  "3cr and above",
                ].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {/* Scroll Down Button (Visible only in mobile view) */}
              <div className="md:hidden flex justify-center mt-4 fixed bottom-40 z-10 right-1/2 translate-x-1/2">
                <button
                  type="button"
                  onClick={scrollDown}
                  className="p-2 bg-logoColor text-white animate-bounce rounded-full shadow-lg hover:bg-logoColor/90 transition-all"
                >
                  <MdArrowDownward className="text-2xl" />
                </button>
              </div>
            </div>

            <div className=" mt-5">
              <label className="flex items-start md:items-center text-start">
                <input
                  type="checkbox"
                  required
                  checked={formData.acceptUpdates}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      acceptUpdates: e.target.checked,
                    })
                  }
                  className="mr-2 mt-2"
                />
                <span className="text-gray-700  ">
                  We would like to send product updates and promotions once
                  every 15 days *
                </span>
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-4 relative  px-8 py-3 bg-gradient-to-r transition-all   from-[#5eb239] to-[#1264a5] hover:from-[#1264a5] hover:to-[#5eb239] text-white rounded-lg text-lg font-semibold shadow-md "
              >
                <div
                  className={`text-logoColor bg-white p-1 absolute text-nowrap  right-[50%] translate-x-[50%] transition-all duration-500   -top-10  text-lg font-bold ${
                    isSubmitted ? "black" : "hidden"
                  }`}
                >
                  Send OTP!
                </div>
                <span className="font-semibold text-white">Submit</span>
              </button>
            </div>
          </form>

          {/* Close Button */}
          <MdClose
            onClick={() => setDamacIsPopUpOpen(false)}
            className="text-2xl absolute cursor-pointer right-2 top-2 text-black border-2 border-black rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default DamacPopUp;
