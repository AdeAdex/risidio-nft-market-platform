import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-footer-background text-white py-12 px-4 lg:px-2">
        <div className="container mx-auto flex flex-wrap justify-between">
          {/* Risidio Logo */}
          <div className="mb-8">
            <img
              src="/risidio_logo.svg"
              alt="Risidio Logo"
              className="w-24 h-24 lg:w-32 lg:h-32"
            />
          </div>

          {/* About Us Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p>
              Empowering creatives with Web 3.0 technology using the power of
              NFTs and crypto
            </p>
          </div>

          {/* Contact Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p>124 City Road, London EC1V 2NX</p>
            <p>Email: info@risidio.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>

          {/* Social Media Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
            <h3 className="text-lg font-bold mb-4">Social Media</h3>
            <ul className="flex space-x-4">
              <li>
                <Link to="#" className="text-gray-300 hover:text-white">
                  <FaFacebook size={24} />
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-white">
                  <FaTwitter size={24} />
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-white">
                  <FaInstagram size={24} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
