import React, { useContext, useEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";
import { MyContext } from "../../../App";

const Details = ({ setIsActive }) => {
  const { formData, setFormData } = useContext(MyContext);
  // Initializing states
  const [floorPlan, setfloorPlan] = useState(
    formData.floorPlan || [{ type: "", carpetArea: "", price: "" }]
  );
 
  const [faqs, setFaqs] = useState(
    formData.faqs || [{ question: "", answer: "" }]
  );

  // Synchronize rera with formData
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      floorPlan, 
      faqs,
    }));
  }, [floorPlan, faqs, setFormData]);

  const handleProductChange = (index, field, value) => {
    const updatedfloorPlan = [...floorPlan];
    updatedfloorPlan[index][field] = value;
    setfloorPlan(updatedfloorPlan);
  };

  
  const handleFaqChange = (index, field, value) => {
    const updatedFaq = [...faqs];
    updatedFaq[index][field] = value;
    setFaqs(updatedFaq);
  };

  return (
    <from className="space-y-5">
      <p className="text-[17px] leading-[25.5px] font-semibold">
        Listing Details
      </p>

      {/* floorPlan Section */}
      <div className="border border-dashed border-gray-500 rounded-md p-5 lg:p-10">
        <p className="text-lg font-semibold leading-[26px] text-center">
          Floor Plan
        </p>
        {floorPlan.map((_, index) => (
          <div
            key={index}
            className="grid mt-5 md:grid-cols-3  grid-cols-1 gap-4"
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor={`type-${index}`}
                className="text-[14px] font-semibold leading-[26px]"
              >
                Type
              </label>
              <input
                type="text"
                id={`type-${index}`}
                value={floorPlan[index].type || ""}
                onChange={(e) =>
                  handleProductChange(index, "type", e.target.value)
                }
                className="border-[1px] px-2 rounded-lg h-14 border-gray-300 text-sm py-3 w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor={`carpetArea-${index}`}
                className="text-[14px] font-semibold leading-[26px]"
              >
                Carpet area (ft²)
              </label>
              <input
                type="text"
                id={`carpetArea-${index}`}
                value={floorPlan[index].carpetArea || ""}
                onChange={(e) =>
                  handleProductChange(index, "carpetArea", e.target.value)
                }
                className="border-[1px] px-2 rounded-lg h-14 border-gray-300 text-sm py-3 w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor={`price-${index}`}
                className="text-[14px] font-semibold leading-[26px]"
              >
                Price
              </label>
              <input
                type="text"
                id={`price-${index}`}
                value={floorPlan[index].price || ""}
                onChange={(e) =>
                  handleProductChange(index, "price", e.target.value)
                }
                className="border-[1px] px-2 rounded-lg h-14 border-gray-300 text-sm py-3 w-full"
              />
            </div>
          </div>
        ))}
        <div className="mt-2 gap-3 flex justify-end">
          <IoIosRemoveCircle
            onClick={() => {
              if (floorPlan.length > 1) {
                setfloorPlan(floorPlan.slice(0, -1));
              }
            }}
            className="text-black rounded-full w-10 h-10 cursor-pointer"
          />
          <IoIosAddCircle
            onClick={() =>
              setfloorPlan([
                ...floorPlan,
                { type: "", carpetArea: "", price: "" },
              ])
            }
            className="text-black rounded-full w-10 h-10 cursor-pointer"
          />
        </div>
      </div>

       

      <div className="border border-dashed border-gray-500 rounded-md p-5 lg:p-10 ">
        <p className="text-lg font-semibold leading-[26px] text-center">FAQ</p>

        {faqs.map((_, index) => {
          return (
            <div
              key={index}
              className="  mt-5 grid grid-cols-1 lg:grid-cols-2 gap-4 "
            >
              <div className="flex flex-col gap-2">
                <label
                  htmlFor={`question-${index}`}
                  className="text-[14px] font-semibold leading-[26px]"
                >
                  Questions
                </label>
                <input
                  type="text"
                  id={`question-${index}`}
                  value={faqs[index].question || ""}
                  onChange={(e) => {
                    handleFaqChange(index, "question", e.target.value);
                  }}
                  className=" border-[1px] px-2 rounded-lg h-14 border-gray-300 text-sm py-3 w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor={`answer-${index}`}
                  className="text-[14px] font-semibold leading-[26px]"
                >
                  Answers
                </label>
                <input
                  type="text"
                  id={`answer-${index}`}
                  value={faqs[index].answer || ""}
                  onChange={(e) => {
                    handleFaqChange(index, "answer", e.target.value);
                  }}
                  className=" border-[1px] px-2 rounded-lg h-14 border-gray-300 text-sm py-3 w-full"
                />
              </div>
            </div>
          );
        })}

        <div className="mt-2 gap-3 flex justify-end">
          <IoIosRemoveCircle
            onClick={() => {
              if (faqs.length > 1) {
                setFaqs(faqs.slice(0, -1));
              }
            }}
            className="text-black rounded-full w-10 h-10 cursor-pointer"
          />
          <IoIosAddCircle
            onClick={() => setFaqs([...faqs, { question: "", answer: "" }])}
            className="text-black rounded-full w-10 h-10 cursor-pointer"
          />
        </div>
      </div>

      <div className="flex justify-start">
        <button
        onClick={()=>{
          setIsActive(5)
        }}
          type="submit"
          className="text-[15px] px-2 md:px-5 py-4 flex mt-5 items-center bg-black rounded-lg text-white"
        >
          Next
          <GoArrowUpRight className="text-xl" />
        </button>
      </div>
    </from>
  );
};

export default Details;
