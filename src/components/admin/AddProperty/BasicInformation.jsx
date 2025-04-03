import React, { useContext } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { MyContext } from "../../../App";

const BasicInformation = ({ setIsActive }) => {
  const { formData, setFormData } = useContext(MyContext);
   const handleChange = (e) => {
    const { id, value } = e.target;
    const specialCharRegex = /[^a-zA-Z0-9\s]/;

    // Directly update the constructionYear value
    if (id === "constructionYear") {
      setFormData((prevData) => ({ ...prevData, constructionYear: value }));
      return;
    }

    // Handle validation for specific fields
    const fieldsToValidate = ["title"];
    if (fieldsToValidate.includes(id)) {
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
        [`${id}Error`]: specialCharRegex.test(value)
          ? `Special characters are not allowed in ${id.replace(/([A-Z])/g, " $1")}.`
          : "",
      }));
      return;
    }

    // Default case: update the state
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };


 

  return (
    <div className="space-y-5 ">
      <p className="text-[17px] leading-[25.5px]  font-semibold">
      Basic Information
      </p>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="title"
          className="text-[14px] font-semibold leading-[26px]"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Property Title"
          className="border-[1px] px-2 rounded-lg h-14 border-gray-300 text-sm py-3"
        />
        {formData.titleError && (
          <p className="text-red-500 text-xs mt-1">{formData.titleError}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="description"
          className="text-[14px] font-semibold leading-[26px]"
        >
          Description
        </label>
        <input
          type="text"
          id="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="border-[1px] px-2 rounded-lg h-14 border-gray-300 text-sm py-3"
        />
        {formData.descriptionError && (
          <p className="text-red-500 text-xs mt-1">{formData.descriptionError}</p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-[14px] font-semibold leading-[26px]">
          Property Type
        </p>
        <ul className="items-center w-full text-sm   text-gray-700   border border-gray-200 rounded-lg sm:flex      ">
          <li className="w-full border-b border-gray-200 rounded-lg    sm:border-b-0 sm:border-r  ">
            <div className="flex items-center ps-3">
              <input
                value="Residential"
                id="Residential"
                type="radio"
                name="propertyType"
                checked={formData.propertyType === "Residential"}
                onChange={handleRadioChange}
                className=" border-[1px] px-2 rounded-lg h-14 border-gray-300 text-sm py-3"
              />
              <label
                htmlFor="Residential"
                className="w-full py-3 ms-2 text-sm   text-gray-700  "
              >
                Residential
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200   sm:border-b-0 sm:border-r">
            <div className="flex items-center ps-3">
              <input
                value="Commercial"
                id="Commercial"
                type="radio"
                name="propertyType"
                checked={formData.propertyType === "Commercial"}
                onChange={handleRadioChange}
                className=" border-[1px] px-2 rounded-lg h-14 border-gray-300 text-sm py-3"
              />
              <label
                htmlFor="Commercial"
                className="w-full py-3 ms-2 text-sm   text-gray-700  "
              >
                Commercial
              </label>
            </div>
          </li>
          <li className="w-full rounded-lg border-b border-gray-200   sm:border-b-0 sm:border-r  ">
            <div className="flex items-center ps-3">
              <input
                value="Plot or Land"
                id="Plot or Land"
                type="radio"
                name="propertyType"
                checked={formData.propertyType === "Plot or Land"}
                onChange={handleRadioChange}
                className=" border-[1px] px-2 rounded-lg h-14 border-gray-300 text-sm py-3"
              />
              <label
                htmlFor="Plot or Land"
                className="w-full py-3 ms-2 text-sm   text-gray-900  "
              >
                Plot or Land
              </label>
            </div>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="Status"
          className="text-[14px] font-semibold leading-[26px]"
        >
          Status
        </label>

        <ul className="items-center w-full text-sm   text-gray-700   border border-gray-200 rounded-lg md:flex      ">
          <li className="w-full border-b border-gray-200 rounded-lg    sm:border-b-0 sm:border-r  ">
            <div className="flex items-center ps-3">
              <input
                value="Available"
                id="Available"
                type="radio"
                name="status"
                checked={formData.status === "Available"}
                onChange={handleRadioChange}
                className=" border-[1px] px-2 rounded-lg h-14 border-gray-300 text-sm py-3"
              />
              <label
                htmlFor="Available"
                className="w-full py-3 ms-2 text-sm   text-gray-700  "
              >
                Available
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200   sm:border-b-0 sm:border-r  ">
            <div className="flex items-center ps-3">
              <input
                value="Sold"
                id="Sold"
                type="radio"
                name="status"
                checked={formData.status === "Sold"}
                onChange={handleRadioChange}
                className=" border-[1px] px-2 rounded-lg h-14 border-gray-300 text-sm py-3"
              />
              <label
                htmlFor="Sold"
                className="w-full py-3 ms-2 text-sm   text-gray-700  "
              >
                Sold
              </label>
            </div>
          </li>
        
          <li className="w-full rounded-lg border-b border-gray-200   sm:border-b-0 sm:border-r  ">
            <div className="flex items-center ps-3">
              <input
                value="Rented"
                id="Rented"
                type="radio"
                name="status"
                checked={formData.status === "Rented"}
                onChange={handleRadioChange}
                className=" border-[1px] px-2 rounded-lg h-14 border-gray-300 text-sm py-3"
              />
              <label
                htmlFor="Rented"
                className="w-full py-3 ms-2 text-sm   text-gray-900  "
              >
                Rented
              </label>
            </div>
          </li>
          <li className="w-full rounded-lg border-b border-gray-200   sm:border-b-0 sm:border-r  ">
            <div className="flex items-center ps-3">
              <input
                value="Under Construction"
                id="Under Construction"
                type="radio"
                name="status"
                checked={formData.status === "Under Construction"}
                onChange={handleRadioChange}
                className=" border-[1px] px-2 rounded-lg h-14 border-gray-300 text-sm py-3"
              />
              <label
                htmlFor="Under Construction"
                className="w-full py-3 ms-2 text-sm   text-gray-900  "
              >
                Under Construction
              </label>
            </div>
          </li>
          
        </ul>
      </div>

       
      <div className="flex flex-col gap-2">
        <label
          htmlFor="constructionYear"
          className="text-[14px] font-semibold leading-[26px]"
        >
         Construction Year
        </label>
        <input
          type="date"
          id="constructionYear"
          value={formData.constructionYear}
          onChange={handleChange}
          className=" border-[1px] px-2 rounded-lg h-14 border-gray-300 text-sm py-3"
        />
      </div>

     
      <div className="flex flex-col gap-2">
        <label
          htmlFor="price"
          className="text-[14px] font-semibold leading-[26px]"
        >
          Price
        </label>
        <input
          type="text"
          id="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Property price"
          className="border-[1px] px-2 rounded-lg h-14 border-gray-300 text-sm py-3"
        />
        {formData.priceError && (
          <p className="text-red-500 text-xs mt-1">{formData.priceError}</p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="discount"
          className="text-[14px] font-semibold leading-[26px]"
        >
          Discount
        </label>
        <input
          type="text"
          id="discount"
          value={formData.discount}
          onChange={handleChange}
          placeholder="Property discount"
          className="border-[1px] px-2 rounded-lg h-14 border-gray-300 text-sm py-3"
        />
        {formData.discountError && (
          <p className="text-red-500 text-xs mt-1">{formData.discountError}</p>
        )}
      </div>
      <div className="flex justify-start">
        <button
          onClick={() => setIsActive(2)}
          className="text-[15px] px-2 md:px-5 py-4 flex mt-5   items-center bg-black rounded-lg text-white"
        >
          Next
          <GoArrowUpRight className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default BasicInformation; 