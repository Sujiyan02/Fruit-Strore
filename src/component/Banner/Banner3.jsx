
import{ FadeLeft } from "../../utility/animation"
import {motion } from "framer-motion";
import bannerImg from "../../assets/fruits/Banner-Img.jpg";

const bgstyle ={
  backgroundImage:`url(${bannerImg})`,
  backgroundPosition:"center",
  backgroundSize:"cover",
  backgroundRepeat:"no-repeat",
  
}
const Banner3 = () => {
  return (
    <section className="container mb-12">
        <div style={bgstyle}
        className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl">
          <div>

          </div>
            <div className="flex flex-col justify-center">
                <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
                    <motion.h1
                    variants={FadeLeft(0.5)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                    className="text-3xl lg:text-4xl font-bold uppercase">{" "}get fresh fruits today</motion.h1>
                    <motion.p
                     variants={FadeLeft(0.7)}
                     initial="hidden"
                     whileInView="visible"
                     viewport={{once: true}}
                    className="">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatum. Voluptate rem repellendus accusantium qui ducimus nihil doloremque, voluptates modi porro quod. 
                    </motion.p>

                    <motion.div
              variants={FadeLeft(0.9)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"> 
                <button className="primary-btn ">
                    <span className="">
                   
                    </span>
                   Learn More
                </button>
              </motion.div>
                </div>
            </div>

            
        </div>
    </section>
  )
}

export default Banner3
