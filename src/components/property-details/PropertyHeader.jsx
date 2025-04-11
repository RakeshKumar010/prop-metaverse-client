import { Calendar, MapPin } from 'lucide-react';

const PropertyHeader = () => {
  return (
    <div className="w-full bg-white px-4 md:px-8 py-6 rounded">
      {/* Top Row: Status + Name + Price */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="bg-logoBlue text-white text-xs font-medium px-3 py-1 rounded inline-block mb-2">
            Apartment
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Rivage</h1>
        </div>

        <div className="mt-2 md:mt-0">
          <p className="text-gray-500 text-sm">Start from:</p>
          <span className="text-2xl font-semibold text-gray-900">1.23M</span>
        </div>
      </div>

      <hr className="my-6 border-gray-200" />

      {/* Bottom Row: Completion Date + Location */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm md:text-base text-gray-800">
        <div className="flex items-center gap-2">
          <Calendar size={18} className="text-logoBlue" />
          <span className="font-semibold">Completion Date:</span>
          <span className="ml-1 text-sm md:text-base  leading-relaxed">Dec 31, 2027</span>
        </div>

        <div className="flex items-center gap-2 sm:ml-6">
          <MapPin size={18} className="text-logoBlue" />
          <span className='text-sm md:text-base  leading-relaxed'>Abu Dhabi, Al Reem Island</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyHeader;
