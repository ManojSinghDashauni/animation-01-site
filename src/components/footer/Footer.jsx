import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { motion } from "motion/react"

const Footer = () => {
  return (
    <motion.footer initial={{opacity:0}} whileInView={{opacity:1}}>
      <div className="container py-20 flex flex-col md:flex-row md:items-center justify-between gap-10">
        {/* brand info */}
        
        <div className="space-y-4">
          <h1>logo</h1>
          <p className="text-gray-400 md:max-w-[400px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        {/* social media icons */}
        <div className="flex space-x-6 text-3xl">
          <FaFacebookF className="hover:text-primary" />
          <FaFacebookF className="hover:text-primary" />
          <FaFacebookF className="hover:text-primary" />
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
