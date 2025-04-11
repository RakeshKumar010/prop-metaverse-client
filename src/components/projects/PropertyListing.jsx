import React, { useState, useEffect } from "react";
import TrendingProjectCard from "../TrendingProjectCard";
import Pagination from "../Pagination";
const baseUrl = import.meta.env.VITE_APP_URL;

const PropertyListing = ({ properties }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [propertiesPerPage, setPropertiesPerPage] = useState(9); // Default value
  const [sortOption, setSortOption] = useState("Default");

  // Dynamically adjust propertiesPerPage when properties change
  useEffect(() => {
    if (properties.length > 0 && properties.length < propertiesPerPage) {
      setPropertiesPerPage(Math.min(properties.length, 9)); // Adjust to max of properties or 9
    }
  }, [properties, propertiesPerPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
    setCurrentPage(1); // Reset to first page on sort change
  };

  const handlePerPageChange = (number) => {
    setPropertiesPerPage(number);
    setCurrentPage(1); // Reset to first page on change
  };

  // Define possible per-page options, capped by total properties
  const perPageOptions = [3, 6, 9, 12, 15, 30].filter(
    (num) => num <= properties.length || num === 3
  ); // Always include 3 as a minimum option

  const sortedProperties = [...properties].sort((a, b) => {
    if (sortOption === "Newest") return new Date(b.createdAt) - new Date(a.createdAt);
    if (sortOption === "Oldest") return new Date(a.createdAt) - new Date(b.createdAt);
    if (sortOption === "Price (low to high)") return a.price - b.price;
    return 0; // Default sorting
  });

  const totalPages = Math.ceil(sortedProperties.length / propertiesPerPage);
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = sortedProperties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  return (
    <div className="bg-gray-50 md:py-10 py-5 px-3 md:px-10 lg:px-20 xl:px-28 2xl:px-40">
      {/* Dropdown Filters */}
      <div className="flex justify-end gap-4 mb-6">
        {/* Per Page Dropdown */}
        <div className="relative inline-block text-left">
          <select
            className="block w-full bg-white border border-gray-300 text-black py-2 px-4 pr-8 rounded leading-tight focus:outline-none"
            value={propertiesPerPage}
            onChange={(e) => handlePerPageChange(Number(e.target.value))}
          >
            {perPageOptions.map((num) => (
              <option key={num} value={num}>
                {num} 
              </option>
            ))}
          </select>
        </div>

        {/* Sort Dropdown */}
        <div className="relative inline-block text-left">
          <select
            className="block w-full bg-white border border-gray-300 text-black py-2 px-4 pr-8 rounded leading-tight focus:outline-none"
            value={sortOption}
            onChange={(e) => handleSortChange(e.target.value)}
          >
            <option>Default</option>
            <option>Oldest</option>
            <option>Newest</option>
            <option>Price (low to high)</option>
          </select>
        </div>
      </div>

      {/* Property Cards */}
      {currentProperties.length > 0 ? (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {currentProperties.map((proj) => (
            <div key={proj._id}>
              <TrendingProjectCard
                id={proj._id}
                propertyType={proj.propertyType}
                title={proj.title}
                location={`${proj.city}, ${proj.state}`}
                price={`$${proj.price.toLocaleString()}`}
                date={proj.constructionYear ? proj.constructionYear.toString() : "N/A"}
                developer={proj.developer || "Unknown"}
                image={
                  proj.galleryImg[0]
                    ? `${baseUrl}/uploads/property/${proj.galleryImg[0]}`
                    : "https://via.placeholder.com/400"
                }
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No properties found.</p>
      )}

      {/* Show pagination only if there’s more than one page */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default PropertyListing;