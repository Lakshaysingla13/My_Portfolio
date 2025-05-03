import { motion } from "framer-motion";
import Typing from "react-typing-effect";

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Light Particles Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-1 h-1 bg-teal-400 rounded-full opacity-50"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 1, 0], y: [0, -20, 0] }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
            }}
          ></motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <motion.div
          className="text-center md:text-left space-y-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="text-teal-400 ">
              <Typing
                text={["Lakshay Singla"]}
                speed={100}
                eraseSpeed={50}
                eraseDelay={2000}
                typingDelay={500}
                cursor="|"
                loop
              />
            </span>
          </h1>
          <motion.p
            className="text-lg md:text-2xl text-gray-300 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            A passionate Developer & Tech Enthusiast, crafting elegant and impactful solutions.
          </motion.p>
          <div className="mt-6 space-x-4">
            <motion.a
              href="mailto:lavisingla13@gmail.com"
              className="bg-teal-500 hover:bg-teal-600 transition px-6 py-3 rounded-lg text-lg font-medium shadow-lg"
              whileHover={{ scale: 1.1 }}
            >
              Hire Me
            </motion.a>
            <motion.a
              href="#projects"
              className="bg-gray-700 hover:bg-gray-600 transition px-6 py-3 rounded-lg text-lg font-medium shadow-lg"
              whileHover={{ scale: 1.1 }}
            >
              View Projects
            </motion.a>
          </div>
        </motion.div>

        {/* Right Content: Animated Image */}
        <motion.div
          className="mt-8 md:mt-0 w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.img
            src="/src/assets/front_image.png"
            alt="Hero Illustration"
            className="w-4/5 md:w-full max-w-sm md:max-w-md"
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
