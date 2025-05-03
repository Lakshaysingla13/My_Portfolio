import { motion } from "framer-motion";
function AboutMeSection() {
    return (
      <section
        id="about"
        className="py-16 px-8 text-white relative"
      >
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            className="text-3xl font-bold text-center text-teal-400 mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Profile Image */}
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden bg-gray-800 shadow-lg flex-shrink-0">
              <img
                src="/src/assets/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
  
            {/* About Text */}
            <div className="flex-1 space-y-4">
              <p className="text-lg text-gray-300 leading-relaxed">
                I’m Lakshay Singla, a software developer with a passion for creating impactful digital solutions. With a knack for solving challenging problems, I focus on delivering clean and efficient code.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My expertise spans across frontend development, backend integration, and AI solutions. When I’m not coding, you’ll find me exploring new technologies or working on creative projects.
              </p>
              <div className="space-x-4">
                <a
                  href="https://drive.google.com/drive/folders/1i7OEk3C3dEZPtBwdpsC2WZqjg9riD7bP?usp=sharing"
                  className="bg-teal-500 hover:bg-teal-600 transition px-6 py-3 rounded-lg text-lg font-medium shadow-lg"
                >
                  Download Resume
                </a>
                <a
                  href="#skills"
                  className="bg-gray-700 hover:bg-gray-600 transition px-6 py-3 rounded-lg text-lg font-medium shadow-lg"
                >
                  Explore Skills
                </a>
              </div>
            </div>
          </motion.div>
        </div>
  
        {/* Background Glow */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-800/50 to-gray-900 pointer-events-none"></div> */}
      </section>
    );
  }
  
  export default AboutMeSection;
  