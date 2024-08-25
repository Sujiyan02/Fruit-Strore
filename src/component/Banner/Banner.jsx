import BannerImg from "../../assets/fruits/Banner.jpg";
import{ FadeUp } from "../../utility/animation"

import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="bg-secondary/10">
        <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
            <div className="flex justify-center items-center">
                <motion.img 
                initial={{ opacity: 0, scale:0.5 }}
                animate={{ opacity:1,scale:1 }}
                transition={{type:"spring",stiffness:100,delay:0.2}}
                viewport={{once:true}}
                src={BannerImg} alt="" className="w-[300px] md:w-[400px] h-full object-cover drop-shadow"/>
                
            </div>
            <div className="flex flex-col justify-center">
                <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
                    <motion.h1
                    variants={FadeUp(0.5)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                    className="text-3xl lg:text-6xl font-bold uppercase">{" "}Brand Info</motion.h1>
                    <motion.p
                     variants={FadeUp(0.7)}
                     initial="hidden"
                     whileInView="visible"
                     viewport={{once: true}}
                    className="">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatum. Voluptate rem repellendus accusantium qui ducimus nihil doloremque, voluptates modi porro quod. Adipisci eaque ad mollitia consequatur, debitis esse placeat expedita vitae architecto quia in, blanditiis cum rerum? Quod nulla reprehenderit dicta amet rem voluptatum debitis omnis nostrum illo commodi!
                    </motion.p>
                    <motion.p
                     variants={FadeUp(0.9)}
                     initial="hidden"
                     whileInView="visible"
                     viewport={{once: true}}
                    >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, unde.</motion.p>
                    <motion.div
              variants={FadeUp(1.1)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"> 
                <button className="primary-btn ">
                    <span className="">
                       
                    </span>
                    Leran More
                </button>
              </motion.div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner
