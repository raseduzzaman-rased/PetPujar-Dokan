import React from "react";
import { IoFastFood } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";


const Footer = () => {
  return (
    <footer className="bg-slate-100 text-gray-800 w-full pt-6 shadow-inner">
      <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-5 gap-8 py-12">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <IoFastFood className="w-8 h-8 text-green-500" />
            <span className="text-xl font-bold">
 <Typewriter
        words={["PetPujar Dokan"]}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />

            </span>
          </div>
          <p className="text-gray-600 text-sm">
            Fresh and delicious food delivered to your doorstep. Explore a wide range of
            categories and enjoy your favorite meals anytime!
          </p>
        </div>

        {/* Customer Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-700">Customer Services</h3>
          <ul className="space-y-2 text-gray-800 text-sm">
            <li>
              <Link to="/" className="hover:text-green-500 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/categories" className="hover:text-green-500 transition-colors">
                Categories
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-green-500 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-green-500 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-700">Quick Links</h3>
          <ul className="space-y-2 text-gray-800 text-sm">
            <li>
              <Link to="/login" className="hover:text-green-500 transition-colors">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="hover:text-green-500 transition-colors">
                Register
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-green-500 transition-colors">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/support" className="hover:text-green-500 transition-colors">
                Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-700">Contact Info</h3>
          <ul className="text-gray-800 text-sm space-y-2">
            <li className="hover:text-green-500"> 📞 +880 1751 202 502</li>
            <li className="hover:text-green-500"> 📧 info@petpujardokar.com</li>
            <li className="hover:text-green-500"> 📍  Dhaka, Bangladesh</li>
            <li className="hover:text-green-500"> 🕖 Mon-Fri 9am-5pm </li>
          </ul>
        </div>

        {/* Newsletter / Subscribe */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-700">Subscribe</h3>
          <p className="text-gray-600 text-sm mb-2">
            Get updates & alerts directly to your inbox.
          </p>
          <form className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded w-full text-gray-800 outline-1 outline-gray-400 focus:outline-green-500"
            />
            <button
              type="submit"
              className="bg-green-400 hover:bg-green-600 text-white px-3 py-2 rounded transition-colors"
            >
              <FaEnvelope />
            </button>
          </form>
        </div>
      </div>

      {/* Divider & Bottom */}
      <div className="border-t border-gray-600 mt-8 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} PetPujar Dokar. All rights reserved.
          </p>
          <div className="flex gap-4 text-gray-800 text-lg">
            <Link to="#" className="hover:text-blue-500 transition-colors">
              <FaFacebookF />
            </Link>
            <Link to="#" className="hover:text-sky-400 transition-colors">
              <FaTwitter />
            </Link>
            <Link to="#" className="hover:text-pink-500 transition-colors">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
