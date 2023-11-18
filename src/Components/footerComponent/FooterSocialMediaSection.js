import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const FooterSocialMediaSection = ({ Link }) => {
  return (
    <>
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
    </>
  );
};

export default FooterSocialMediaSection;
