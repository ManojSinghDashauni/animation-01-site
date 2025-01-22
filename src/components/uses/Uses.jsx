import React from "react";
import { motion } from "motion/react";
import { slideLeft,slideRight } from "../../utility/animation";

const Uses = () => {
  return (
    <section>
      <div className="container">
        <div className="grid frid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
          <motion.div
            variants={slideRight(0.2)}
            initial="initial"
            whileInView="animate"
           className="order-last md:order-first flex flex-col justify-center xl:pr-14">
            <h1 className="text-3xl font-bold text-darkBlue">
              How it helps people
            </h1>
            <p className=" text-lg text-gray-400 mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              consequatur perferendis ipsum.
            </p>
            <p className=" text-sm text-gray-400 mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              consequatur perferendis ipsum.
              <a href="#" className="text-primary">
                Learn More
              </a>
            </p>
            <button className=" w-fit mt-4 border border-gray-200 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transform duration-300">
              Get in Touch
            </button>
          </motion.div>
          <div>
            <motion.img 
            variants={slideLeft(0.4)}
            initial="initial"
            whileInView="animate"
             className="w-ful rounded-3xl" src="https://images.pexels.com/photos/27294736/pexels-photo-27294736/free-photo-of-a-plate-of-food-on-a-table-with-a-tea-pot.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <p className="text-gray-400 mt-4">Loremam</p>
          </div>
          <div>
            <motion.img
            variants={slideLeft(0.6)}
            initial="initial"
            whileInView="animate"
             className="w-ful rounded-3xl" src="https://images.pexels.com/photos/27294736/pexels-photo-27294736/free-photo-of-a-plate-of-food-on-a-table-with-a-tea-pot.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <p className="text-gray-400 mt-4">Loremam</p>
          </div>
          <div>
            <motion.img
            variants={slideLeft(0.8)}
            initial="initial"
            whileInView="animate"
             className="w-ful rounded-3xl" src="https://images.pexels.com/photos/27294736/pexels-photo-27294736/free-photo-of-a-plate-of-food-on-a-table-with-a-tea-pot.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <p className="text-gray-400 mt-4">Loremam</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Uses;
