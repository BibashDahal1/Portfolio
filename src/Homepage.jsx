import Navbar from './NavBar';
import { motion } from 'framer-motion';
import { useScroll } from 'framer-motion';

const Homepage = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div className='bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white'>
      {/* Scroll progress indicator */}
      <motion.div 
        style={{ scaleX: scrollYProgress }}
        className='bg-red-500 origin-left w-full h-2 md:h-3 fixed top-16 left-0 rounded-full z-40'
      />
      
      <div className="flex flex-col items-center justify-center min-h-screen pt-16 pb-8 px-4">
        {/* Animated header card */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full h-24 md:h-32 bg-purple-500 shadow-xl rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8"
        >
          <div className='text-sm sm:text-xl md:text-2xl lg:text-3xl font-bold font-mono text-center px-2'>
            <motion.div 
              animate={{ scale: [1, 1.6, 1.6, 1.6, 1] }} 
              transition={{ delay: 1 }}
            >
              <motion.div 
                whileHover={{ scale: 1.6 }}
                className="whitespace-nowrap overflow-hidden text-ellipsis"
              >
                Hello Welcome to My FOLIO-SITE
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Main content */}
        <div className="text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
            Welcome to My Portfolio
          </h1>
          <p className="text-base sm:text-lg text-white-700 mb-6 md:mb-8 max-w-2xl mx-auto">
            This is a simple portfolio page built with React and Tailwind CSS.
          </p>
        </div>  
      </div>
    </div>
    </>
  );
}

export default Homepage;
