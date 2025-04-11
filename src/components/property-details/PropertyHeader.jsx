import { Calendar, MapPin } from 'lucide-react';

const formatPrice = (value) => {
  const num = Number(value);
  if (isNaN(num)) return value;

  if (num >= 1e7) return `${(num / 1e7).toFixed(2)} Cr`;
  if (num >= 1e5) return `${(num / 1e5).toFixed(2)} Lakh`;
  return num.toLocaleString('en-IN'); // fallback with commas
};

const PropertyHeader = ({ status, price, title, address, constructionYear }) => {
  return (
    <div className="w-full bg-white/50 backdrop-blur-lg px-4 md:px-8 py-6 rounded  ">
      {/* Top Row: Status + Name + Price */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="bg-logoBlue text-white text-xs font-medium px-3 py-1 rounded inline-block mb-2">
            {status}
          </span>
          <h1 className="text-2xl md:text-4xl font-semibold text-gray-900">{title}</h1>
        </div>

        <div className="mt-2 md:mt-0 flex items-end gap-3">
          <p className="text-black font-semibold">Start from:</p>
          <span className="text-2xl md:text-4xl font-semibold text-gray-900">{formatPrice(price)}</span>
        </div>
      </div>

      <hr className="my-6 border-gray-200" />

      {/* Bottom Row: Completion Date + Location */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm md:text-base text-gray-800">
        <div className="flex items-center gap-2">
          <Calendar size={18} className="text-logoBlue" />
          <span className="font-semibold">Completion Date:</span>
          <span className="ml-1 text-sm md:text-base  leading-relaxed">{constructionYear}</span>
        </div>

        <div className="flex items-center gap-2 sm:ml-6">
          <MapPin size={18} className="text-logoBlue" />
          <span className='text-sm md:text-base  leading-relaxed'>{address}</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyHeader;
