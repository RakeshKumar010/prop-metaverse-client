import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <div className="w-full lg:w-full bg-logoBlue/5 p-8  rounded">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 tracking-tight">
        Contact Us
      </h2>



      
      <ul className="space-y-4 text-gray-600">
        <li className="flex items-start">
          <FaMapMarkerAlt className="text-logoBlue mr-3 mt-1" />
          <div>
            <strong className="font-medium">Address:</strong>
            <p>
              The Citadel Tower, Office No. 1603,
              <br />
              Business Bay, Dubai, UAE
            </p>
          </div>
        </li>
        <li className="flex items-start">
          <FaPhone className="text-logoBlue mr-3 mt-1" />
          <div>
            <strong className="font-medium">Contact:</strong>
            <p>
              +971 4225 0996
              <br />
              +971 50 5080 6622
            </p>
          </div>
        </li>
        <li className="flex items-start">
          <FaEnvelope className="text-logoBlue mr-3 mt-1" />
          <div>
            <strong className="font-medium">Email:</strong>
            <p>
              <a
                href="mailto:info@dxpact.ae"
                className="text-logoBlue hover:underline"
              >
                info@dxpact.ae
              </a>
            </p>
          </div>
        </li>
        <li className="flex items-start">
          <FaInstagram className="text-logoBlue mr-3 mt-1" />
          <div>
            <strong className="font-medium">Follow Us:</strong>
            <p>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-logoBlue hover:underline"
              >
                @dxpactrealestate
              </a>
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;