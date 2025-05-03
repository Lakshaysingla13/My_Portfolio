import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function LoadingPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4000); // Adjust loading duration here
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 text-white z-50 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-black to-gray-900 opacity-80">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-gradient-to-r from-teal-500 to-purple-700 blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-gradient-to-l from-indigo-600 to-pink-500 blur-3xl opacity-20 animate-pulse-slow"></div>
      </div>

      {/* Animated Loading Content */}
      <div className="relative z-10 flex flex-col items-center space-y-8">
        {/* Rotating Elements */}
        <motion.div
          className="relative flex items-center justify-center"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "linear",
          }}
        >
          <div className="w-32 h-32 border-4 border-t-teal-400 border-r-transparent rounded-full animate-spin-fast"></div>
          <div className="absolute w-20 h-20 border-4 border-b-indigo-400 border-l-transparent rounded-full animate-spin-reverse"></div>
        </motion.div>

        {/* Glowing Loading Text */}
        <motion.h1
          className="text-2xl md:text-4xl font-bold text-teal-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
        >
          Initializing Your Experience...
        </motion.h1>

        {/* Progress Bar Animation */}
        <motion.div
          className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
        >
          <div className="h-full bg-gradient-to-r from-teal-400 to-purple-500"></div>
        </motion.div>
      </div>
    </div>
  );
}

export default LoadingPage;
