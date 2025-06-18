import React from "react";
import {motion} from "framer-motion";
import Navbar from "./NavBar";
import { useScroll } from 'framer-motion';

const About = () => {
    const { scrollYProgress } = useScroll();
    return(
        <>
        <div className="sticky top-0 z-50">
            <Navbar />
        </div>
        <div className='bg-gray-100'>
            <motion.div 
        style={{ scaleX: scrollYProgress }}
        className='bg-red-500 origin-left w-full h-2 md:h-3 fixed top-16 left-0 rounded-full z-40'
      />
        </div>

        </>
    )
}

export default About;