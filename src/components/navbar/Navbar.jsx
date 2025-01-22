import React from "react";
import { motion } from "motion/react";

const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <div className="container py-5 flex items-center justify-between">
        {/* logo section */}
        <div>
          <h1>logo</h1>
        </div>
        {/* Navlinks section */}
        <ul className=" hidden md:flex items-center gap-5">
          <li>
            <a href="#">products</a>
          </li>
          <li>
            <a href="#">products</a>
          </li>
          <li>
            <a href="#">products</a>
          </li>
          <li>
            <a href="#">products</a>
          </li>
        </ul>
        {/* Button section */}
        <div>
          <button className="border border-grey-400 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transform duration-300">
            Get in touch
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
