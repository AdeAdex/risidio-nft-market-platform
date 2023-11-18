import React from "react";
import { Link } from "react-router-dom";
import FooterLogo from "./FooterLogo";
import FooterAboutUs from "./FooterAboutUs";
import FooterContactUs from "./FooterContactUs";
import FooterSocialMediaSection from "./FooterSocialMediaSection";

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
