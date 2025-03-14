import { useState, useEffect, useContext } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaTwitter,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { MdEmail, MdHome, MdOutlineStar } from "react-icons/md";
import { Link } from "react-router-dom";
import Logo from "../../assets/logopng.png";
import { RiLoginBoxFill } from "react-icons/ri";
import { MyContext } from "../../App";
import Popup from "./Popup";
import DamacPopUp from "./Damac/DamacPopUp";
import DamacDetailsPopUp from "./Damac/DamacDetailsPopUp";
import DamacOtpPupUp from "./Damac/DamacOtpPupUp";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isPopUpOpen, setIsPopUpOpen,damacIsPopUpOpen,damacDetailsIsPopUpOpen,setDamacDetailsIsPopUpOpen,damacOtpPopUpOpen, setDamacOtpPopUpOpen } = useContext(MyContext);

  useEffect(() => {
    setTimeout(() => {
      setDamacDetailsIsPopUpOpen(true);
    }, 1000);
    
    
    setTimeout(() => {
      setIsPopUpOpen(true);
    }, 10000);

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        // Change threshold to 100vh
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out 
      ${
        scrolled ? "bg-[#061a33] shadow-lg" : "bg-transparent backdrop-blur-xl"
      } text-white `}
      >
        {/* Top Bar */}
        <div className="hidden md:flex justify-between items-center px-40 text-sm border-b border-gray-600">
          <div className="flex items-center space-x-4 py-1">
            <span className="flex items-center space-x-1">
              <FaPhoneAlt />
              <span>+91 805 360 2011</span>
            </span>
            <span className="flex items-center space-x-1">
              <MdEmail />
              <span>support@propmetaverse.com</span>
            </span>
          </div>
          <div className="space-x-8 flex items-center">
            <Link
              to="/"
              className="hover:text-logoColor flex items-center gap-1"
            >
              <MdOutlineStar /> Favorites
            </Link>
            <Link
              to="/"
              className="hover:text-logoColor flex items-center gap-1"
            >
              <RiLoginBoxFill /> Login / Register
            </Link>
            <div className="flex items-center">
              <FaFacebookF className="border-l p-3 text-4xl border-gray-600" />
              <FaTwitter className="border-l p-3 text-4xl border-gray-600" />
              <FaLinkedinIn className="border-x p-3 text-4xl border-gray-600" />
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav className="flex justify-between items-center px-6 md:px-10 lg:px-40 py-4">
          {/* Logo */}

          <img src={Logo} alt="logo" className="w-32 md:w-40" />

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Navigation Links */}
          <ul
            className={`${
              menuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row md:items-center absolute   md:static top-[60px] left-0 w-full md:w-auto 
        bg-[#061a33] md:bg-transparent md:space-x-10 space-y-6 md:space-y-0 p-6 md:p-0`}
          >
            <li>
              <Link to="/" className="hover:text-logoColor flex items-center">
                <MdHome />
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-logoColor">
                For Sale
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-logoColor">
                For Rent
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-logoColor">
                Investments
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-logoColor">
                Company
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-logoColor">
                Contact
              </Link>
            </li>
            <li>
              <button className="bg-logoColor hover:bg-logoColor/90 text-white px-4 py-2 rounded w-full md:w-auto">
                Submit Your Property
              </button>
            </li>
          </ul>
        </nav>
      </header>
      {isPopUpOpen ? <Popup /> : null}
      {damacIsPopUpOpen ? <DamacPopUp /> : null}
      {damacDetailsIsPopUpOpen ? <DamacDetailsPopUp /> : null}
      {damacOtpPopUpOpen ? <DamacOtpPupUp /> : null}
    </>
  );
};

export default Navbar;
