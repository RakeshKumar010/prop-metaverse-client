import React, { useState, useContext } from "react";
import { MdClose } from "react-icons/md"; // Import the down arrow icon
import { MyContext } from "../../../App";
const baseUrl = import.meta.env.VITE_APP_URL;

const DamacOtpPupUp = () => {
  const {setDamacOtpPopUpOpen, formData, setFormData } = useContext(MyContext);
  const [isSubmitted, setIsSubmitted] = useState(false); // Track submission
  const [otp, setOtp] = useState("");
  // Handle input change
  const handleChange = (e) => {
    const input = e.target.value;
    if (/^\d{0,6}$/.test(input)) {
      setOtp(input);
    }
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(otp);
    console.log(formData);
    

    const result = await fetch(baseUrl + "/add-damac-enquiry", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (result.ok) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        gender: "",
        city: "",
        country: "",
        interestedIn: "",
        interestType: "",
        plannedWindow: "",
        budget: "",
        acceptUpdates: false,
      });
      setIsSubmitted(true);
       
    }

    setTimeout(() => {
      setIsSubmitted(false);
      setDamacOtpPopUpOpen(false)

    }, 1000);
  };

  return (
    <div className="fixed flex items-center justify-center z-[53] top-0 bottom-0 left-0 right-0 backdrop-blur-xs bg-black/50 md:bg-black/30">
      <div className="md:py-16 px-6 md:px-16 md:w-[80vw] w-[100vw] text-center">
        <div className="max-w-4xl   mx-auto mt-2 md:mt-4 relative bg-white text-gray-800 md:px-8 px-3 py-3 md:py-8 rounded-lg shadow-lg">
          <h2 className="text-xl pb-1 md:text-3xl font-bold text-[#1264a5]">
            <span className="hidden md:inline"> ✨</span> DAMAC Property Event{" "}
            <span className="hidden md:inline"> ✨</span>
          </h2>
          <p className="text-gray-600 mb-6">
            Enter the OTP sent to your mobile
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="form-container p-1  grid grid-cols-1  md:grid-cols-[1fr_auto] gap-3 md:gap-6 md:h-auto   md:overflow-auto overflow-scroll">
              {/* OTP */}
              <input
                type="tel"
                name="otp"
                placeholder="Enter OTP"
                value={otp}
                onChange={handleChange}
                className="md:p-3 p-2 md:text-base text-sm rounded-lg bg-gray-100 text-gray-800 outline-none focus:ring-2 focus:ring-green-500"
                required
              />
             <div
                  className={`text-logoColor bg-white p-1 absolute text-nowrap  right-1/2 translate-x-1/2 md:-bottom-0 bottom-32 transition-all duration-500  text-lg font-bold  ${
                    isSubmitted ? "black" : "hidden"
                  }`}
                >
                  Enquiry Submitted Successfully!
                </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="    px-8 py-3 bg-gradient-to-r transition-all   from-[#5eb239] to-[#1264a5] hover:from-[#1264a5] hover:to-[#5eb239] text-white rounded-lg text-lg font-semibold shadow-md "
              >
                <span className="font-semibold text-white">Submit</span>
              </button>
            </div>
          </form>

          {/* Close Button */}
          <MdClose
            onClick={() => setDamacOtpPopUpOpen(false)}
            className="text-2xl absolute cursor-pointer right-2 top-2 text-black border-2 border-black rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default DamacOtpPupUp;
