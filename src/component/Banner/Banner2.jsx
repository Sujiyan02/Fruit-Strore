import PlateImg from "../../assets/fruits/FruitePlate.png";
import{ FadeUp } from "../../utility/animation"

import { motion } from "framer-motion";

const Banner2 = () => {
  return (
    <section className="">
        <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
          
            <div className="flex flex-col justify-center">
                <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
                    <motion.h1
                    variants={FadeUp(0.5)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                    className="text-3xl lg:text-6xl font-bold uppercase">{" "}Online Fruite Store</motion.h1>
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
                    Download the App
                </button>
              </motion.div>
                </div>
            </div>

            <div className="flex justify-center items-center">
                <motion.img 
                initial={{ opacity: 0, x:200,rotate: 75 }}
                animate={{ opacity:1,x:0,rotate:0}}
                transition={{duration:1,delay:0.2}}
                viewport={{once:true}}
                src={PlateImg} alt="" className="w-[350px] md:w-[500px] h-full object-cover drop-shadow"/>
                
            </div>
        </div>
    </section>
  )
}

export default Banner2
