import React from "react";
import { Link } from "react-router-dom";
import FooterLogo from "../footerComponent/FooterLogo";
import FooterAboutUs from "../footerComponent/FooterAboutUs";
import FooterContactUs from "../footerComponent/FooterContactUs";
import FooterSocialMediaSection from "../footerComponent/FooterSocialMediaSection";

const Footer = () => {
  return (
    <>
      <footer className="bg-footer-background text-white py-12 px-4 lg:px-2">
        <div className="container mx-auto flex flex-wrap justify-between">
          <FooterLogo />
          <FooterAboutUs />
          <FooterContactUs />
          <FooterSocialMediaSection Link={Link} />
        </div>
      </footer>
    </>
  );
};

export default Footer;
