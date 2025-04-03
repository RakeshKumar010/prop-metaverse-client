import React, { useContext, useCallback } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { MyContext } from "../../../App";
import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";

const Media = ({ setIsActive }) => {
  const { formData, setFormData } = useContext(MyContext);
  const MAX_IMAGES = 5; // Maximum allowed images
  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB in bytes

  // Handle file selection with validation
  const handleChange = useCallback((e, index) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      alert("File size exceeds 5MB limit");
      e.target.value = ""; // Reset input
      return;
    }

    // Validate file type
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file");
      e.target.value = ""; // Reset input
      return;
    }

    const fileURL = URL.createObjectURL(file);
    setFormData((prevData) => {
      const newGalleryImgs = [...(prevData.galleryImg || [])];
      newGalleryImgs[index] = { file, preview: fileURL };
      return { ...prevData, galleryImg: newGalleryImgs };
    });
  }, [setFormData]);

  // Add new gallery image field with limit check
  const addGalleryImg = useCallback(() => {
    if ((formData.galleryImg?.length || 0) >= MAX_IMAGES) {
      alert(`Maximum ${MAX_IMAGES} images allowed`);
      return;
    }
    setFormData((prevData) => ({
      ...prevData,
      galleryImg: [...(prevData.galleryImg || []), { file: null, preview: "" }],
    }));
  }, [formData.galleryImg, setFormData]);

  // Remove gallery image and clean up URL
  const removeGalleryImg = useCallback((index) => {
    setFormData((prevData) => {
      const newGalleryImgs = [...prevData.galleryImg];
      const removedItem = newGalleryImgs.splice(index, 1)[0];
      if (removedItem.preview) {
        URL.revokeObjectURL(removedItem.preview); // Clean up memory
      }
      return { ...prevData, galleryImg: newGalleryImgs };
    });
  }, [setFormData]);

  return (
    <div className="space-y-6 p-4">
      <div className="flex items-center justify-between">
        <p className="text-[17px] leading-[25.5px] font-semibold text-gray-800">
          Upload photos of your property
        </p>
        <span className="text-sm text-gray-500">
          {formData.galleryImg?.length || 0}/{MAX_IMAGES}
        </span>
      </div>

      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 bg-gray-50 transition-all hover:border-gray-400">
        {formData.galleryImg?.length > 0 ? (
          formData.galleryImg.map((item, index) => (
            <div
              key={index}
              className="mt-5 flex flex-col gap-3 animate-fadeIn"
            >
              <div className="flex items-center justify-between">
                <label
                  htmlFor={`galleryImg${index}`}
                  className="text-[14px] font-semibold text-gray-700"
                >
                  Gallery Image {index + 1}
                </label>
                <button
                  onClick={() => removeGalleryImg(index)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  Remove
                </button>
              </div>
              
              <div className="relative">
                <input
                  type="file"
                  id={`galleryImg${index}`}
                  onChange={(e) => handleChange(e, index)}
                  accept="image/*"
                  className="border-[1px] px-3 py-3 rounded-lg h-12 border-gray-300 text-sm w-full focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                />
                {item.preview && (
                  <div className="mt-3 flex justify-end">
                    <img
                      src={item.preview}
                      alt={`Gallery ${index + 1}`}
                      className="w-24 h-24 rounded-md object-cover shadow-sm hover:scale-105 transition-transform"
                    />
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            No images added yet. Click the plus icon to start!
          </div>
        )}

        <div className="mt-4 flex justify-end gap-3">
          <IoIosAddCircle
            onClick={addGalleryImg}
            className="text-black w-10 h-10 cursor-pointer hover:scale-110 transition-transform"
            title="Add image"
          />
        </div>
      </div>

      <div className="flex justify-start">
        <button
          onClick={() => setIsActive(3)}
          className="text-[15px] px-6 py-3 flex items-center bg-black rounded-lg text-white hover:bg-opacity-90 transition-colors"
        >
          Next
          <GoArrowUpRight className="text-xl ml-1" />
        </button>
      </div>
    </div>
  );
};

export default Media;