import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
       
        <div>
          <img src="/logo.png" alt="Link2Campus Logo" className="w-48 " />
          <p className="mt-4 text-sm">
            L2C provides guidance and support for short-term programs.
            Admissions are subject to university discretion. We are not directly
            affiliated with the institutions listed.
          </p>
        </div>

      
        <div>
          <h3 className="font-bold text-lg">Programs</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>Summer Schools</li>
            <li>Executive Programs</li>
            <li>Bootcamps</li>
          </ul>
        </div>


        <div>
          <h3 className="font-bold text-lg">Resources</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>Application Guide</li>
            <li>Visa Support</li>
            <li>FAQs</li>
          </ul>
        </div>

      
        <div>
          <h3 className="font-bold text-lg">Contact</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaEnvelope /> profiles@link2campus.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhone /> +1 (888) xxxx-xxxx
            </li>
          </ul>
          <div className="flex gap-4 mt-4 text-lg">
            <FaLinkedinIn className="cursor-pointer hover:text-gray-300" />
            <FaFacebookF className="cursor-pointer hover:text-gray-300" />
            <FaInstagram className="cursor-pointer hover:text-gray-300" />
            <FaYoutube className="cursor-pointer hover:text-gray-300" />
          </div>
        </div>
      </div>

    
      <div className="mt-8 border-t border-gray-400 pt-4 text-center text-sm">
        &copy; 2024 Link2Campus. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
