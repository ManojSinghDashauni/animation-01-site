import React from 'react'
import { motion } from "motion/react";
import { slideUp } from "../../utility/animation";

const Hero = () => {
  return (
    <section>
        <div className='container bg-BrandWhite rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[650px]'>
            {/* text section */}
            <div className='flex flex-col justify-center xl"pr-40'>
            <div className='mt-24 mb-10 md:mt-0 md:mb-0 space-y-6 text-center md:text-left'>
                <motion.h1 variants={slideUp(0.2)}
          initial="initial"
          whileInView="animate" className='text-5xl font-bold text-darkBlue'>
                    Lorem ipsum <br/> consectetur adipisicing 
                </motion.h1>
                <motion.p
                variants={slideUp(0.4)}
                initial="initial"
                whileInView="animate"
                 className=' text-lg text-gray-400 mt-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In ea molestias aut deserunt odio cumque sed iusto quibusdam magnam architecto minus exercitationem dolorum, veniam aliquid suscipit laboriosam iste tempora esse.
                </motion.p>
                <motion.div
                variants={slideUp(0.6)}
                initial="initial"
                whileInView="animate"
                 className=' bg-primary text-white px-6 py-4 rounded-lg mt-4 w-fit mx-auto md:mx-0 font-bold hover:shadow-lg duration-200'>
                    <button>See how to use it</button>
                </motion.div>
            </div>
            </div>
            {/* image section */}
            <motion.div
            initial={{opacity:0,scale:0.5}}
            whileInView={{opacity:1,scale:1}}
            transition={{duration:0.5}}
            className='flex justify-center items-center'>
                <img src="https://images.pexels.com/photos/27598715/pexels-photo-27598715/free-photo-of-a-tray-with-cheese-jam-and-other-items-on-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" width={400} height={400} className='object-cover' />
            </motion.div>
        </div>
    </section>
  )
}

export default Hero