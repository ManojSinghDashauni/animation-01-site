import React from "react";
import Card from "./Card";
import { motion } from "motion/react";
import { slideLeft, slideRight } from "../../utility/animation";

const Help = () => {
  return (
    <section>
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              <motion.div
                variants={slideRight(0.2)}
                initial="initial"
                whileInView="animate"
              >
                <Card
                  heading="Loreams"
                  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi totam mollitia omnis dignissimos magni nesciunt?"
                />
              </motion.div>
              <motion.div
              variants={slideRight(0.4)}
              initial="initial"
              whileInView="animate">
                <Card
                  heading="Loreams"
                  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi totam mollitia omnis dignissimos magni nesciunt?"
                />
              </motion.div>
              <motion.div
              variants={slideRight(0.8)}
              initial="initial"
              whileInView="animate">
                <Card
                  heading="Loreams"
                  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi totam mollitia omnis dignissimos magni nesciunt?"
                />
              </motion.div>
            </div>
          </div>
          <motion.div
          variants={slideLeft(0.8)}
          initial="initial"
          whileInView="animate"
           className="flex flex-col justify-center xl:pr-14">
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
                {" "}
                Learn More
              </a>
            </p>
            <button className=" w-fit mt-4 border border-gray-200 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transform duration-300">
              Get in Touch
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Help;
