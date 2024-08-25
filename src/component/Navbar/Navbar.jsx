import { FaLeaf } from "react-icons/fa";
import { NavbarMenu } from "../../mockData/data";
import { MdMenu, MdOutlineShoppingCart } from "react-icons/md";
import { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";
import {motion} from "framer-motion";

const Navbar = () => {
    const [open, Setopen]= useState(false);

  return (
   
    <>
      <nav>
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity:1 }}
        transition={{duration:0.5,delay:0.5}}
        className="container flex justify-between items-center py-4 md:pt-4">
        <div className="text-2xl flex items-center gap-2 uppercase font-bold">
            {/* Logo section */}
            <p className="text-primary ">fruit</p>
            <p className="text-secondary">Store</p>
        <FaLeaf  className="text-green-500"/>
        </div>
            {/* main section */}
            <div className="hidden md:block">
                <ul className="flex items-center gap-6 text-gray-600">
                    {NavbarMenu.map((item) => {
                       return(
                        <li key={item.id} className="text-xl">
                        <a href={item.link}
                        className="inline-block py-1 px-3 hover:text-primary
                        hover:shadow-[0_3px_0_-1px_#ef4444]  font-semibold"
                        >{item.title}</a>
                    </li>
                
                       );
                    })}
                    <button className="text-2xl hover:bg-primary hover:text-white hover:rounded-full p-2 duration-200">
                        <MdOutlineShoppingCart />
                    </button>
                </ul>
            </div>

            {/* mobile hamburger menu section */}
            <div className="md:hidden" onClick={
              () => Setopen(!open)
            }>
            <MdMenu className="text-4xl " />
            </div>
        </motion.div>
      </nav>
      <ResponsiveMenu open={open} />
    </>
  );
};

export default Navbar
