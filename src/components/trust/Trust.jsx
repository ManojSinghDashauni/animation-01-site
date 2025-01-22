import React from "react";
import { motion } from "motion/react";
import { slideUp } from "../../utility/animation";
const Trust = () => {
  return (
    <section className="bg-BrandWhite py-16 mt-20">
      <div className="container">
        <motion.h1
          variants={slideUp(0.2)}
          initial="initial"
          whileInView="animate"
          className="py-6 text-4xl font-bold text-darkBlue text-center"
        >
          Why you can trust this tools
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6 text-center md:text-left md:px-16 xl:px-32">
            <motion.img
              variants={slideUp(0.6)}
              initial="initial"
              whileInView="animate"
              className="mix-blend-multiply mx-auto md:mx-0"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9vbneL7zyq1DV2WwOvdRaUQKUz14aaCE7cw&s"
              alt="image"
            />
            <p className="text-2xl font-semibold">Lorem ipsum dolor sit</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              sequi ab molestiae ipsam eaque eos sint rem. Eveniet,
            </p>
            <p className="text-sm text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              excepturi a animi. Ipsum voluptatibus nisi rerum facere vero
              cupiditate illo ab eaque, aperiam quaerat veniam sint tempore
              adipisci? Recusandae, dicta.
              <span className="text-primary">Learn More</span>
            </p>
          </div>
          <div className="space-y-6 text-center md:text-left md:px-16 xl:px-32">
            <motion.img
              variants={slideUp(0.6)}
              initial="initial"
              whileInView="animate"
              className="mix-blend-multiply mx-auto md:mx-0"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9vbneL7zyq1DV2WwOvdRaUQKUz14aaCE7cw&s"
              alt="image"
            />
            <p className="text-2xl font-semibold">Lorem ipsum dolor sit</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              sequi ab molestiae ipsam eaque eos sint rem. Eveniet,
            </p>
            <p className="text-sm text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              excepturi a animi. Ipsum voluptatibus nisi rerum facere vero
              cupiditate illo ab eaque, aperiam quaerat veniam sint tempore
              adipisci? Recusandae, dicta.
              <span className="text-primary">Learn More</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
