import React, { useContext, useState, useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";
import { MyContext } from "../../../App";

const Keywords = ({setIsActive}) => {
  const { formData, setFormData } = useContext(MyContext);

  const [keywords, setKeywords] = useState(
    formData.keywords || [{ heading: "", keyword: [] }]
  );

  // Sync `keywords` state with `formData` in context
  useEffect(() => {
    setFormData((prev) => ({ ...prev, keywords }));
  }, [keywords, setFormData]);

  const handleKeywordChange = (index, field, value) => {
    const updatedKeywords = [...keywords];
    updatedKeywords[index][field] = value;
    setKeywords(updatedKeywords);
  };

  const addKeyword = (index, value) => {
    const updatedKeywords = [...keywords];
    updatedKeywords[index].keyword.push(value);
    setKeywords(updatedKeywords);
  };

  const addKeywordSection = () => {
    setKeywords([...keywords, { heading: "", keyword: [] }]);
  };

  const removeKeywordSection = () => {
    if (keywords.length > 1) {
      setKeywords(keywords.slice(0, -1));
    }
  };

   

  return (
    <div className="space-y-5">
      <p className="text-[17px] leading-[25.5px] font-semibold">Listing Keywords</p>

      <div className="border border-dashed border-gray-500 rounded-md p-5 lg:p-10 ">
        <p className="text-lg font-semibold leading-[26px] text-center">Keywords</p>

        {keywords.map((item, index) => (
          <div className="space-y-5" key={index}>
            <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor={`heading-${index}`}
                  className="text-[14px] font-semibold leading-[26px]"
                >
                  Heading
                </label>
                <input
                  type="text"
                  id={`heading-${index}`}
                  value={item.heading || ""}
                  onChange={(e) =>
                    handleKeywordChange(index, "heading", e.target.value)
                  }
                  className="border-[1px] px-2 rounded-lg h-14 border-gray-300 text-sm py-3 w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor={`keyword-${index}`}
                  className="text-[14px] font-semibold leading-[26px]"
                >
                  Add a Keyword
                </label>
                <div className="flex items-center gap-3 w-full">
                  <input
                    type="text"
                    id={`keyword-${index}`}
                    placeholder="Enter a keyword"
                    className="border-[1px] px-2 rounded-lg h-14 border-gray-300 text-sm py-3 w-full"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && e.target.value.trim()) {
                        addKeyword(index, e.target.value.trim());
                        e.target.value = ""; // Clear input field
                      }
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="h-32 overflow-y-auto p-4 rounded-lg w-full bg-gray-100 shadow-inner">
                <p className="text-sm">{item.heading || ""}</p>
              <div className="flex flex-wrap gap-5 py-3 items-start justify-start">
                {item.keyword.map((kw, kwIndex) => (
                  <span
                    key={kwIndex}
                    className="px-2 py-1 bg-white rounded-lg border text-sm"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="mt-2 gap-3 flex justify-end">
          <IoIosRemoveCircle
            onClick={removeKeywordSection}
            className="text-black rounded-full w-10 h-10 cursor-pointer"
          />
          <IoIosAddCircle
            onClick={addKeywordSection}
            className="text-black rounded-full w-10 h-10 cursor-pointer"
          />
        </div>
      </div>

      <div className="flex justify-start">
        <button
          onClick={()=>setIsActive(6)}
          className="text-[15px] px-2 md:px-5 py-4 flex mt-5 items-center bg-black rounded-lg text-white"
        >
          Next
          <GoArrowUpRight className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Keywords;
