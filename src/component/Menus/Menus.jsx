// import { MenusData } from "../../mockData/data";
import Fruite1 from "../../assets/fruits/Fruite1.png";
import Orange from "../../assets/fruits/Orange.png";
import Avacado from "../../assets/fruits/Avacado.jpg";
import Cherry from "../../assets/fruits/Cherry.jpg";
import {motion} from "framer-motion";
import{ FadeLeft } from "../../utility/animation"

const MenusData =[
  {
      id: 1,
      title:"Fresh red Apple",
      link: "/",
      price:"120 RS",
      img: Fruite1,
      delay: 0.3,
  },

  {
      id: 2,
      title:"Fresh Orange",
      link: "/",
      price:"120 RS",
      img: Orange,
      delay: 0.6,
  },

  {
      id: 3,
      title:"Fresh Avocado",
      link: "/",
      price:"120 RS",
      img: Avacado,
      delay: 0.9,
  },
  {
      id: 4,
      title:"Fresh Cherry",
      link: "/",
      price:"120 RS",
      img: Cherry,
      delay: 1.2,


  }


]
const Menus = () => {
  return (
    <section>
     <div className="container pt-2 pb-20">
      <motion.h1
      initial={{ opacity: 0, x:-200 }}
      animate={{ opacity:1,x:0}}
      transition={{duration:1,delay:0.3}}
      className="text-2xl font-bold text-left pb-10 uppercase">Our Menus</motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2
      md:grid-cols-4 gap-6 
      ">
        {
          MenusData.map((menu) => {
            return(
              <motion.div
              variants={FadeLeft(menu.delay)}
              initial="hidden"
              whileInView={"visible"}
              whileHover={{scale: 1.1}}
              key={menu.id} className="bg-slate-140 rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row justify-around items-center gap-3">
              <img src={menu.img} alt="" className="w-[70px] mb-4 scale-145 transform -translate-y-6"
               />
              <div>
                <h1 className="text-lg font-semibold">{menu.title}</h1>
                <p className="text-lg font-semibold text-secondary">{menu.price}</p>
              </div>
              </motion.div>
            );

          })
        }
      </div>
     </div>
    </section>
  )
}

export default Menus
