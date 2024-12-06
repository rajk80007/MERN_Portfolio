// src/components/Hero.js
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {/* Hero Section */}
      <header className="bg-cover bg-center h-screen relative" style={{ backgroundImage: "url('images/herobg4.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white flex flex-col justify-center items-center h-full">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
       
            {isLoading ? <div className="w-screen h-screen bg-black flex justify-center items-center fixed top-0 left-0 ">
              <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Hi, 
            </motion.div>
              </div> : 
                   <motion.div
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ duration: 0 }}
                 >
                   Hi, I&apos; m
                 </motion.div>
                 }
            <motion.div className="my-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 2,
                delay: 2
              }}
            >
              Rajesh Kumar
            </motion.div>

          </h1>

          <p className="text-xl mb-6">Full-stack Developer | Laravel & React Expert</p>
          <a href="#projects" className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg hover:bg-orange-600 transition duration-300">
            View My Work
          </a>
        </div>
      </header>
    </>
  );
};

export default Hero;
