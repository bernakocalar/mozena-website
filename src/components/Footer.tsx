import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

interface FooterProps {
  brandName?: string;
  description?: string;
  leftBarColor?: string;
  rightBarColor?: string;
  accentColor?: string;
  curveColor?: string;
}

const Footer: React.FC<FooterProps> = ({ brandName = "Mozena" }) => {
  return (
    <footer className="w-full text-white relative py-8 ">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-2"
            style={{
              color: "transparent",
              WebkitTextStroke: "1px white",
            }}
          >
            {brandName}
          </h2>
          <p className=" text-sm md:text-base italic mb-4">
            Geleceği kodlayan yazılımlar burada başlar.
          </p>

          <div className="flex justify-center space-x-6 items-center">
            <a
              href="https://www.instagram.com/mozenasoftware"
              className="hover:text-white transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/company/mozenasoftware/"
              className="hover:text-white transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs  mb-4 sm:mb-0">
              © {new Date().getFullYear()} {brandName}. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
